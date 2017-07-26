<template>
  <div class="header">
  	<div class="content-wrapper">
  		<div class="avatar"><img  width="64" height="64" :src="seller.avatar" alt=""></div>
  		<div class="content">
  			<div class="title">
  				<span class="brand"></span>
  				<span class="name">{{seller.name}}</span>
  			</div>
  			<div class="description">
  				{{seller.description}}/{{seller.deliveryTime}}分钟送达
  			</div>
  			<div class="supports" v-if="seller.supports" >
  				<span class="icon">
  					
  				</span>
  				<span class="text">
  					{{seller.supports[0].description}}
  				</span>
  			</div>
  		</div>
  	</div>
  	<div class="bulletin-wrapper"></div>
  </div>
</template>

<script>
export default {
  name: 'header',
    props: {
      seller: {
        type: Object
      }
    },
  data () {
    return {
      msg: 'Welcome to header'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only  lang="sass" type='stylesheet/scss'-->
<style  lang="scss"  type="text/css" scoped>
@import "./../../common/sass/mixin.scss";
.header{
	color: #ffffff;
	background-color: #000;
	.content-wrapper{
		padding: 24px 12px 18px 24px;
		font-size: 0;
		.avatar{
			display: inline-block;
		}
		.content{
			display: inline-block;
			font-size: 14px;
			margin-left: 16px;
			.title{
				.brand{
					width: 30px;
					height: 18px;
					display: inline-block;
					 @include bg-image('brand');
					background-size: 30px 18px;
					background-repeat: no-repeat;
				}
				.name{
					vertical-align: top;
					font-size: 16px;
					font-weight: bold;
					line-height: 18px;
					margin-left: 6px;
				}
			}
			.description{
				font-size: 12px;
				color: rgb(255,255,255);
				font-weight: 200;
				line-height: 12px;
				margin-top: 8px;
			}
			.supports{
				margin-top: 10px;
				.text{
				font-size: 10px;
				color: rgb(255,255,255);
				font-weight: 200;
				line-height: 12px;
				}
			}
		}
	}

}
</style>
