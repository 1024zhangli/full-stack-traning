### 模块化

在ES6之前官方的模块化的标准，民间出现了两大前端模块的流派sea.js和require.js。CMD是sea.js在推广过程中对模块定义的规范化产出；AMD是require.js中在推广模块定义的规范化产出。


### 区别
1. 对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。不过 RequireJS 从 2.0 开始，也改成可以延迟执行（根据写法不同，处理方式不同）。CMD 推崇 as lazy as possible.
2. CMD 推崇依赖就近，AMD 推崇依赖前置。

```javascript
// CMD
define(function(require, exports, module) {   
  var a = require('./a')   
  a.doSomething()     
  var b = require('./b') // 依赖可以就近书写   b.doSomething()   

})

// AMD 默认推荐的是
define(['./a', './b'], function(a, b) {  
  // 依赖必须一开始就写好    
  a.doSomething()    
  b.doSomething()   
   ...
})
```

虽然 AMD 也支持 CMD 的写法，同时还支持将 require 作为依赖项传递，但 RequireJS 的作者默认是最喜欢上面的写法，也是官方文档里默认的模块定义写法。
3. AMD 的 API 默认是一个当多个用，CMD 的 API 严格区分，推崇职责单一。比如 AMD 里，require 分全局 require 和局部 require，都叫 require。CMD 里，没有全局 require，而是根据模块系统的完备性，提供 seajs.use 来实现模块系统的加载启动。CMD 里，每个 API 都简单纯粹。



>参考：https://www.zhihu.com/question/20351507/answer/14859415
