# 查看运行时 JVM 参数

- `-XX:+PrintFlagsInitial`：查看初始值

- `-XX:+PrintFlagsFinal`：查看最终的值

  一般都有一个默认值，可以通过命令行等配置方式覆盖掉这个默认值，这里查看的则是这个最终的值

- `-XX:+UnlockExperimentaIVMOptions`：解锁实验参数

  JVM 中有一部分参数是无法直接赋值的，需要加该参数，解锁实验参数，才能配置

- `-XX:UnlockDiagnosticVMOpeions`：解锁诊断参数

- `-XX:+PrintCommandLineFlags`：打印命令行参数

## PrintFlagsFinal

```
mrcode:~ mrcode$ java -XX:+PrintFlagsInitial -version
[Global flags]
     intx ActiveProcessorCount              = -1                                 uintx
     MaxHeapSize                            := 4294967296                        {product}
     bool UseThreadPriorities               = true                               {pd product}
     bool UseTypeProfile                    = true                               {product}
     bool UseTypeSpeculation                = true                               {C2 product}
```

注：`=` 表示默认值，`:=`  表示被用户或则 JVM 修改后的值

这个命令查看的是当前运行这个命令的进程 `java -XX:+PrintFlagsInitial -version` 的值，运行这一条，也会去启动一个 java 进程，那么打印的参数则是这个进程的参数。如何查看一个正在运行的 JVM 进程参数，是后面课程要讲解的。

## jps

jps 是专门用来查看 Java 进程的工具。

```bash
mrcode:~ mrcode$ jps -help
usage: jps [-help]
       jps [-q] [-mlvV] [<hostid>]

Definitions:
    <hostid>:      <hostname>[:<port>]
```

```bash
# 查看当前的 java 进程，左侧是进程 ID，右侧是名称
mrcode:~ mrcode$ jps
35984 Launcher
39312 
45777 Jps
478 
2255 

# -l：显示完整的名称，显示应用程序main类的完整程序包名称或应用程序JAR文件的完整路径名
mrcode:~ mrcode$ jps -l
35984 org.jetbrains.jps.cmdline.Launcher
39312 
45778 sun.tools.jps.Jps
478 
2255
```

这些参数的含义在 JDK 官方文档上有，名字叫  [Java平台，标准版工具参考](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/)

比如这里的 [jps 工具](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/jps.html)

## jinfo

查看正在运行的 JVM 进程信息

```bash
mrcode:~ mrcode$ jinfo --help
Usage:
    jinfo [option] <pid>
        (to connect to running process)
    jinfo [option] <executable <core>
        (to connect to a core file)
    jinfo [option] [server_id@]<remote server IP or hostname>
        (to connect to remote debug server)

where <option> is one of:
    -flag <name>         to print the value of the named VM flag
    -flag [+|-]<name>    to enable or disable the named VM flag
    -flag <name>=<value> to set the named VM flag to the given value
    -flags               to print VM flags
    -sysprops            to print Java system properties
    <no option>          to print both of the above
    -h | -help           to print this help message
```

比如，查看其中某一个 JVM 进程的最大堆内存

```bash
# 这里查询的是我本机上 idea 的最大对内存
mrcode:~ mrcode$ jinfo -flag MaxHeapSize 35984
-XX:MaxHeapSize=734003200
# 这里的单位是 byte，也就是 725MB
```

`-flags` 查看非 JVM 默认参数信息

```bash
# 这里查看的是一个 spring cloud 的一个网关程序
[root] # jinfo -flags 12299
Attaching to process ID 12299, please wait...
Debugger attached successfully.
Server compiler detected.
JVM version is 25.111-b14
# 不是 JVM 默认参数，被修改过
Non-default VM flags: -XX:CICompilerCount=3 -XX:InitialHeapSize=62914560 -XX:MaxHeapSize=1048576000 -XX:MaxNewSize=349175808 -XX:MinHeapDeltaBytes=524288 -XX:NewSize=20971520 -XX:OldSize=41943040 -XX:+UseCompressedClassPointers -XX:+UseCompressedOops -XX:+UseFastUnorderedTimeStamps -XX:+UseParallelGC 
# 这里是前几天我通过命令行运行程序的时候加上的 java -Xmx1000m -jar xxx
Command line:  -Xmx1000m
```

查看垃圾回收器

```bash
[root] # jinfo -flag UseConcMarkSweepGC 12299
-XX:-UseConcMarkSweepGC

[root] # jinfo -flag UseG1GC 12299
-XX:-UseG1GC

[root] # jinfo -flag UseParallelGC 12299
-XX:+UseParallelGC
```

