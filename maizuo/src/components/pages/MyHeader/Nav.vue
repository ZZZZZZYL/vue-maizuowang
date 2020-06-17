<template>
	<!--左侧列表-->
	<div>				
		<transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
			<div class="nav" v-show="flag">
				<ul>
					<li v-for="item in list" :key="item.id" @click="toggle">
						<router-link :to="item.path">{{item.text}}</router-link>
					</li>
				</ul>
				
			</div>
		</transition>
		<transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
			<div class="mask" v-show="flag" @click="toggle"></div>		
		</transition>
	</div>
</template>

<script>
	export default{
		props:["flag","toggle"],
		data(){
			return {
				list:[
				{
					id:1,
					text:"首页",
					path:'./home'
				},
				{
					id:2,
					text:"影片",
					path:'./movie'
				},
				{
					id:3,
					text:"影院",
					path:'./cinema'
				},
				{
					id:4,
					text:"商城",
					path:'./shop'
				},
				{
					id:5,
					text:"我的",
					path:'./my'
				},{
					id:6,
					text:"卖座卡",
					path:'./card'
				}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	$sc:25;
	/*.v-enter,.v-leave-to{
		transform: translateX(-100%);
	}
	.v-enter-active,.v-leave-active{
		transition: all 1s;
	}
	//下面这句可以不用写
	.v-enter-to{
		transform: translateX(0%);
	}*/
	.mask{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.5);
		position: fixed;
		top: 0;
		z-index: 200;
	}
	.nav{
		border-top: 1px solid #222;
	    box-shadow: 0 1px 1px #363636 inset;
	    background: #282828;
	    position: absolute;
	    display: block;
	    top: 50/$sc+rem;
	    right: 110/$sc+rem;
	    bottom: 0;
	    left: 0;
	    z-index:300;
		li{
			line-height: 50/$sc+rem;
			a{
				color:#9a9a9a;
				font-size: 18px;
				text-decoration: none;
				margin-left: 10/$sc+rem;
			}
		}
	}
</style>