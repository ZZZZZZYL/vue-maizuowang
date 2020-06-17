<template>
	<div>
		<div class="box">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide" v-for="item in billboards">
			 	<img :src="item.imageUrl" />
	        </div>
	       
	    </div>
    </div>
	</div>
	
</template>

<script>
	import Swiper from 'swiper';
	import '../../../node_modules/swiper/dist/css/swiper.css'
	export default{
		data(){
			return {
				billboards: []
			}
		},
		created(){
			this.$http.get("mz/v4/api/billboard/home",{
				params:{
					__t: new Date().getTime()
				}
			}).then((res)=>{
				console.log(res);
				this.billboards = res.data.data.billboards;
			})
		},
		watch:{
			billboards(){
				this.$nextTick(()=>{
					new Swiper(".box",{
						loop: true,
						autoplay: { 
							disableOnInteraction: false,
							delay: 3000
						}
					})
				})
			}
		}
	}
</script>

<style>
	.swiper-container{
		height: 300px;
		width:100%;
	}
	.swiper-slide{
		height: 300px;
	}
	img{
		max-width: 100%;
	}
</style>