#HTTP状态码

##3xx
这类状态码，表示重定向，客户端需要采取进一步的操作才能完成请求。
###301 Moved Permanently
1. 请求的资源永久的移到了新的位置，这个地址以后不再使用了；浏览器收到301之后，会记住返回的location地址，下次不会再请求该地址了，直接请求重定向后的地址。
2. 非GET和HEAD请求，浏览器禁止自动进行重定向。
###302 Found
临时重定向，表示该资源临时的移动到某个位置；与301不同的是，浏览器收到302之后下次还是继续向该地址发送，而不是重定向后的地址。


## 4xx
### 400 Bad Request
客户端的错误，最常见的参数错误，参数的类型、格式、范围没有按照接口的定义的要求，还有请求太大、无效的请求消息、或者欺骗性的路由请求，服务器不能或者不会处理该请求。

###401 Unauthorized
未授权，用户没有登录，表示当前的请求需要用户的验证

###403 Forbidden
与401不同，这表示是用户可能已经登录了，但是用户对应的角色没有权限请求该资源。

###404 NotFound
请求的资源在服务器上不存在。

###405 Method Not Allowed
请求资源时使用的方法（GET/POST/PUT/DELETE等等），不能用来请求该资源；例如有的服务器为了安全起见，不接受DELETE/PUT方法。

##5xx
这类状态码表示服务器在处理请求的过程发生错误或者异常，完成不了请求的处理。
###500 Internal Server Error
服务器内部错误。一般是接受了某个请求之后处理时程序抛异常了，没有对异常进行恰当的处理，从而导致异常抛给容器。

### 502 Bad Gateway
网关服务器或者代理服务器从上游请求服务的时候，收到无效的响应。

###503 Service Unavailable
服务不可用。一般是服务器临时维护，或者过载，服务器当前服务处理请求。

###504 Getway Timeout
网关服务器或者代理服务器从上游请求服务的时候，没有在一定时间内收到响应。




