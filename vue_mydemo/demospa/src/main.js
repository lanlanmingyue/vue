// src/main.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import './lib/bootstrap/css/bootstrap.min.css'

import store from './store'
import router from './router'

Vue.use(VueRouter)
Vue.use(VueResource)

/*const routes = [{
  path : '/',
  component : Home
},{
  path : '/home',
  component : Home
},{
  path : '/time-entries',
  component : TimeEntries,
    children : [{
    path : 'log-time',
    // 懒加载
    component : resolve => require(['./components/LogTime.vue'],resolve),
  }]
}
];


const router = new VueRouter({
  routes
});*/

 // 全局导航钩子
 router.beforeEach((to, from, next) => {
  
  if (to.meta.requireAuth) {

    // console.log(isEmptyObject(store.state.user)) 
    if(!isEmptyObject(store.state.user)) {   
      next();
    }
    else { 
      next({
        path: '/login',
                query: {redirect: to.fullPath}  
                // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
    }
  }
  else {
    next();
  }
 })


 function isEmptyObject(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
 }
 //判断object是否为空

/* eslint-disable no-new */
// 实例化我们的Vue
var app = new Vue({
  el: '#app',
  router,
   store,
  ...App, //render:h => h(App) 挂载到app上
});