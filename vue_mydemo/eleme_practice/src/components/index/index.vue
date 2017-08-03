<template>
  <div class="index">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item active"><router-link to="/goods">商品</router-link></div>
      <div class="tab-item"><router-link to="/ratings">评论</router-link></div>
      <div class="tab-item"><router-link to="/seller">商家</router-link></div>
    </div>
    <div class="content"><router-view :seller="seller"></router-view></div>
  </div>
</template>

<script>
import vheader from './../header/header';
const ERR_OK = 0;
export default {
  name: 'index',
    data () {
    return {
      msg: 'Welcome to index.vue',
      seller: {

      }
    };
  },
  created () {
    this.$http.get('./api/seller').then((response) => {
      response = response.body;
      if (response.error === ERR_OK) {
        this.seller = response.data;
        //console.log(this.seller);
      }
    });
  },
  components: {
    'v-header': vheader
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  type="text/css" scoped>
@import "./../../common/sass/mixin.scss";
  .index{
    .tab{
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
       @include border-1px(#ccc);
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
