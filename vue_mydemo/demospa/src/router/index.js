import Vue from 'vue'
import Router from 'vue-router'


import Home from '../components/Home'
import TimeEntries from '../components/TimeEntries'
import Login from '../components/login'
import Register from '../components/reg'
Vue.use(Router)

export default new Router({
  routes: [{
  path : '/',
  component : Home
},{
  path : '/home',
  component : Home
},{
  path : '/login',
  component : Login
},{
  path : '/register',
  component : Register
}
,{
  path : '/time-entries',
  component : TimeEntries,
    children : [{
    path : 'log-time',
    // 懒加载
    component : resolve => require(['../components/LogTime.vue'],resolve),
  }]
}]
})
