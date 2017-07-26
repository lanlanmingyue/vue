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

#零碎注意点：
1.vue里img的路径不能直接 用src,要用v-bind:src简写成src，否则会报错</br>
eg:<img  width="64" height="64" :src="seller.avatar" alt=""></br>
2.通过异步获得的数据，起先的定义数据无值的话，要在循环调用处先判断存在不存在。v-if</br>
3.两个元素display:inline-block对齐方法</br>
原因：是因为中间有空格。解决方法：父元素：font-size:0 子元素定义字体大小
4.字体与图片对齐，考虑字体对齐方式：vertical-align: top;


#参考资料链接:[sass中文官网](http://www.w3cplus.com/sassguide/)</br>
[如何在项目中使用sass](http://www.w3cplus.com/preprocessor/how-to-create-project-with-sass.html)</br>
[eslint](https://eslint.org)</br>
[高仿饿了么实战教程](https://github.com/ustbhuangyi/vue-sell)</br>
[vue-cli中配置sass](http://www.cnblogs.com/rainheader/p/6505366.html)</br>

#相关知识点：
[flex布局]
[vue-router](https://router.vuejs.org/zh-cn/)
[vue引入sass报module not find问题](https://segmentfault.com/q/1010000008321697)
[vue-resource](https://github.com/pagekit/vue-resource)

#疑问
当前页面切换路由的问题。vue中路由界面部分切换，与整体切换的关系