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
        <ul class="nav navbar-nav navbar-right" v-if="!user.username">
          <li><router-link to="/login">登录</router-link></li>
          <li><router-link to="/register">注册</router-link></li>
        </ul>
         <ul class="nav navbar-nav navbar-right" v-else>
          <li><span>欢迎您，{{user.username}}!</span></li>
          <li><router-link to="/signout">退出</router-link>
         <!--  <span class="btn"  v-on:click="signout()">退出</span> --></li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
    <div v-if="getloading" class="load-div"><img src="./assets/images/loading.gif"  alt=""></div>
   </div>
</template>
<script>
import {mapGetters,mapState} from 'vuex';
    export default {
    name: 'app',
    data:function(){
      return {
          
      }
    },
    components: {
    },
    computed: {
    ...mapState({ user: state => state.userInfo }), //即时拿到登录信息
    ...mapGetters([
      'getMineBaseMsg', 
      'getloading'
    ])
  }, 
    mounted() {
        console.log("登录名"+this.user.username);
    },
    created() {
    this.$store.dispatch('getMineBaseApi');
    }
}
</script>
<style scoped>
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
  .navbar-nav>li>span{
    display: block;
    padding:  15px;
    line-height: 20px;
    color: #777;
  }
  .navbar-nav>li>span.btn{
    cursor: pointer;
  }
</style>