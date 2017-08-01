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
  				<span class="icon" :class="classMap[seller.supports[0].type]">
  				</span>
  				<span class="text">
  					{{seller.supports[0].description}}
  				</span>
  			</div>
  		</div>
  		<div class="support-count" v-if="seller.supports">
  			<span class="count" @click="showDetail">
				{{seller.supports.length}}个
  			</span>
  			<span class="icon-keyboard_arrow_right"></span>
  		</div>
  	</div>
  	<div class="bulletin-wrapper" @click="showDetail">
  		<span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
  		<i class="icon-keyboard_arrow_right"></i>
  	</div>
  	<div class="background"><img :src="seller.avatar" alt="" width="100%" height="100%"></div>
  	<transition name="fade">
  	<div class="detail" v-show="detailShow">
  		<div class="detail-wrapper clearfix">
  			<div class="detail-main">
  				<h1 class="name">{{seller.name}}</h1>
  				<div class="star-wrapper"><star :size='48' :score="seller.score"></star></div>
  				<div class="title">
  					<div class="line"></div>
  					<div class="text">优惠信息</div>
  					<div class="line"></div>
  				</div>
  				<ul class="supports" v-if="seller.supports" >
  					<li class="support-item" v-for="(item,index)  in seller.supports" >
  						<span class="icon" :class="classMap[seller.supports[index].type]"></span>
  						<span class="text">{{seller.supports[index].description}}</span>
  					</li>
  				</ul>
  				<div class="title">
  					<div class="line"></div>
  					<div class="text">商家公告</div>
  					<div class="line"></div>
  				</div>
  				<div class="bulletin">	
  					<p class="content">{{seller.bulletin}}</p>
  				</div>
  			</div>
  		</div>
  		<div class="detail-close" @click="hideDetail">
  			<i class="icon-close"></i>
  		</div>
  	</div>
  	</transition>
  </div>
</template>

<script>
import star from './../star/star'
export default {
  name: 'header',
    props: {
      seller: {
        type: Object
      }
    },
  data () {
    return {
      msg: 'Welcome to header',
      detailShow: false
    };
  },
  created(){
  	this.classMap=['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  methods:{
  	showDetail(){
  		this.detailShow = true;
  	},
  	hideDetail(){
  		this.detailShow = false;
  	}
  },
  components: {
  	star
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only  lang="sass" type='stylesheet/scss'-->
<style  lang="scss"  type="text/css" scoped>
@import "./../../common/sass/mixin.scss";
@import "./../../common/sass/base.scss";
.header{
	color: #ffffff;
	position: relative;
	background-color: rgba(7,17,27,0.5);
	overflow: hidden;
	.content-wrapper{
		padding: 24px 12px 18px 24px;
		font-size: 0;
		position: relative;
		.avatar{
			display: inline-block;
			img{
				border-radius: 2px;
			}
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
				vertical-align: top;
				}
				.icon{
					display: inline-block;
					width: 12px;
					height: 12px;
					margin-right: 4px;
					background-size: 12px 12px;
					background-repeat: no-repeat;
					&.decrease{
						@include bg-image('decrease_1');
					}
					&.discount{
						@include bg-image('discount_1');
					}
					&.guarantee{
						@include bg-image('guarantee_1');
					}
					&.invoice{
						@include bg-image('invoice_1');
					}
					&.special{
						@include bg-image('special_1');
					}

				}
			}
		}
		.support-count{
			position: absolute;
			bottom: 14px;
			right: 12px;
			padding: 0 8px;
			height: 24px;
			line-height: 24px;
			border-radius: 14px;
			background-color: rgba(0,0,0,0.2);
			text-align: center;
			.count{
				vertical-align: top;
				color: #ffffff;
				font-size: 10px;
			}
			.icon-keyboard_arrow_right{
				font-size: 10px;
				height: 24px;
				line-height: 24px;
			}
		}
	}
	.bulletin-wrapper{
		height: 28px;
		line-height: 28px;
		padding: 0 22px 0 12px;
		@include text-overflow;
		position: relative;
		background-color: rgba(7,17,27,0.2);
		.bulletin-title{
			display: inline-block;
			vertical-align: top;
			width: 22px;
			height: 12px;
			@include bg-image('bulletin');
			background-size: 22px 12px;
			background-repeat: no-repeat;
			font-size: 10px;
			margin-top: 8px;
		}
		.bulletin-text{
			font-size: 10px;
			vertical-align: top;
			margin: 0 4px;
		}
		.icon-keyboard_arrow_right{
			position: absolute;
			font-size: 10px;
			right: 12px;
			top: 9px;
		}
	}
	.background{
		width: 100%;
		height: 100%;
		z-index: -1;
		position: absolute;
		left: 0;
		top: 0;
		filter:blur(10px);

	}
	.detail{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		width: 100%;
		height: 100%;
		overflow: auto;
		opacity: 1;
		background:rgba(7,17,27,0.8);
		&.fade-enter-active, &.fade-leave-active{
			transition: all 0.5s;
		}
		&.fade-enter, &.fade-leave-active{
			opacity: 0;
			background: rgba(7, 17, 27, 0);
		}
		.detail-wrapper{
			width: 100%;
			min-height: 100%;
			.detail-main{
				margin-top: 64px;
				padding: 0 0 64px 0;//即colse的高度
				.name{
					line-height: 16px;
					text-align: center;
					font-size: 16px;
					font-weight: 700;
				}
				.star-wrapper{
					margin-top: 16px;
					padding: 2px 0;
					text-align: center;
				}
				.title{
					width: 80%;
					display: flex;
					margin: 28px auto 24px auto;
					.line{
						flex:1;
						position: relative;
						top: -6px;
						border-bottom: 1px solid rgba(255,255,255,0.2);
					}
					.text{
						padding: 0 12px;
						font-weight: 700;
						font-size: 14px;
					}
				}
				.supports{
					width: 80%;
					margin: 0 auto;
					.support-item{
						padding: 0 12px;
						margin-bottom: 12px;
						font-size: 0
						&:last-child{
							margin-bottom:0;
						}
						.icon{
							width: 16px;
							height: 16px;
							display: inline-block;
							vertical-align: top;
							margin-right: 6px;
							background-size: 16px;
							background-repeat: no-repeat;
							&.decrease{
								@include bg-image('decrease_2');
							}
							&.discount{
								@include bg-image('discount_2');
							}
							&.guarantee{
								@include bg-image('guarantee_2');
							}
							&.invoice{
								@include bg-image('invoice_2');
							}
							&.special{
								@include bg-image('special_2');
							}
						}
						.text{
							line-height: 16px;
							font-size: 12px;
						}
					}
				}
				.bulletin{
					width: 80%;
					margin: 0 auto;
					.content{
						padding: 0 12px;
						font-size: 12px;
						line-height: 24px;
					}
				}
			}
		}
		.detail-close{
			position: relative;
			width: 32px;
			height: 32px;
			margin: -64px auto; //注意点
			clear: both;
			font-size: 32px;
		}
	}
}
</style>
