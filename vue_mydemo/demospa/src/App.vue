// src/App.vue

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
  </div>
</template>
<script>
//import axios from 'axios'
    export default {
    name: 'app',
    components: {
    },
    mounted() {
        // console.log("mounted")
        // axios.post('/api/posts', {
        // }).then(
        //     m=>console.log(m.data)
        // );
    this.$http.post('/api/getBoardList')
    .then(function (response) {
      console.log(response.data.data);
      alert('成功了');
    })
    .catch(function (code) {
      alert('失败了');
      console.log(code);
    });
    }
}
</script>