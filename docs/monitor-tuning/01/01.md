# JVM 参数类型

分为 3 大类：

- 标准参数
- X 参数：非标准化参数
- XX 参数：非标准化参数，主要用于 JVM 调优和 Debug

## 标准参数

在 JVM 各个版本中基本上不变，相对稳定

- `-help`
- `-server -client`
- `-version -showversion`
- `-cp -classpath`

```bash
# 查看 jdk 版本
mrcode:~ mrcode$ java -version
java version "1.8.0_201"
Java(TM) SE Runtime Environment (build 1.8.0_201-b09)
Java HotSpot(TM) 64-Bit Server VM (build 25.201-b09, mixed mode)
```

## X 参数

非标准化参数，在各个版本中有可能会变，但是可能性比较小

- `-Xint`：解释执行
- `-Xcomp`：第一次使用就编译成本地代码
- `-Xmixed`：混合模式，JVM 自己来决定是否编译成本地代码

如：

```bash
# 默认是使用 mixed 模式
mrcode:~ mrcode$ java -version
java version "1.8.0_201"
Java(TM) SE Runtime Environment (build 1.8.0_201-b09)
Java HotSpot(TM) 64-Bit Server VM (build 25.201-b09, mixed mode)

# 指定使用 -Xint 看到输出的是：interpreted mode
mrcode:~ mrcode$ java -Xint -version
java version "1.8.0_201"
Java(TM) SE Runtime Environment (build 1.8.0_201-b09)
Java HotSpot(TM) 64-Bit Server VM (build 25.201-b09, interpreted mode)

# 指定使用 -Xcomp ，输出的是：compiled mode
mrcode:~ mrcode$ java -Xcomp -version
java version "1.8.0_201"
Java(TM) SE Runtime Environment (build 1.8.0_201-b09)
Java HotSpot(TM) 64-Bit Server VM (build 25.201-b09, compiled mode)
```

## XX 参数

非标准化参数、相对不稳定、主要用于 JVM 调优和 Debug

- Boolean 类型

  格式：`-XX:[+-]<name>`  表示启用或禁用 name 属性，`+` 号表示启用

  例如：

  ```
  -XX:+UseConcMarkSweepGC
  -XX:+UseG1GC
  ```

- 非 Boolean 类型

  格式：`-XX:<name>=<value>`  表示 name 属性的值是 value

  例如：

  ```
  -XX:MaxGCPauseMillis=500
  XX:GCTimeRatio=19
  ```



但是有缩写版本的参数，看上去很像是 X 参数，其实是 XX 参数。比如

- `-Xmx` ：最大堆内存

  对应的 XX 参数是 `-XX:InitialHeapSize`

-  `-Xms`：初始化堆大小

  对应的 XX 参数是 `-XX:MaxHeapSize`

