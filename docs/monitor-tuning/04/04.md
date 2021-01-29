# Tomcat 调优

有以下三个方面可以调优：

- 内存优化

  后续会有专门的章节讲解，因为 Tomcat 也是个 java 进程

- 线程优化

- 配置优化

这里着重讲解后面两个方面

## 线程优化

配置文档在：`docs/config/http.html` ，里面有很多的配置信息，我们这里关注的有：

- maxConnections：最大连接数
- acceptCount：相当于队列容量，当超出 maxConnections 时，把请求压入队列中
- maxThreads：最大工作线程
- minSpareThreads：最小空闲工作线程

## 配置优化

`docs/config/host.html`

- autoDeploy：是否自动部署

  它会开启额外的线程去定期检查部署 webapps 目录下是否有新的应用需要部署，然后处理它。建议关闭该功能

`docs/config/http.html`

- enableLookups：是否从 DNS 获取远程 IP

  设置为 `true`，如果你想调用  `request.getRemoteHost()`，以便返回远程客户的实际主机名执行DNS查找。设置为 `false` 跳过 DNS 查找并改为以字符串形式返回 IP 地址（从而提高性能）。默认情况下，DNS 查找被禁用。

`config/context.html`

- reloadable：监控应用程序的变化，重新载入

  设置为`true`，如果你想卡塔利娜监测类 `/WEB-INF/classes/` 和 `/WEB-INF/lib` 更改，并自动如果检测到变化重新加载Web 应用程序。此功能在应用程序开发期间非常有用，但是它需要大量的运行时开销，因此不建议在已部署的生产应用程序上使用。这就是为什么此属性的默认设置为 *false 的原因* 。但是，您可以使用 Manager Web 应用程序来触发按需重新加载已部署的应用程序。

`conf/server.xml`

- protocol：设置协议以处理传入流量。

  默认值为 `HTTP/1.1` 使用自动切换机制选择基于Java NIO 的连接器或基于 APR / native 的连接器。

  文档路径：`/docs/config/http.html`

