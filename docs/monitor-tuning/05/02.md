# ngxtop 监控请求信息

1. 安装 python-pip

   ```bash
   yum install epel-release
   yum install python-pip
   ```

2. 安装 ngxtop

   ```bash
   pip install ngxtop
   ```

[ngxtop 官方文档](https://github.com/lebinh/ngxtop)

**ngxtop ** 解析您的 nginx 访问日志，并输出 **类似**`top` nginx 服务器的有用指标。因此，您可以实时了解服务器的状况。

因此需要开启访问日志，并且此工具不支持在 windows 下使用，由于一些库的兼容性只适合在 linux 等系统下使用。

## ngxtop 使用

- 指定配置文件：

  ```bash
  ngtop -c /etc/nginx/nginx.conf
  ```

- 查询状态是 200 的访问信息

  ```bash
  ngtop -c /etc/nginx/nginx.conf -i 'status==200'
  ```

- 查询访问最多 IP

  ```bash
  ngtop -c /etc/nginx/nginx.conf -g remote_addr
  ```

  