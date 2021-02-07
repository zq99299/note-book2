# GC 日志格式与可视化日志分析工具

一个垃圾收集器的性能评估是吞吐量、响应时间，调优也主要是针对这两点进行。

本章会介绍两个工具：

- [gceasy.io](https://gceasy.io/)：在线的 web 工具

  部分收费

- [GCViewer](https://github.com/chewiebug/GCViewer)：开源工具

## 打印日志相关参数

```bash
-XX:+PrintGCDetails 
# 打印时间
-XX:+PrintGCTimeStamps
# 时间相关：针对 GC 开始的时间
-XX:+PrintGCDateStamps
# GC 日志文件
-Xloggc:$CATALINA_HOME/logs/gc.log
-XX:+PrintHeapAtGC 
# youn区年龄信息
-XX:+PrintTenuringDistribution
```

## GC 日志格式

这里使用前面几个参数就可以了，放在 boot 程序的启动参数中

```
-XX:+PrintGCDetails -XX:+PrintGCTimeStamps -XX:+PrintGCDateStamps -Xloggc:/Users/mrcode/IdeaProjects/monitor-tuning/gc.log
```

重启后观察日志格式

### ParallelGC 日志格式

默认使用的是并行垃圾收集器，它的日志格式如下

```
Java HotSpot(TM) 64-Bit Server VM (25.201-b09) for bsd-amd64 JRE (1.8.0_201-b09), built on Dec 15 2018 18:35:23 by "java_re" with gcc 4.2.1 (Based on Apple Inc. build 5658) (LLVM build 2336.11.00)
Memory: 4k page, physical 16777216k(45944k free)

/proc/meminfo:

CommandLine flags: -XX:-BytecodeVerificationLocal -XX:-BytecodeVerificationRemote -XX:InitialHeapSize=268435456 -XX:+ManagementServer -XX:MaxHeapSize=4294967296 -XX:+PrintGC -XX:+PrintGCDateStamps -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -XX:TieredStopAtLevel=1 -XX:+UseCompressedClassPointers -XX:+UseCompressedOops -XX:+UseParallelGC 
2021-02-07T10:29:33.290-0800: 1.789: [GC (Allocation Failure) [PSYoungGen: 65536K->5727K(76288K)] 65536K->5743K(251392K), 0.0075188 secs] [Times: user=0.01 sys=0.00, real=0.00 secs] 
2021-02-07T10:29:33.962-0800: 2.461: [GC (GCLocker Initiated GC) [PSYoungGen: 71263K->8273K(76288K)] 71283K->8301K(251392K), 0.0123996 secs] [Times: user=0.02 sys=0.00, real=0.01 secs] 
2021-02-07T10:29:34.220-0800: 2.719: [GC (Metadata GC Threshold) [PSYoungGen: 45557K->7569K(76288K)] 45585K->7605K(251392K), 0.0083379 secs] [Times: user=0.02 sys=0.00, real=0.00 secs] 
2021-02-07T10:29:34.229-0800: 2.727: [Full GC (Metadata GC Threshold) [PSYoungGen: 7569K->0K(76288K)] [ParOldGen: 35K->7308K(100352K)] 7605K->7308K(176640K), [Metaspace: 20552K->20552K(1067008K)], 0.0344578 secs] [Times: user=0.08 sys=0.01, real=0.05 secs] 
2021-02-07T10:29:34.755-0800: 3.253: [GC (Allocation Failure) [PSYoungGen: 65536K->8473K(111616K)] 72875K->15884K(211968K), 0.0062509 secs] [Times: user=0.02 sys=0.00, real=0.01 secs] 
2021-02-07T10:29:35.575-0800: 4.074: [GC (Allocation Failure) [PSYoungGen: 111385K->10735K(139776K)] 118796K->20977K(240128K), 0.0188584 secs] [Times: user=0.04 sys=0.01, real=0.02 secs] 
```

- `CommandLine flags`：打印出来了命令行的参数，有些是我们设置的，有些是默认的，有些是自适应的

针对这一行信息，我们来解释下每一列的含义

```
2021-02-07T10:29:33.290-0800: 1.789: [GC (Allocation Failure) [PSYoungGen: 65536K->5727K(76288K)] 65536K->5743K(251392K), 0.0075188 secs] [Times: user=0.01 sys=0.00, real=0.00 secs] 
```

- `2021-02-07T10:29:33.290-0800`：GC 开始时间
- `1.789: ` 
- `[GC (Allocation Failure)`：GC 发生的原因
- ` [PSYoungGen: 65536K->5727K(76288K)]`：这次 GC 发生在哪个区
  	- 65536K：垃圾回收之前的大小
  	- 5727K(76288K)：垃圾回收之后的大小（后面是该区的总大小）
- `65536K->5743K(251392K)`：垃圾回收前、回收后、堆的总大小信息
- `0.0075188` 垃圾回收所用时间

### CMS GC

在前面的配置上，新增使用指定的 GC 收集器即可。

```
-XX:+UseConcMarkSweepGC
```

它的日志格式是这样的

```
Java HotSpot(TM) 64-Bit Server VM (25.201-b09) for bsd-amd64 JRE (1.8.0_201-b09), built on Dec 15 2018 18:35:23 by "java_re" with gcc 4.2.1 (Based on Apple Inc. build 5658) (LLVM build 2336.11.00)
Memory: 4k page, physical 16777216k(45764k free)

/proc/meminfo:

CommandLine flags: -XX:-BytecodeVerificationLocal -XX:-BytecodeVerificationRemote -XX:InitialHeapSize=268435456 -XX:+ManagementServer -XX:MaxHeapSize=4294967296 -XX:MaxNewSize=697933824 -XX:MaxTenuringThreshold=6 -XX:OldPLABSize=16 -XX:+PrintGC -XX:+PrintGCDateStamps -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -XX:TieredStopAtLevel=1 -XX:+UseCompressedClassPointers -XX:+UseCompressedOops -XX:+UseConcMarkSweepGC -XX:+UseParNewGC 
2021-02-07T10:46:45.053-0800: 2.044: [GC (Allocation Failure) 2021-02-07T10:46:45.053-0800: 2.044: [ParNew: 69952K->5637K(78656K), 0.0150085 secs] 69952K->5637K(253440K), 0.0152421 secs] [Times: user=0.03 sys=0.00, real=0.01 secs] 
2021-02-07T10:46:45.621-0800: 2.612: [GC (Allocation Failure) 2021-02-07T10:46:45.621-0800: 2.612: [ParNew: 75589K->7032K(78656K), 0.0452818 secs] 75589K->10079K(253440K), 0.0454450 secs] [Times: user=0.09 sys=0.02, real=0.04 secs] 
2021-02-07T10:46:46.261-0800: 3.251: [GC (Allocation Failure) 2021-02-07T10:46:46.261-0800: 3.252: [ParNew: 76984K->7569K(78656K), 0.0101168 secs] 80031K->12081K(253440K), 0.0102365 secs] [Times: user=0.03 sys=0.00, real=0.01 secs] 
2021-02-07T10:46:46.272-0800: 3.262: [GC (CMS Initial Mark) [1 CMS-initial-mark: 4512K(174784K)] 12081K(253440K), 0.0018904 secs] [Times: user=0.01 sys=0.00, real=0.00 secs] 
2021-02-07T10:46:46.274-0800: 3.264: [CMS-concurrent-mark-start]
2021-02-07T10:46:46.294-0800: 3.284: [CMS-concurrent-mark: 0.020/0.020 secs] [Times: user=0.05 sys=0.01, real=0.02 secs] 
2021-02-07T10:46:46.294-0800: 3.284: [CMS-concurrent-preclean-start]
2021-02-07T10:46:46.298-0800: 3.288: [CMS-concurrent-preclean: 0.003/0.003 secs] [Times: user=0.01 sys=0.00, real=0.00 secs] 
2021-02-07T10:46:46.298-0800: 3.288: [CMS-concurrent-abortable-preclean-start]
2021-02-07T10:46:46.641-0800: 3.631: [CMS-concurrent-abortable-preclean: 0.174/0.343 secs] [Times: user=0.59 sys=0.05, real=0.35 secs] 
2021-02-07T10:46:46.641-0800: 3.631: [GC (CMS Final Remark) [YG occupancy: 51820 K (78656 K)]2021-02-07T10:46:46.641-0800: 3.631: [Rescan (parallel) , 0.0057968 secs]2021-02-07T10:46:46.647-0800: 3.637: [weak refs processing, 0.0003866 secs]2021-02-07T10:46:46.647-0800: 3.637: [class unloading, 0.0025863 secs]2021-02-07T10:46:46.650-0800: 3.640: [scrub symbol table, 0.0032540 secs]2021-02-07T10:46:46.653-0800: 3.643: [scrub string table, 0.0004287 secs][1 CMS-remark: 4512K(174784K)] 56332K(253440K), 0.0129919 secs] [Times: user=0.05 sys=0.00, real=0.01 secs] 
2021-02-07T10:46:46.654-0800: 3.644: [CMS-concurrent-sweep-start]
2021-02-07T10:46:46.656-0800: 3.647: [CMS-concurrent-sweep: 0.002/0.002 secs] [Times: user=0.00 sys=0.00, real=0.00 secs] 
2021-02-07T10:46:46.657-0800: 3.647: [CMS-concurrent-reset-start]
2021-02-07T10:46:46.696-0800: 3.686: [CMS-concurrent-reset: 0.039/0.039 secs] [Times: user=0.07 sys=0.03, real=0.04 secs] 
2021-02-07T10:46:46.914-0800: 3.904: [GC (Allocation Failure) 2021-02-07T10:46:46.914-0800: 3.904: [ParNew: 77521K->7358K(78656K), 0.0108468 secs] 82027K->15589K(253440K), 0.0109486 secs] [Times: user=0.03 sys=0.00, real=0.01 secs] 
2021-02-07T10:46:47.552-0800: 4.542: [GC (Allocation Failure) 2021-02-07T10:46:47.552-0800: 4.542: [ParNew: 77310K->7358K(78656K), 0.0122155 secs] 85541K->20043K(253440K), 0.0123272 secs] [Times: user=0.04 sys=0.00, real=0.01 secs] 
2021-02-07T10:46:48.237-0800: 5.227: [GC (Allocation Failure) 2021-02-07T10:46:48.237-0800: 5.227: [ParNew: 77310K->5464K(78656K), 0.0132060 secs] 89995K->21202K(253440K), 0.0133295 secs] [Times: user=0.04 sys=0.00, real=0.02 secs] 

```

最明显的是原因 `CMS` 开头的，有好几行，是前面说到过的他的一些标记过程，多行组成的一个 Full GC

[这里有一篇博客教你读懂 CMS GC 日志](https://blogs.oracle.com/poonam/understanding-cms-gc-logs)，里面有一些常见的发生之后如何调优之类的

### G1 日志格式

更换 G1 收集器

```
-XX:+UseG1GC
```

日志格式如下

```
Java HotSpot(TM) 64-Bit Server VM (25.201-b09) for bsd-amd64 JRE (1.8.0_201-b09), built on Dec 15 2018 18:35:23 by "java_re" with gcc 4.2.1 (Based on Apple Inc. build 5658) (LLVM build 2336.11.00)
Memory: 4k page, physical 16777216k(202568k free)

/proc/meminfo:

CommandLine flags: -XX:-BytecodeVerificationLocal -XX:-BytecodeVerificationRemote -XX:InitialHeapSize=268435456 -XX:+ManagementServer -XX:MaxHeapSize=4294967296 -XX:+PrintGC -XX:+PrintGCDateStamps -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -XX:TieredStopAtLevel=1 -XX:+UseCompressedClassPointers -XX:+UseCompressedOops -XX:+UseG1GC 
2021-02-07T10:54:40.607-0800: 0.936: [GC pause (G1 Evacuation Pause) (young), 0.0063056 secs]
   [Parallel Time: 3.4 ms, GC Workers: 8]
      [GC Worker Start (ms): Min: 936.6, Avg: 936.7, Max: 937.1, Diff: 0.6]
      [Ext Root Scanning (ms): Min: 0.0, Avg: 0.4, Max: 1.2, Diff: 1.2, Sum: 2.8]
      [Update RS (ms): Min: 0.0, Avg: 0.0, Max: 0.0, Diff: 0.0, Sum: 0.0]
         [Processed Buffers: Min: 0, Avg: 0.0, Max: 0, Diff: 0, Sum: 0]
      [Scan RS (ms): Min: 0.0, Avg: 0.0, Max: 0.0, Diff: 0.0, Sum: 0.0]
      [Code Root Scanning (ms): Min: 0.0, Avg: 0.4, Max: 2.8, Diff: 2.8, Sum: 3.0]
      [Object Copy (ms): Min: 0.0, Avg: 1.5, Max: 2.0, Diff: 2.0, Sum: 12.0]
      [Termination (ms): Min: 0.0, Avg: 0.9, Max: 1.0, Diff: 1.0, Sum: 6.8]
         [Termination Attempts: Min: 1, Avg: 19.0, Max: 33, Diff: 32, Sum: 152]
      [GC Worker Other (ms): Min: 0.0, Avg: 0.0, Max: 0.0, Diff: 0.0, Sum: 0.1]
      [GC Worker Total (ms): Min: 2.7, Avg: 3.1, Max: 3.3, Diff: 0.6, Sum: 24.8]
      [GC Worker End (ms): Min: 939.7, Avg: 939.8, Max: 939.9, Diff: 0.1]
   [Code Root Fixup: 0.0 ms]
   [Code Root Purge: 0.0 ms]
   [Clear CT: 0.2 ms]
   [Other: 2.6 ms]
      [Choose CSet: 0.0 ms]
      [Ref Proc: 2.2 ms]
      [Ref Enq: 0.0 ms]
      [Redirty Cards: 0.3 ms]
      [Humongous Register: 0.0 ms]
      [Humongous Reclaim: 0.0 ms]
      [Free CSet: 0.0 ms]
   [Eden: 24.0M(24.0M)->0.0B(37.0M) Survivors: 0.0B->3072.0K Heap: 24.0M(256.0M)->2486.8K(256.0M)]
 [Times: user=0.02 sys=0.00, real=0.01 secs] 
2021-02-07T10:54:41.313-0800: 1.642: [GC pause (G1 Evacuation Pause) (young), 0.0105166 secs]
   [Parallel Time: 6.2 ms, GC Workers: 8]
      [GC Worker Start (ms): Min: 1642.0, Avg: 1642.1, Max: 1642.1, Diff: 0.1]
      [Ext Root Scanning (ms): Min: 0.1, Avg: 0.5, Max: 2.0, Diff: 1.8, Sum: 3.9]
      [Update RS (ms): Min: 0.0, Avg: 0.0, Max: 0.0, Diff: 0.0, Sum: 0.0]
         [Processed Buffers: Min: 0, Avg: 0.0, Max: 0, Diff: 0, Sum: 0]
      [Scan RS (ms): Min: 0.0, Avg: 0.0, Max: 0.0, Diff: 0.0, Sum: 0.0]
      [Code Root Scanning (ms): Min: 0.0, Avg: 0.1, Max: 0.5, Diff: 0.5, Sum: 0.9]
      [Object Copy (ms): Min: 1.7, Avg: 3.2, Max: 4.3, Diff: 2.6, Sum: 25.7]
      [Termination (ms): Min: 0.0, Avg: 1.2, Max: 2.4, Diff: 2.4, Sum: 9.4]
         [Termination Attempts: Min: 1, Avg: 18.9, Max: 30, Diff: 29, Sum: 151]
      [GC Worker Other (ms): Min: 0.0, Avg: 0.0, Max: 0.0, Diff: 0.0, Sum: 0.1]
      [GC Worker Total (ms): Min: 4.5, Avg: 5.0, Max: 6.1, Diff: 1.6, Sum: 40.1]
      [GC Worker End (ms): Min: 1646.7, Avg: 1647.1, Max: 1648.2, Diff: 1.5]
   [Code Root Fixup: 0.0 ms]
   [Code Root Purge: 0.0 ms]
   [Clear CT: 0.1 ms]
   [Other: 4.1 ms]
      [Choose CSet: 0.0 ms]
      [Ref Proc: 3.7 ms]
      [Ref Enq: 0.0 ms]
      [Redirty Cards: 0.1 ms]
      [Humongous Register: 0.1 ms]
      [Humongous Reclaim: 0.0 ms]
      [Free CSet: 0.1 ms]
   [Eden: 37.0M(37.0M)->0.0B(113.0M) Survivors: 3072.0K->5120.0K Heap: 39.4M(256.0M)->7125.5K(256.0M)]
 [Times: user=0.03 sys=0.01, real=0.01 secs] 
2021-02-07T10:54:42.233-0800: 2.562: [GC pause (Metadata GC Threshold) (young) (initial-mark), 0.0328815 secs]
   [Parallel Time: 15.5 ms, GC Workers: 8]
      [GC Worker Start (ms): Min: 2562.6, Avg: 2562.7, Max: 2563.6, Diff: 1.1]
      [Ext Root Scanning (ms): Min: 1.6, Avg: 3.6, Max: 6.4, Diff: 4.8, Sum: 28.9]
      [Update RS (ms): Min: 0.0, Avg: 0.1, Max: 0.3, Diff: 0.3, Sum: 0.5]
         [Processed Buffers: Min: 0, Avg: 0.2, Max: 1, Diff: 1, Sum: 2]
      [Scan RS (ms): Min: 0.0, Avg: 0.0, Max: 0.1, Diff: 0.0, Sum: 0.1]
      [Code Root Scanning (ms): Min: 0.0, Avg: 0.8, Max: 3.6, Diff: 3.6, Sum: 6.6]
      [Object Copy (ms): Min: 7.3, Avg: 8.6, Max: 10.0, Diff: 2.8, Sum: 68.6]
      [Termination (ms): Min: 0.0, Avg: 1.6, Max: 2.5, Diff: 2.5, Sum: 12.5]
         [Termination Attempts: Min: 1, Avg: 1.0, Max: 1, Diff: 0, Sum: 8]
      [GC Worker Other (ms): Min: 0.0, Avg: 0.0, Max: 0.0, Diff: 0.0, Sum: 0.1]
      [GC Worker Total (ms): Min: 13.9, Avg: 14.7, Max: 15.4, Diff: 1.5, Sum: 117.4]
      [GC Worker End (ms): Min: 2576.5, Avg: 2577.4, Max: 2578.0, Diff: 1.5]
   [Code Root Fixup: 0.1 ms]
   [Code Root Purge: 0.1 ms]
   [Clear CT: 0.3 ms]
   [Other: 17.0 ms]
      [Choose CSet: 0.0 ms]
      [Ref Proc: 14.5 ms]
      [Ref Enq: 0.1 ms]
      [Redirty Cards: 1.9 ms]
      [Humongous Register: 0.0 ms]
      [Humongous Reclaim: 0.0 ms]
      [Free CSet: 0.2 ms]
   [Eden: 96.0M(113.0M)->0.0B(140.0M) Survivors: 5120.0K->13.0M Heap: 102.5M(256.0M)->14.9M(256.0M)]
 [Times: user=0.05 sys=0.01, real=0.03 secs] 
2021-02-07T10:54:42.267-0800: 2.596: [GC concurrent-root-region-scan-start]
2021-02-07T10:54:42.277-0800: 2.606: [GC concurrent-root-region-scan-end, 0.0105123 secs]
2021-02-07T10:54:42.277-0800: 2.606: [GC concurrent-mark-start]
2021-02-07T10:54:42.278-0800: 2.607: [GC concurrent-mark-end, 0.0004125 secs]
2021-02-07T10:54:42.278-0800: 2.607: [GC remark 2021-02-07T10:54:42.278-0800: 2.607: [Finalize Marking, 0.0008342 secs] 2021-02-07T10:54:42.279-0800: 2.608: [GC ref-proc, 0.0007701 secs] 2021-02-07T10:54:42.280-0800: 2.608: [Unloading, 0.0028971 secs], 0.0048015 secs]
 [Times: user=0.02 sys=0.00, real=0.01 secs] 
2021-02-07T10:54:42.283-0800: 2.612: [GC cleanup 16M->14M(256M), 0.0006908 secs]
 [Times: user=0.00 sys=0.00, real=0.00 secs] 
2021-02-07T10:54:42.284-0800: 2.613: [GC concurrent-cleanup-start]
2021-02-07T10:54:42.284-0800: 2.613: [GC concurrent-cleanup-end, 0.0000163 secs]
2021-02-07T10:54:43.338-0800: 3.667: [GC pause (G1 Evacuation Pause) (young), 0.0244592 secs]
   [Parallel Time: 15.6 ms, GC Workers: 8]
      [GC Worker Start (ms): Min: 3667.4, Avg: 3667.5, Max: 3667.5, Diff: 0.1]
      [Ext Root Scanning (ms): Min: 0.1, Avg: 0.9, Max: 4.9, Diff: 4.8, Sum: 7.5]
      [Update RS (ms): Min: 0.0, Avg: 0.0, Max: 0.0, Diff: 0.0, Sum: 0.0]
         [Processed Buffers: Min: 0, Avg: 0.2, Max: 2, Diff: 2, Sum: 2]
      [Scan RS (ms): Min: 0.0, Avg: 0.0, Max: 0.0, Diff: 0.0, Sum: 0.1]
      [Code Root Scanning (ms): Min: 0.0, Avg: 0.5, Max: 1.4, Diff: 1.4, Sum: 4.2]
      [Object Copy (ms): Min: 10.4, Avg: 13.8, Max: 15.0, Diff: 4.6, Sum: 110.1]
      [Termination (ms): Min: 0.0, Avg: 0.2, Max: 0.3, Diff: 0.3, Sum: 1.3]
         [Termination Attempts: Min: 1, Avg: 37.1, Max: 53, Diff: 52, Sum: 297]
      [GC Worker Other (ms): Min: 0.0, Avg: 0.0, Max: 0.0, Diff: 0.0, Sum: 0.1]
      [GC Worker Total (ms): Min: 15.3, Avg: 15.4, Max: 15.5, Diff: 0.2, Sum: 123.4]
      [GC Worker End (ms): Min: 3682.8, Avg: 3682.9, Max: 3683.0, Diff: 0.1]
   [Code Root Fixup: 0.2 ms]
   [Code Root Purge: 0.1 ms]
   [Clear CT: 0.1 ms]
   [Other: 8.5 ms]
      [Choose CSet: 0.0 ms]
      [Ref Proc: 7.8 ms]
      [Ref Enq: 0.0 ms]
      [Redirty Cards: 0.1 ms]
      [Humongous Register: 0.0 ms]
      [Humongous Reclaim: 0.0 ms]
      [Free CSet: 0.4 ms]
   [Eden: 140.0M(140.0M)->0.0B(133.0M) Survivors: 13.0M->20.0M Heap: 153.0M(256.0M)->20.3M(256.0M)]
 [Times: user=0.08 sys=0.02, real=0.03 secs] 

```

G1 的日志内容就多了很多了

[这是 G1 的介绍博客](https://blogs.oracle.com/poonam/understanding-g1-gc-logs)，不一定是最新的，但是基本上入门是可以了

## gceasy

[gceasy.io](https://gceasy.io/)：在线的 web 工具，上传 gc 文件，等待出结果就可以了，会统计出一些图表信息，更加直观。

由于笔者这部分已经跟不上了，就不再适合细致化的记录这一部分的类容了



## GCViewr

[GCViewer](https://github.com/chewiebug/GCViewer)：开源工具

此工具没有 gceasy 工具出的报告多。