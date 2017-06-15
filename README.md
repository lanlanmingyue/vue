# vue
>学习vue需要掌握的知识</br>
1.实例 ，参考文件号01 </br>
2.组件 ，参考21,11，13 </br>
3. 指令 ，参考02,05 </br>
4.选项 
5.模板渲染 
6.事件绑定 
7.计算属性 
8.内置动画 
9.组件交互 
10.路由  
11.vuex
>vue的优点</br>
1.数据渲染/数据同步
2.组件化/模块化
3.路由、数据流管理

# 相关知识点链接
[vue的github](https://github.com/vuejs/vue)
[vue的中文网](https://cn.vuejs.org/)
[vue官方论坛](https://forum.vuejs.org/)
[vue-resource英文文档](https://github.com/pagekit/vue-resource/blob/master/docs/http.md)
与后台数据交互还有使用axios的(此项目中暂时未用)
[axios的英文链接](https://www.npmjs.com/package/axios)

>程序小记
增删改查 都需要保存一下数据，此时，应该用watch监视一下数据，一旦发生改变，则数据存储</br>

19.hash数据过滤----即为数据查询</br>
:style与:class [http://www.cnblogs.com/lily1010/p/5838954.html] </br>

异步组件

只在组件需要渲染时触发工厂函数，并且把结果缓存起来，用于后面的再次渲染

Vue.component(custom-async', function (resolve, reject) {
  resolve()
})
