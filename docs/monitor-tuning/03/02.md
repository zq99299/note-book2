# Btrace 使用详解

- 如何拦截方法

  如何拦截构造函数、重载方法、普通方法

- 拦截时机

  如：入口、返回、异常 时

- 拦截 this、参数、返回值等

- 其他

> [这些在官方仓库都有拦截例子](https://github.com/btraceio/btrace/tree/master/btrace-dist/src/main/resources/samples)

## 拦截方法

- 普通方法

  ```java
  @OnMethod(clazz="", method="")
  ```

- 构造函数

  ```java
  @OnMethod(clazz="", method="<init>")
  ```

  `<init>`：字节码中构造函数就是使用这个来标识的

- 拦截同名函数：用参数区分

  

### 拦截构造函数

准备一段测试代码，接受一个 user 参数，然后再返回去

```java
@RequestMapping("/constructor")
public User constructor(User user) {
  user.setName("mrcode");
  return user;
}
```

打印构造函数脚本

```java
package cn.mrcode.stady.monitor_tuning.chapter4;

import org.openjdk.btrace.core.BTraceUtils;
import org.openjdk.btrace.core.annotations.*;
import org.openjdk.btrace.core.types.AnyType;

/**
 * Btrace 拦截构造函数
 */
@BTrace
public class PrintConstructor {
    /**
     * OnMethod 表示设置拦截哪个类 的 哪个方法，location 是具体的位置或则点
     *
     * @param pcn  探测到的类名
     * @param pmn  探测到的方法名称
     * @param args 入参
     */
    @OnMethod(
            clazz = "cn.mrcode.stady.monitor_tuning.chapter2.User", // 注意这里拦截的是 User 类
            method = "<init>" // 设置为构造方法
    )
    public static void anyRead(@ProbeClassName String pcn,
                               @ProbeMethodName String pmn,
                               AnyType[] args) {
        BTraceUtils.println(pcn + "," + pmn);
        BTraceUtils.printArray(args);
        BTraceUtils.println();
    }
}

```

访问 `GET http://localhost:8080/ch4/constructor?id=1` 查看脚本输出

```
mrcode@mrcode chapter4 % btrace 56414 PrintConstructor.java 
Attaching BTrace to PID: 56414
cn.mrcode.stady.monitor_tuning.chapter2.User,<init>
[1, mrcode, ]
```

### 拦截重载方法

先准备两个重载方法（同名，参数个数或类型不同）

```java
    /**
     * btrace 拦截重载方法
     *
     * @param id
     * @return
     */
    @RequestMapping("/same1")
    public String same(Integer id) {
        return id + "";
    }

    @RequestMapping("/same2")
    public String same(Integer id, String name) {
        return id + "";
    }
```

测试

```
### 拦截重载方法2
GET http://localhost:8080/ch4/same1?id=1

响应：1

### 拦截重载方法2
GET http://localhost:8080/ch4/same2?id=1&name=mrcode

响应：1,mrcode
```

构建 Btrace 脚本

```java
package cn.mrcode.stady.monitor_tuning.chapter4;

import org.openjdk.btrace.core.BTraceUtils;
import org.openjdk.btrace.core.annotations.BTrace;
import org.openjdk.btrace.core.annotations.OnMethod;
import org.openjdk.btrace.core.annotations.ProbeClassName;
import org.openjdk.btrace.core.annotations.ProbeMethodName;
import org.openjdk.btrace.core.types.AnyType;

/**
 * Btrace 拦截重载方法
 */
@BTrace
public class PrintSame {
    /**
     * OnMethod 表示设置拦截哪个类 的 哪个方法
     *
     * @param pcn 探测到的类名
     * @param pmn 探测到的方法名称
     */
    @OnMethod(
            clazz = "cn.mrcode.stady.monitor_tuning.chapter4.Ch4Controller",
            method = "same"
    )
    public static void anyRead(@ProbeClassName String pcn,
                               @ProbeMethodName String pmn,
                               Integer id, String name  // 根据参数的个数拦截重载中的哪一个方法
    ) {
        BTraceUtils.println("拦截有 2 个入参的 same 方法");
        BTraceUtils.println(pcn + "," + pmn);
        BTraceUtils.println(id + "," + name);
        BTraceUtils.println();
    }

    @OnMethod(
            clazz = "cn.mrcode.stady.monitor_tuning.chapter4.Ch4Controller",
            method = "same"
    )
    public static void anyRead2(@ProbeClassName String pcn,
                                @ProbeMethodName String pmn,
                                Integer id
    ) {
        BTraceUtils.println("拦截只有一个入参的 same 方法");
        BTraceUtils.println(pcn + "," + pmn);
        BTraceUtils.println(id);
        BTraceUtils.println();
    }
}

```

  测试输出

```
mrcode@mrcode chapter4 % btrace 56583 PrintSame.java
Attaching BTrace to PID: 56583
拦截只有一个入参的 same 方法
cn.mrcode.stady.monitor_tuning.chapter4.Ch4Controller,same
1

拦截有 2 个入参的 same 方法
cn.mrcode.stady.monitor_tuning.chapter4.Ch4Controller,same
1,mrcode
```

## 拦截时机

可以拦截的枚举在 `org.openjdk.btrace.core.annotations.Kind`，常用的有

- `Kind.ENTRY`：入口，也是默认值
- `Kind.RETURN`：返回
- `Kind.THROW`：异常
- `Kind.Line`：行

### 获取返回值

```java
package cn.mrcode.stady.monitor_tuning.chapter4;

import org.openjdk.btrace.core.BTraceUtils;
import org.openjdk.btrace.core.annotations.*;
import org.openjdk.btrace.core.types.AnyType;

/**
 * Btrace 获取返回值
 */
@BTrace
public class PrintReturn {
    /**
     * OnMethod 表示设置拦截哪个类 的 哪个方法，location 是具体的位置或则点
     *
     * @param pcn    探测到的类名
     * @param pmn    探测到的方法名称
     * @param result 返回值
     */
    @OnMethod(
            clazz = "cn.mrcode.stady.monitor_tuning.chapter4.Ch4Controller",
            method = "arg1",
            location = @Location(Kind.RETURN)
    )
    public static void anyRead(@ProbeClassName String pcn,
                               @ProbeMethodName String pmn,
                               @Return AnyType result) { // 这里使用 @Return 定义获取返回值
        BTraceUtils.println(pcn + "," + pmn);
        BTraceUtils.println(result);
        BTraceUtils.println();
    }
}
```

测试输出

```
mrcode@mrcode chapter4 % btrace 56583 PrintReturn.java 
Attaching BTrace to PID: 56583
cn.mrcode.stady.monitor_tuning.chapter4.Ch4Controller,arg1
hello,mrcode
```

### 获取异常

如下代码

```java

    /**
     * btrace 获取异常
     * @return
     */
    @RequestMapping("/exception")
    public String exception() {
        try {
            System.out.println("start");
            System.out.println(1/0);
            System.out.println("end");
        }catch (Exception e){
            // 模拟在一个多层调用中，把异常吞掉了
        }
        return "success";
    }
```

当在一个复杂的调用中，异常又被吞掉的时候，在线上环境中，我们是很难发现这个代码运行异常了。

访问这个方法：看到日志中并没有异常信息

```
GET http://localhost:8080/ch4/exception

后台日志中只打印了一行：
start

```

编写脚本

```java
package cn.mrcode.stady.monitor_tuning.chapter4;

import org.openjdk.btrace.core.BTraceUtils;
import org.openjdk.btrace.core.annotations.*;

/**
 * Btrace 获取异常; 其实使用的就是拦截的是 异常类 的构造函数
 */
@BTrace
public class PrintOnThrow {
    @TLS   // 表示使用 thred local 变量，多线程状态下，该值才是每个线程自己的值
    static Throwable currentException;

    /**
     * OnMethod 表示设置拦截哪个类 的 哪个方法，location 是具体的位置或则点
     */
    @OnMethod(
            clazz = "java.lang.Throwable",
            method = "<init>"
    )
    public static void onthrow(@Self Throwable self) {
        // 相当于拦截：new Throwable()
        currentException = self;
    }

    @OnMethod(
            clazz = "java.lang.Throwable",
            method = "<init>"
    )
    public static void onthrow1(@Self Throwable self, String s) {
        // 相当于拦截：new Throwable(String msg)
        currentException = self;
    }

    @OnMethod(
            clazz = "java.lang.Throwable",
            method = "<init>"
    )
    public static void onthrow2(@Self Throwable self, String s, Throwable cause) {
        // 相当于拦截：new Throwable(String msg,Throwable cause)
        currentException = self;
    }

    @OnMethod(
            clazz = "java.lang.Throwable",
            method = "<init>"
    )
    public static void onthrow3(@Self Throwable self, Throwable cause) {
        // 相当于拦截：new Throwable(Throwable cause)
        currentException = self;
    }

    /**
     * 当 Throwable 构造函数返回的时候，则打印传入构造函数的异常
     */
    @OnMethod(
            clazz = "java.lang.Throwable",
            method = "<init>",
            location = @Location(Kind.RETURN)
    )
    public static void onthrowreturn() {
        if (currentException != null) {
            // 打印异常堆栈
            BTraceUtils.Threads.jstack(currentException);
            BTraceUtils.println("======================");
            currentException = null;
        }
    }
}

```

启动脚本

```java
mrcode@mrcode chapter4 % btrace 57971 PrintOnThrow.java 
Attaching BTrace to PID: 57971
Port 2020 unavailable.
```

发现异常了 2020 端口被占用，原因是一台机器上同一时间，貌似只能运行一个脚本，否则就需要自己重新指定一个没有被使用的端口

```bash
# mac 下找到占用该端口的进程，再 kill 掉
mrcode@mrcode chapter4 % lsof -i tcp:2020
COMMAND   PID   USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
webstorm 1694 mrcode   48u  IPv6 0x566cdbbd9b7e8cc3      0t0  TCP *:xinupageserver (LISTEN)
mrcode@mrcode chapter4 % kill 1694
```

发现拦截无效，不知道是什么原因（官方的示例代码也无法生效）。

### 拦截某一行代码

想要看某行代码有没有执行，打印下这一行的行号

```java
package cn.mrcode.stady.monitor_tuning.chapter4;

import org.openjdk.btrace.core.BTraceUtils;
import org.openjdk.btrace.core.annotations.*;

@BTrace
public class PrintLine {

    @OnMethod(
            clazz = "cn.mrcode.stady.monitor_tuning.chapter4.Ch4Controller",
            method = "exception",
            location = @Location(value = Kind.LINE, line = 58)
    )
    public static void anyRead(@ProbeClassName String pcn, @ProbeMethodName String pmn, int line) {
        BTraceUtils.println(pcn + "," + pmn + "," + line);
        BTraceUtils.println();
    }
}

```

运行脚本，访问后输出

```
mrcode@mrcode chapter4 % btrace 1448 PrintLine.java 
Attaching BTrace to PID: 1448
cn.mrcode.stady.monitor_tuning.chapter4.Ch4Controller,exception,58
```

如果将 line 修改为 `-1` 则会看到，会将执行过的行都打印

```
mrcode@mrcode chapter4 % btrace 1448 PrintLine.java   
Attaching BTrace to PID: 1448
cn.mrcode.stady.monitor_tuning.chapter4.Ch4Controller,exception,58

cn.mrcode.stady.monitor_tuning.chapter4.Ch4Controller,exception,59

cn.mrcode.stady.monitor_tuning.chapter4.Ch4Controller,exception,61

cn.mrcode.stady.monitor_tuning.chapter4.Ch4Controller,exception,64
```

## 拦截 this、参数、返回值等

- this：`@Self`
- 入参：可以用  `AnyType`，也可以用真实类型，同名的真实的
- 返回：`@Return`

获取对象的值：

- 简单类型：直接获取
- 复杂类型：反射。类名 + 属性名

### 获取复杂类型参数

```java
/**
* Btrace 获取复杂参数
*
* @param user
* @return
*/

@RequestMapping("/arg2")
public User grg2(User user) {
	return user;
}
```

   脚本

```java
package cn.mrcode.stady.monitor_tuning.chapter4;
import cn.mrcode.stady.monitor_tuning.chapter2.User;
import org.openjdk.btrace.core.BTraceUtils;
import org.openjdk.btrace.core.annotations.*;

import java.lang.reflect.Field;


@BTrace
public class PrintArgComplex {
	
	@OnMethod(
	        clazz="cn.mrcode.stady.monitor_tuning.chapter4.Ch4Controller",
	        method="grg2",
	        location=@Location(Kind.ENTRY)
	)
	public static void anyRead(@ProbeClassName String pcn, @ProbeMethodName String pmn, User user) {
		//print all fields
		BTraceUtils.printFields(user);
		// 第三方包需要获取需要使用类全限定名
		//print one field
		Field filed2 = BTraceUtils.field("cn.mrcode.stady.monitor_tuning.chapter2.User", "name");
		BTraceUtils.println(BTraceUtils.get(filed2, user));
		BTraceUtils.println(pcn+","+pmn);
		BTraceUtils.println();
    }
}

```

测试输出

```
mrcode@mrcode chapter4 % btrace -cp "/Users/mrcode/IdeaProjects/monitor-tuning/build/classes/java/main" 1813 PrintArgComplex.java
Attaching BTrace to PID: 1813
{id=1, name=mrcode, }
mrcode
cn.mrcode.stady.monitor_tuning.chapter4.Ch4Controller,grg2
```

注意这里：使用了一个 `-cp` 的参数，指向了这个目标项目的 class 文件目录，也就是说复杂参数引用，需要加入依赖包，否则就会直接报错找不到符号。这样一来，线上环境是如何的复杂，感觉使用很难用。

### 使用正则表达式拦截

```java
package cn.mrcode.stady.monitor_tuning.chapter4;


import org.openjdk.btrace.core.BTraceUtils;
import org.openjdk.btrace.core.annotations.BTrace;
import org.openjdk.btrace.core.annotations.OnMethod;
import org.openjdk.btrace.core.annotations.ProbeClassName;
import org.openjdk.btrace.core.annotations.ProbeMethodName;

/**
 * btrace：拦截该类中的所有方法
 */
@BTrace
public class PrintRegex {

    @OnMethod(
            clazz = "cn.mrcode.stady.monitor_tuning.chapter4.Ch4Controller",
            method = "/.*/"  // 正则语法 /正则表达式/，.*：任意字符，零次或多次
    )
    public static void anyRead(@ProbeClassName String pcn, @ProbeMethodName String pmn) {
        BTraceUtils.println(pcn + "," + pmn);
        BTraceUtils.println();
    }
}

```

测试输出

```
mrcode@mrcode chapter4 % btrace 1978 PrintRegex.java
Attaching BTrace to PID: 1978
cn.mrcode.stady.monitor_tuning.chapter4.Ch4Controller,exception
```

### 打印环境变量

```java
package cn.mrcode.stady.monitor_tuning.chapter4;


import org.openjdk.btrace.core.BTraceUtils;
import org.openjdk.btrace.core.annotations.BTrace;

@BTrace
public class PrintJinfo {
    static {
        BTraceUtils.println("System Properties:");
        BTraceUtils.printProperties();
        BTraceUtils.println("VM Flags:");
        BTraceUtils.printVmArguments();
        BTraceUtils.println("OS Enviroment:");
        BTraceUtils.printEnv();
        BTraceUtils.exit(0);
    }
}
```

测试输出

```
mrcode@mrcode chapter4 % btrace 1978 PrintJinfo.java 
Attaching BTrace to PID: 1978
System Properties:
gopherProxySet = false
awt.toolkit = sun.lwawt.macosx.LWCToolkit
file.encoding.pkg = sun.io
java.specification.version = 1.8
sun.cpu.isalist = 
sun.jnu.encoding = UTF-8
...
```

这里打印的信息就类似 `jinfo` 命令打印的信息。

## 注意事项

- 默认只能本地运行

  想要调试远程的进程，需要修改源代码

- 生产环境下可以使用，但是被修改的字节码不会被还原

  意思是说，btrace 进程退出后，被 btace 修改过的代码，还是会生效。

  没说清楚这些监控是否也还在执行呢？

  