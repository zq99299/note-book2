# nginx-rrd 图形化监控

[安装参考这篇文章](https://blog.51cto.com/hao360/1366846)，它是基于 stub_status 状态信息的，它是基于 php 编写的

先安装 php 环境

```bash
# 安装依赖
yum install php php-gd php-soap php-mbstring php-xmlrpc php-dom php-fpm -y

# nginx 整合 pgp-fpm
# 修改 /etc/php-fpm.d/www/conf 文件中的 user 和 group 与 nginx.conf 中的一致
user=nginx
group=nginx

# 启动 php-fpm 服务
systemctl start php-fpm

# 修改 nginx 配置
location ~ \.php${
  root /usr/share/nginx/html;
  fastcgi_pass 127.0.0.1:9000;
  fastcgi_index index.php;
  fastcgiparam SCRIPT_FILENAME &document_root/$fastcgi_script_name;
  include fastcgi_params;
}

# 重启 nginx
nginx -s reload

# 测试 php 环境是否已经搭建好了
# 在 /usr/share/nginx/html 下编写一个 demo.php 文件
<?php phpinfo(); ?>
# 然后访问 localhost:80/demo.php
```

安装 rrdtool 

```bash
# 相关依赖
yum install perl rrdtool perl-libwww-perl libwww-perl perl-rrdtool -y

# 安装 nginx-rdd
wget http://soft.vpser.net/status/nginx-rrd/nginx-rrd-0.1.4.tgz

tar xf nginx-rrd-0.1.4.tgz
cd nginx-rrd-0.1.4
cp usr/sbin/* /usr/sbin/
# 复制配置文件到 etc 下
cp etc/nginx-rrd.conf  /etc/
cp etc/cron.d/nginx-rrd.cron /etc/cron.d/
cp html/index.php /usr/share/nginx/html/

# 修改配置
vim /etc/nginx-rrd.conf
RRD_DIR="/usr/share/nginx/html/nginx-rrd"
WWW_DIR="/usr/share/nginx/html/"
SERVERS_URL="http://127.0.0.1/nginx_status;127.0.0.1 http://localhost/nginx_status;http://localhost"
# 新建定时任务，设置定时收集数据

crontab -e  
* * * * * /bin/sh /usr/sbin/nginx-collect  
*/10 * * * * /bin/sh /usr/sbin/nginx-graph
service crond restart  # 重启crond服务
# 查看任务
tail -f /var/log/cron

# ab 压测
# 安装 ab 压测工具
yum -y install httpd-tools
ab -n 10000 -c 10 http:/127.0.0.1/index.html
# 访问 127.0.0.1/index.php 就能看到监控结果了
```

它的原理是通过定时任务，不停的将监控的数据生成图片，然后在这里浏览