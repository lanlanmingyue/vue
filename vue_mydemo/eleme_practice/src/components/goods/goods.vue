<template>
  <div class="goods">
    <div class="goods-wrapper">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li v-for="(item,index) in goods" class="menu-item" :class="{'current':currentIndex===index}"  @click="selectMenu(index,$event)">
            <span class="text border-1px">
              <span v-if='item.type>0' class="icon" :class="classMap[item.type]"></span>{{item.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foodsWrapper">
          <ul>
          <li v-for="item in goods" class="food-list" ref="foodList" >
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li  v-for="food in item.foods" class="food-item border-1px">
                <div class="icon">
                  <img width="57" height="57" :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span><span class="old"
                                                                  v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>

                  <div class="cartcontrol-wrapper">
                    <cartcontrol @add="addFood" :food="food"></cartcontrol>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <shopcart ref="shopcart" :selectFoods="selectFoods" :deliveryPrice="seller.deliveryPrice"
                :minPrice="seller.minPrice"></shopcart>
                <!-- 因为此组件中的seller是从外组件传进来的，所以需要在index中的<router-view :seller="seller"> 将seller传过来，然后再将selectFoods等传给下一个组件 -->
    </div>
    <div class="footer-wrapper">
    </div>
  </div>
</template>

<script>
import BSscroll from 'better-scroll';
import shopcart from './../shopcart/shopcart';
import cartcontrol from './../cartcontrol/cartcontrol';
var ERR_OK=0;
export default {
  name: 'goods',
  props:{
    seller:{
      type:Object
    }
  },
  data () {
    return {
      goods:[],//设置goods为空，然后再从服务器上取相关结果
      msg: 'Welcome to goods',
      listHeight:[] ,//这是个数组，因为要知道每个区间的高度
      scrollY:0
    };
  },
  computed:{
     currentIndex() {
        for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i];
          let height2 = this.listHeight[i + 1];
          //获得scrollY落在哪个区间值上面或者是最后一个，就是当前的索引值。然后再html中，用索引值控制当前样式
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            return i;
          }
        }
        return 0;
      },
      selectFoods() {
        let foods = [];
        //遍历goods中的分类列表，然后遍历分类列表中被选中的商品，存入数组
        this.goods.forEach((good) => {
          good.foods.forEach((food) => {
            if (food.count) {
              foods.push(food);
            }
          });
        });
        return foods; //返回这个数据。可以用shopcart 调用selectfoods完成联动，实现了两个组件的联动
        //原理：当选择商品时，goods就会发生变化，然后这个函数就会实时变化，若shopcart组件调用这个数据，则goods组件与shopcart组件 这两个组件数据就会联动
      }
  },
  created(){
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    this.$http.get('./api/goods').then((response)=>{
      response=response.body;
      if (response.error===ERR_OK) {
        this.goods=response.data;
          this.$nextTick(() => {
            this._initScroll();
            this._calculateHeight();
      });
        console.log(this.goods);
      } 

    });
  
  },
  methods:{
    selectMenu(index, event) {
        if (!event._constructed) {
          return;
        }
        let foodList = this.$refs.foodList;
        let el = foodList[index];
        this.foodsScroll.scrollToElement(el, 300);
      },
      selectFood(food, event) {
        //在PC端，better-scroll派发事件会有这个event._constructed属性。默认事件是没有这个属性的
        //此处若是PC端原生的点击事件，则将这个事件return掉，不触发。
        if (!event._constructed) {
          return;
        }
        this.selectedFood = food;
        this.$refs.food.show();
      },
      addFood(target) {
        this._drop(target);
      },
      _drop(target) {
        // 体验优化,异步执行下落动画
        this.$nextTick(() => {
          this.$refs.shopcart.drop(target);
        });
      },
    _initScroll(){
      this.menuScroll = new BSscroll(this.$refs.menuWrapper,{
        click:true //better-scroll会阻止掉默认事件，这是为了派发点击事件，此处，若在PC端点击的话，会点击两次
      });
      this.foodsScroll = new BSscroll(this.$refs.foodsWrapper,{
        click:true,
        probeType: 3 //告知程序，在滚动时，实时获得其滚动位置
      });
      this.foodsScroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    _calculateHeight(){
        let foodList=this.$refs.foodList;//获得DOM元素
        let height=0; //初始值
        this.listHeight.push(height);
        for (var i = 0; i < foodList.length; i++) {
          let item=foodList[i];
          height+=item.clientHeight;
          this.listHeight.push(height);
        }
        console.log(this.listHeight);
    }
  },
  components:{
    shopcart,
    cartcontrol
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss"  type="text/css" scoped>
@import "./../../common/sass/mixin.scss";
  .goods-wrapper{
     position: absolute;
    top: 174px;
    bottom: 46px;
    width: 100%;
    overflow: hidden;
    display: flex;
    .menu-wrapper{
      flex: 0 0 80px;
      width: 80px;
      background: #f3f5f7;
      .menu-item{
        display: table;
        height: 54px;
        width: 56px;
        padding: 0 12px;
        line-height: 14px;
        &.current{
           position: relative;
          z-index: 10;
          margin-top: -1px;
          background: pink;
          font-weight: 700;
          .text{
            @include border-none();
          }
         }
        .icon{
          display: inline-block;
          width: 12px;
          height: 12px;
          margin-right: 4px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          &.decrease{
            @include bg-image('decrease_3');
          }
          &.discount{
            @include bg-image('discount_3');
          }
          &.guarantee{
            @include bg-image('guarantee_3');
          }
          &.invoice{
            @include bg-image('invoice_3');
          }
          &.special{
            @include bg-image('special_3');
          }

        }
        .text{
          display: table-cell;
          width: 56px;
          vertical-align: middle;
          @include border-1px(rgba(7, 17, 27, 0.1));
          font-size: 12px;
        }
      }
    }
    .foods-wrapper{
      flex:1;
      .title{
          padding-left: 14px;
        height: 26px;
        line-height: 26px;
        border-left: 2px solid #d9dde1;
        font-size: 12px;
        color: rgb(147, 153, 159);
        background: #f3f5f7;
      }
      .food-item{
        display: flex;
        margin: 18px;
        padding-bottom: 18px;
        @include border-1px(rgba(7, 17, 27, 0.1));
        &:last-child{
          @include border-none();
          margin-bottom: 0;
        }  
        .icon{
          flex: 0 0 57px;
          margin-right: 10px;
        }
        .content{
           flex: 1;
          .name{
            margin: 2px 0 8px 0;
            height: 14px;
            line-height: 14px;
            font-size: 14px;
            color: rgb(7, 17, 27);
          }
         
          .desc, .extra{
           line-height: 10px;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
         
          .desc{
             line-height: 12px;
            margin-bottom: 8px;
          }
           
          .extra{
            .count{
              margin-right: 12px;
            }
          }
            
          .price{
           font-weight: 700;
           line-height: 24px;
           .now{
            margin-right: 8px;
            font-size: 14px;
            color: rgb(240, 20, 20);
          }
          .old{
            text-decoration: line-through;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
          
        }

          .cartcontrol-wrapper{
            position: absolute;
            right: 0;
            bottom: 12px;
          }
         
        }
         
      }
  }
}
</style>
