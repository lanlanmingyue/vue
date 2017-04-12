<template>
<div class="container">
	<div class="col-sm-3">
      <sidebar></sidebar>
      </div>
      <div class="col-sm-9">
        <div class="jumbotron">
		    <h1>任务追踪</h1>
		    <p>
		      <strong>
		        <router-link to="/time-entries">创建一个任务</router-link>
		      </strong>
		    </p>
		 </div>
      </div>
    </div>
</div>
</template>
<script>
	import Sidebar from '../components/Sidebar.vue'
	export default {
    components: { 'sidebar': Sidebar },
    mounted(){
    	// 设置当前状态为加载中
    this.$store.dispatch('setLoading', true);
    // 模拟请求等待
    var time = Math.floor(Math.random() * 2000);
    console.log('模拟加载用时' + time);
    setTimeout(() => {
      // 页面显示
      this.$store.dispatch('setLoading', false);
      this.showMe = true;
    }, time);
    }
  }
</script>