# nginx 调优

nginx 有很多的配置参数，这里只将常用的一部分：

## 增加工作线程数和并发连接数

```bash
worker_processes  1;  # 配置为 CPU 的核心数
events {
    # 每一个进程打开的最大连接数
    # 包含了 nginx 与客户端 和 nginx 与 upstream 之间的链接
    worker_connections  1024; 
    # 可以一次建立多个连接
    multi_accept on;
    use epoll;
}
```

可以查看 nginx 的进程数量来确认启动了几个 worker_processes

```bash
ps -ef | grep nginx
```

## 启用后端长链接

做反向代理的时候，如何与后端 server 保持长链接

```bash
# 默认配置里面有一行，这个是指浏览器与 nginx 之间的长链接保持 65 秒
keepalive_timeout  65;

# 与后端建立长链接，需要如下配置
server {
  ...
  # 配置了一个后端集群
  upstream server_pool{
    server localhost:8080 weight=1 max_fails=2 fail_timeout=30s;
    server localhost:8081 weight=1 max_fails=2 fail_timeout=30s;
    keepalive 300; # 300 个长链接
  }
  location / {
  	proxy_http_version 1.1;
  	proxy_set_header Upgrade $http_upgrade;
  	proxy_set_header Connection "upgrade";
  	# 指向了后端集群
  	proxy_pass http://server_pool/;
  }
}
```

## 启用缓存、压缩

http 协议以文本为主，对文本做压缩效果很显著

```
# 如果有压缩好的文件，直接使用
gzip_static on; 
# 找不到预压缩文件，进行动态压缩
gzip on;
gzip_min_length 3k;
gzip_buffers 4 16k;
gzip_http_version 1.0;
gzip_comp_level 2;
gzip_proxied any;
gzip_types text/plain application/x-javascript application/javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
gzip_vary on;  # Vary:Accept-Encoding
gzip_disable "MSIE [1-6]\."; # 不支持 IE6

```

## 操作系统优化

配置文件：`/etc/sysctl.conf`，与 tcpip 协议相关的配置

```bash
# 防止一个套接字在有过多视图链接到达时引起过载
sysctl-w net.ipv4.tcp_syncookies=1
# 连接队列：默认为 128
sysctl-w net.core.somaxconn=1024
# timewait 的超时时间
sysctl-w net.ipv4.tcp_fin_timeout=10
# os 直接使用 timewait 的链接
sysctl-w net.ipv4.tcp_tw_reuse=1
# 回收禁用
sysctl-w net.ipv4.tcp_tw_recycle=0
```

配置文件：`/etc/security/limits.conf`

```bash
* hard nofile 204800
* soft nofile 204800
* soft core unlimited
* soft stack 204800
```

其他优化

```bash
# 减少文件在应用和内核之间拷贝
sendfile on;
# 当数据包达到一定大小再发送
tcp_nopush on;
# 有数据随时发送
tcp_nodelay off;
```

