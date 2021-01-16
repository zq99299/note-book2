---
tags:
  - jstat
---



# 查看 JVM 统计信息

[jstat](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/jstat.html#BEHHGFAE) 可以查询以下几类等的：

- 类装载
- 垃圾收集
- JIT 编译

## 语法

```bash
jstat [ generalOption | outputOptions vmid [ interval[s|ms] [ count ] ]
```

- generalOption：单个常规命令行选项

  可以通过 `jstat -options`  输出支持的命令，比如常见的有

  - `-class`：类加载
  - `-compiler`：JIT 编译信息
  - `-gc`：垃圾回收信息
  - `-printcompilation`：显示Java HotSpot VM编译方法统计信息

- outputOptions：一个或由单个的多输出选项

- vmid：虚拟机标识符，一般用进程 id，还可以写完整的远程服务器上的进程 id

- interval：采样间隔，默认单位是毫秒（可以为秒），制定后，则间隔多长时间输出一次

- count：要显示的样本数量，也就是输出几次

::: tip

再次提示：去阅读官方该工具的介绍

:::

## 类装载信息

```bash
mrcode:~ mrcode$ jstat -class 46129
Loaded  Bytes  Unloaded  Bytes     Time   
  3315  6334.5        0     0.0       1.36
```

类加载器统计信息：

- `Loaded`：已加载的类数。
- `Bytes`：加载的 kB 数。
- `Unloaded`：卸载的类数。
- `Bytes`：卸载的KB数。
- `Time`：执行类加载和卸载操作所花费的时间。

::: tip

再次提示：去阅读官方该工具的介绍，上面的每列含义都是文档中复制过来的

:::

## 垃圾收集信息

与垃圾收集信息有关的选项有：

- `-gc`
- `-gcutil`
- `-gccause`
- `-gcnew`
- `-gcold`

### `-gc`

```bash
mrcode:~ mrcode$ jstat -gc 46129

 S0C  S1C  S0U  S1U   EC    EU    OC     OU    MC   MU  CCSC  CCSU  YGC   YGCT  FGC  FGCT   GCT  

10752.0 10752.0 0.0  4479.4 65536.0 15266.7  175104.0  144.0  18048.0 17391.3 2176.0 2004.6   1  0.004  0   0.000  0.004
```

- `S0C、S1C、S0U、S1U`：S0 和 S1 的总量与使用量
- `EC、EU`：Eden 区总量与使用量
- `OC、OU`：Old 区总量与使用量
- `MC、MU`：Metaspace 区总量与使用量
- `CCSC、CCSU`：压缩类空间总量与使用量
- `YGC、YGCT`：YoungGC 的次数与时间
- `FGC、FGCT`：FullGC 的次数与时间
- `GCT`：总的 GC 时间

以上的参数信息对于我们的 gc 调优来说相当重要，再配不停的输出每秒的 GC 信息，也能很清楚的看到 GC 的变化。

还有其他的选项，可以输出各种的信息，详细请查阅文档。

## JVM 内存结构

根据前面的输出信息，可以简单的把 JVM 内存结构画出来

![image-20210116223917540](./assets/image-20210116223917540.png)

- 堆区：JVM 堆内存

  由以下两部分组成：

  1. Young：中的 S0 和 S1 在同一时间只会有一个有值，另一个为 0
  2. Old

- 非堆区：操作系统内存（JDK 8 中称为 Metaspace）

  - CCS：启用了压缩指针时，就会存在该区域

  - CodeCache：JIT 的代码信息，把 JAVA 代码转换成 native（C）  代码

    如果没有开启 JIT 编译的话，这块内存也不存在

## JIT 编译

有两个选项：

- `-compiler`：显示有关 Java HotSpot VM 即时编译器行为的统计信息。
- `-printcompilation`：显示 Java HotSpot VM 编译方法统计信息。

```bash
mrcode:~ mrcode$ jstat -compiler 47503
Compiled Failed Invalid   Time   FailedType FailedMethod
      24      0       0     0.02          0  
```

- `Compiled`：执行的编译任务数。

- `Failed`：编译任务数失败。

- `Invalid`：无效的编译任务数。

- `Time`：执行编译任务所花费的时间。

- `FailedType`：上次失败的编译的编译类型。

- `FailedMethod`：上次失败的编译的类名和方法。

  

```bash
mrcode:~ mrcode$ jstat -printcompilation 47503
Compiled  Size  Type Method
      24      5    1 java/net/URL getAuthority
```

- `Compiled`：由最近编译的方法执行的编译任务数。

- `Size`：最近编译的方法的字节码的字节数。

- `Type`：最近编译的方法的编译类型。

- `Method`：标识最近编译的方法的类名和方法名。

  类名使用斜杠（`/`）代替点（`.`）作为名称空间分隔符。方法名称是指定类中的方法。这两个字段的格式与 `HotSpot -XX:+PrintCompilation` 选项一致。

