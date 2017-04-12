# demospa

> demo for vue spa

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

#相关库vue-router,vue-resource,vuex

#1.使用vue-cli创建项目
2.使用vue-router实现单页路由
3.用vuex管理我们的数据流
4.使用vue-resource请求我们的node服务端
5.使用.vue文件进行组件化的开发
PS：本文node v6.2.2 npm v3.9.5 vue v2.1.0 vue-router v2.0.3 vuex v2.0.0

#webpack作用：模块打包，预处理，热加载

#vue2.0 超链接<router-link to=''>

#mutation-types 记录我们所有的事件名

mutations 注册我们各种数据变化的方法

actions 则可以编写异步的逻辑或者是一些逻辑，再去commit
我们的事件

如果有getter 我们可以把一些需要处理返回的数据放在这即可，不进行业务操作


#参考地址[https://segmentfault.com/a/1190000007630677?utm_source=weekly&utm_medium=email&utm_campaign=email_weekly#articleHeader8]

#this.$store.dispatch('savePlan', plan)当执行了这样的方法就会调用actions.js里的savePlan方法，而savePlan又会触发 mutations里的 types.SAVE_PLAN 最后修改数据视图更新
#在这有个技巧就是，在mutations里都是用大写下划线连接，而我们的actions里都用小写驼峰对应。

#登录注册 逻辑待做

#模拟数据[http://www.cnblogs.com/jasonwang2y60/p/6498802.html]{http://www.cnblogs.com/jasonwang2y60/p/6498802.html}

#在组件的created中提交dispatch，然后通过action调用一个封装好的axios然后再触发mutation来提交状态改变state中的数据，然后在组件的计算属性中获取state的数据并渲染在页面上

#数据state action mutation getter 以及异步数据axios 参考地址[http://www.cnblogs.com/jasonwang2y60/p/6606822.html]

相关知识点：
method有触发则执行函数，而computed基于依赖缓存，只要相关值不变，那么就不必再执行函数。
