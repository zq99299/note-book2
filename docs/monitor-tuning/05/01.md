# ngx_http_stub_status 监控链接信息

是 nginx 自带的一个模块，可以使用命令查看是否已经编译进来了

```bash
nginx -V
nginx version: nginx/1.17.4
built by cl 16.00.40219.01 for 80x86
built with OpenSSL 1.1.1d  10 Sep 2019
TLS SNI support enabled
configure arguments: --with-cc=cl --builddir=objs.msvc8 --with-debug --prefix= --conf-path=conf/nginx.conf --pid-path=logs/nginx.pid --http-log-path=logs/access.log --error-log-path=logs/error.log --sbin-path=nginx.exe --http-client-body-temp-path=temp/client_body_temp --http-proxy-temp-path=temp/proxy_temp --http-fastcgi-temp-path=temp/fastcgi_temp --http-scgi-temp-path=temp/scgi_temp --http-uwsgi-temp-path=temp/uwsgi_temp --with-cc-opt=-DFD_SETSIZE=1024 --with-pcre=objs.msvc8/lib/pcre-8.43 --with-zlib=objs.msvc8/lib/zlib-1.2.11 --with-http_v2_module --with-http_realip_module --with-http_addition_module --with-http_sub_module --with-http_dav_module --with-http_stub_status_module --with-http_flv_module --with-http_mp4_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_auth_request_module --with-http_random_index_module --with-http_secure_link_module --with-http_slice_module --with-mail --with-stream --with-openssl=objs.msvc8/lib/openssl-1.1.1d --with-openssl-opt='no-asm no-tests -D_WIN32_WINNT=0x0501' --with-http_ssl_module --with-mail_ssl_module --with-stream_ssl_module
```

也就是这个 `--with-http_stub_status_module`

增加配置

```bash
location = /nginx_status {
 stub_status on;   # 开启这个状态信息
 access_log off;
 allow 127.0.0.1;  # 运行本机访问，其他的都拒绝
 deny all;
}
```

重新加载配置后，访问 `http://localhost/nginx_status`，有以下的内容输出

```
Active connections: 2 									
server accepts handled requests
 4 			4 				2				3 
Reading: 0 Writing: 1 Waiting: 1 
```

以上信息与如何使用在官方文档中也有，[就是具体的模块文档里面](http://nginx.org/en/docs/http/ngx_http_stub_status_module.html)


- Active connections


  当前活动的客户端连接数，包括`Waiting`连接数。

- accepts


  接受的客户端连接总数。

- handled


  已处理的连接总数。通常，参数值与 `accepts`  除非达到某些资源限制（例如， [worker_connections](http://nginx.org/en/docs/ngx_core_module.html#worker_connections) 限制）相同。

- requests


  客户端请求总数。

- Reading


  nginx 正在读取请求标头的当前连接数。

- Writing


  nginx 正在将响应写回到客户端的当前连接数。

- Waiting


  当前等待请求的空闲客户端连接数。

其中后 5 个信息比较重要，可以知道当前的 nginx 是否繁忙