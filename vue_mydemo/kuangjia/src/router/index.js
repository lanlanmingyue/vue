import Vue from 'vue'
import Router from 'vue-router'
//导入组件
import Home from '../views/Home'
import Detail from '../views/Detail'
//导入组件 end
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
	{
		path: '/detail',
		component: Detail
	}
  ]
})
