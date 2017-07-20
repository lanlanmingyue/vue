<template>
  <div class="index">
    <v-header></v-header>
    <div class="header">header</div>
    <div class="tab">
      <div class="tab-item active"><router-link to="/goods">商品</router-link></div>
      <div class="tab-item"><router-link to="/ratings">评论</router-link></div>
      <div class="tab-item"><router-link to="/seller">商家</router-link></div>
    </div>
    <div class="content"><router-view ></router-view></div>
  </div>
</template>

<script>
import vheader from './../header/header';
export default {
  name: 'index',
  components: {
    'v-header': vheader
  },
  data () {
    return {
      msg: 'Welcome to index.vue'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  type="text/css" scoped>
  .index{
    .tab{
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
      background-color: #ccc;
      .tab-item{
        flex:1;
        text-align: center;
        font-size: 1.4rem;
        a{
          color:rgb(77,85,93);
          display: block;
        }
      }
       .active{
           a{
          color:rgb(240,20,20);
          display: block;
          }
        }
    }
  }
</style>
