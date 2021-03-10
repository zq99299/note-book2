(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{631:function(s,n,a){"use strict";a.r(n);var t=a(13),r=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"nginx-rrd-图形化监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-rrd-图形化监控"}},[s._v("#")]),s._v(" nginx-rrd 图形化监控")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.51cto.com/hao360/1366846",target:"_blank",rel:"noopener noreferrer"}},[s._v("安装参考这篇文章"),a("OutboundLink")],1),s._v("，它是基于 stub_status 状态信息的，它是基于 php 编写的")]),s._v(" "),a("p",[s._v("先安装 php 环境")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装依赖")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" php php-gd php-soap php-mbstring php-xmlrpc php-dom php-fpm -y\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nginx 整合 pgp-fpm")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改 /etc/php-fpm.d/www/conf 文件中的 user 和 group 与 nginx.conf 中的一致")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("group")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动 php-fpm 服务")]),s._v("\nsystemctl start php-fpm\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改 nginx 配置")]),s._v("\nlocation ~ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(".php"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${\n  root "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("share"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("html;\n  fastcgi_pass 127.0.0.1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("9000;\n  fastcgi_index index.php;\n  fastcgiparam SCRIPT_FILENAME &document_root"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("$fastcgi_script_name;\n  include fastcgi_params;\n}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启 nginx")]),s._v("\nnginx -s reload\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试 php 环境是否已经搭建好了")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 /usr/share/nginx/html 下编写一个 demo.php 文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("?php phpinfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" ?"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 然后访问 localhost:80/demo.php")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("p",[s._v("安装 rrdtool")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 相关依赖")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" perl rrdtool perl-libwww-perl libwww-perl perl-rrdtool -y\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 nginx-rdd")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://soft.vpser.net/status/nginx-rrd/nginx-rrd-0.1.4.tgz\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xf nginx-rrd-0.1.4.tgz\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" nginx-rrd-0.1.4\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" usr/sbin/* /usr/sbin/\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制配置文件到 etc 下")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" etc/nginx-rrd.conf  /etc/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" etc/cron.d/nginx-rrd.cron /etc/cron.d/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" html/index.php /usr/share/nginx/html/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/nginx-rrd.conf\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RRD_DIR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/share/nginx/html/nginx-rrd"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WWW_DIR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/share/nginx/html/"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SERVERS_URL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://127.0.0.1/nginx_status;127.0.0.1 http://localhost/nginx_status;http://localhost"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建定时任务，设置定时收集数据")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" -e  \n* * * * * /bin/sh /usr/sbin/nginx-collect  \n*/10 * * * * /bin/sh /usr/sbin/nginx-graph\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" crond restart  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启crond服务")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看任务")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -f /var/log/cron\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ab 压测")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 ab 压测工具")]),s._v("\nyum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" httpd-tools\nab -n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v(" -c "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" http:/127.0.0.1/index.html\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 访问 127.0.0.1/index.php 就能看到监控结果了")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br")])]),a("p",[s._v("它的原理是通过定时任务，不停的将监控的数据生成图片，然后在这里浏览")])])}),[],!1,null,null,null);n.default=r.exports}}]);