# 基于 Btrace 的监控调试

BTrace 是用于 Java 平台的安全，动态跟踪工具。

BTrace 可用于动态跟踪正在运行的 Java 程序（类似于 DTrace，适用于 OpenSolaris 应用程序和 OS）。BTrace 动态地检测目标应用程序的类以注入跟踪代码（字节码跟踪）。

它使用到的技术有：JavaCompLierApi、JVMTI、Agent、Instrumentation + ASM

- [Btrace 安装使用入门](./01.md)
- [Btrace 使用详解](./02.md)