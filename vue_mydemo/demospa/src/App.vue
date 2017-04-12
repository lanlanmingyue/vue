<template>
   <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>
          计划板
        </a>
        <ul class="nav navbar-nav">
          <li><router-link to="/home">首页</router-link></li>
          <li><router-link to="/time-entries">计划列表</router-link></li>
        </ul>
          <ul class="nav navbar-nav navbar-right">
          <li><router-link to="/login">登录</router-link></li>
          <li><router-link to="/register">注册</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
    <div v-if="isLoading" class="load-div"><img src="./assets/images/loading.gif"  alt=""></div>
   </div>
</template>
<script>
import {mapGetters} from 'vuex'
    export default {
    name: 'app',
    data:function(){
      return {

      }
    },
    components: {
    },
    computed: {
    ...mapGetters([
      'getMineBaseMsg'
    ]),
    isLoading:function(){
       return this.$store.getters.getloading;
    }
  },
    mounted() {
    },
    created() {
    this.$store.dispatch('getMineBaseApi');
  }
}
</script>
<style>
  .load-div{
    width:3rem;
  height:3rem;
  position:fixed;
  top:50%;
  left:50%;
  margin-top:-1.5rem;
  margin-left:-1.5rem;
  }
  .load-div>img{
    width: 100%;
    display: block;
  }
</style>