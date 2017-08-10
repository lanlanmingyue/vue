# 饿了么练习
 使用技术 vue、vue-router、vue-resource、sass

> a project for practice 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


##项目制作流程
#项目实战-准备工作-需求分析</br>
	根据设计给的图以及产品经理的交互需求分析。</br>
	分析一下，有哪些页面需要做的;实现哪些功能;哪些功能有关联性；需要优化到什么程度；分为哪些组件
#项目实战-准备工作-资源准备
设计资源方面：（1）小图标 （2）svg/img/psd/标注图/设计稿的jpg观看图 </br>
前端工程方面: （1）制作iconfront图标字体。样式准备：基本样式准备 reset.css;
js库准备，css扩展语言sass准备(sass文件的后缀名是scss)
（2）代码目录设计 </br>
	--src </br>
	----common</br>
	--------fonts</br>
	--------js</br>
	--------sass</br>
	----components</br>
	--------header</br>
	----------header.vue</br>

（3）模拟测试数据</br>
mook模拟数据：</br>
找到build/dev-server.js

//mock模拟数据start
var appData = require('../data.json');
var seller = appData.seller; //定义拿到数据
var apiRoutes = express.Router();//定义一个数据路由
apiRoutes.get('/seller',function(req,res){ //写接口
res.json({
errno:0, //error number 错误码
seller:seller //数据就是上面定义的数据
})

});
//若定义其他数据接口,qita 如：var qita=appData.qita
/*
apiRoutes.get('/qita',function(req,res){ //写接口
res.json({
errno:0, //error number 错误码
qita:qita //数据就是上面定义的数据
})

});
*/
//app.use(路径,路由接口)
//使地址访问时，url/api/seller就可以访问到seller相关的数据
app.use('/api',apiRoutes);
//mock模拟数据 end

##项目实战-页面骨架开发-整体设计

#SASS在项目中的使用
安装：1，使用save会在package.json中自动添加。
npm install node-sass --save-dev
npm install sass-loader --save-dev

#SASS的mixin使用
@mixin border-1px($color){
	border-bottom: 1px solid $color;
}
调用</br>
引入并调用：
 @include border-1px(#ccc);

#简约路径配置，webpack.base.conf.js
 alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }

#vue-resource使用
在package.json 里添加依赖"vue-resource": "^1.3.4"</br>
import VueResource from 'vue-resource';</br>
Vue.use(VueResource);</br>

#父組件傳值給子組件
父組件 index.vue中 <v-header :seller="seller"></v-header> </br>
定義一個屬性:seller并賦值seller </br>

子組件header.vue中，定義一個props接收數據seller,并定義其數據類型</br>
eg: props: {
      seller: {
        type: Object
      }
    }



#elsint配置
.eslintrc.js配置rules:'semi': ['error','always']

#eslint删除验证
webpack.base.conf.js中的          {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      删掉即可

#安装sass
npm install sass-loader --save-dev

#不同情况的小图标调用：
思路：动态绑定class,:class="类名"</br>
相应的类名，写成一个数组  created(){
    this.classMap=['decrease', 'discount', 'special', 'invoice', 'guarantee']
  }</br>
  根据相应的type值，读取相对应的样式名。:class="classMap[seller.supports[0].type]"



#零碎注意点：
1.vue里img的路径不能直接 用src,要用v-bind:src简写成src，否则会报错</br>
eg:<img  width="64" height="64" :src="seller.avatar" alt=""></br>
2.通过异步获得的数据，起先的定义数据无值的话，要在循环调用处先判断存在不存在。v-if</br>
3.两个元素display:inline-block对齐方法</br>
原因：是因为中间有空格。解决方法：父元素：font-size:0 子元素定义字体大小</br>
4.字体与图片对齐，考虑字体对齐方式：vertical-align: top;</br>
5.模糊滤镜，[参考网址](http://www.w3cplus.com/css3/ten-effects-with-css3-filter)
filter:blur(10px);</br>
6.点击事件@click</br>
7.sticky footer布局，示例：header 中的detail模块</br>
8.computed 相当于实时计算</br>
9.分数算法：let score = Math.floor(this.score * 2) / 2;</br>
10.组件使用：引入：import star from './../star/star'</br>
注册： components: {
    star
  }</br>
  使用：<star :size='48' :score="seller.score"></star></br>
11.v-for循环里的索引使用：v-for="(item,index)  in seller.supports"
              调用：{{seller.supports[index].description}}
12.[vue2.0过渡动画](http://www.cnblogs.com/jiangxiaobo/p/6076652.html)
13.flex: 0 0 80px;</br>
flex 属性，是以下三个属性的简写：</br>
flex-grow:0; 定义弹性盒子项的拉伸因子，即子项分配父项剩余空间的比，默认值为 0；</br>
flex-shrink:1; 指定了 flex 元素的收缩规则，子项的收缩所占的份数，默认值为1 [ 当所有子项相加的宽度大于父项的宽度，每个子项减少的多出的父项宽度的 1/n ]</br>
felx-basis:auto; 指定了 flex 元素在主轴方向上的初始大小，即子项的宽度</br>
14.在vue2.0里如何获得DOM元素：</br>


```HTML
<template>
  <div style="display: block;" ref="abc">
    <!-- 在js中通过this.$refs.abc -->
  </div>
</template>

<script>
export default {
  mounted () {
    console.log(this.$refs.abc.style.cssText)
  }
}
</script>
```
</br>
15.this.$nextTick()  $nextTick 是在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后使用 $nextTick，则可以在回调中获取更新后的 DOM </br>
16.goods列表模块，联动原理：计算右侧Y值落在哪个区间，需要计算每个小模块的高度。</br>

17.在PC端，better-scroll派发事件会有这个event._constructed属性。默认事件是没有这个属性的</br>
18.goods.vue的 由路由传递给子组件值。 --因为此组件中的seller是从外组件传进来的，所以需要在index中的router-view :seller="seller"，将seller传过来，然后再将selectFoods等传给下一个组件 --</br>
20.购物车组件实质是 选择了多少商品 的映射，那我们就需要从goods组件中，获得 选择了多少商品的 传递值</br>
21. Vue.set </br>
22.this.$emit() </br>
23. 7-17 selectFoods方法待定 </br>
24.子组件传事件给父组件，父组件即可调用自助件中定义的方法。eg:shopcart.vue中的ball的drop方法。</br>
25.父组件如何访问到子组件，<shopcart ref="shopcart"> 则调用方法为：this.$refs.shopcart  </br>
26.cubic-bezier 贝赛尔曲线运动，跟小球的运动弧度有关系</br>

27.可传变量的组件。参考：ratingselect</br>
28.filter() 过滤函数，参考：ratingselect</br>
29.import {formatDate,a} from   带花括号的原因是，此为自定义模块函数formatDate和a。</br>
30.a.active 当前点击链接样式，在路由里加这个属性  linkActiveClass: 'active'</br>


#参考资料链接:[sass中文官网](http://www.w3cplus.com/sassguide/)</br>
[如何在项目中使用sass](http://www.w3cplus.com/preprocessor/how-to-create-project-with-sass.html)</br>
[eslint](https://eslint.org)</br>
[高仿饿了么实战教程](https://github.com/ustbhuangyi/vue-sell)</br>
[vue-cli中配置sass](http://www.cnblogs.com/rainheader/p/6505366.html)</br>
[sticky footer布局](http://www.w3cplus.com/css3/css-secrets/sticky-footers.html)</br>
[better-scroll](https://github.com/ustbhuangyi/better-scroll)</br>

#相关知识点：
[flex布局](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)</br>
[vue-router](https://router.vuejs.org/zh-cn/)</br>
[vue引入sass报module not find问题](https://segmentfault.com/q/1010000008321697)</br>
[vue-resource](https://github.com/pagekit/vue-resource)</br>

#疑问
当前页面切换路由的问题。vue中路由界面部分切换，与整体切换的关系