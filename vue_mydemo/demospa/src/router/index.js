import Vue from 'vue'
import Router from 'vue-router'


import Home from '../components/Home'
import TimeEntries from '../components/TimeEntries'
import Login from '../components/login'
import Register from '../components/reg'
import signout from '../components/views/signout.vue'
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
},{
  path : '/signout',
  component : signout
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
