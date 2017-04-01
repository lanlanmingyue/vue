// main.js
import Vue from 'vue'
import App from './App'
import router from './router';
import store from './vuex/store';
// 导入 vue-resource，并使用  
import VueResource from 'vue-resource'  
Vue.use(VueResource) 

import { setDPR, remChange } from './lib/js/remChange.js';
setDPR();
remChange();


// 创建 Vue 实例
new Vue({
  el: '#app',
  data(){
  	return {
  		transitionName: 'slide'
  	}
  },
  router, // 在vue实例配置中，用router
  store,
  template: '<App/>',
  components: { App },
  watch: {
  	// 监视路由，参数为要目标路由和当前页面的路由
  	'$route' (to, from){
  		const toDepth = to.path.substring(0, to.path.length-2).split('/').length
  		// 官方给出的例子为 const toDepth = to.path.split('/').length 由于现在只有两个路由路径'/'和'/detail'
  		// 按照官方给的例子，这两个路由路径深度都为 2 ，所以，这里稍作调整，不知道有什么不妥
  		// 但目前在这个demo中能正常运行，如果知道更好的方法，欢迎留言赐教
  		const fromDepth = from.path.substring(0, from.path.length-2).split('/').length
  		this.transitionName = toDepth < fromDepth ? 'slide_back' : 'slide'
  		// 根据路由深度，来判断是该从右侧进入还是该从左侧进入
  	}
  }
})