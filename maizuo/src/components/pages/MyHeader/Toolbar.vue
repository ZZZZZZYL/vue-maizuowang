<template>
	<div class="toolbar">
		<!--图标-->
		<i class="fa fa-bars" aria-hidden="true" @click="toggle"></i>
		<h3 @click="toggle" class="h3_1">卖座电影</h3>
		<h3 @click="handleCity" class="h3_2">北京</h3>
	</div>
</template>

<script>
	export default {
		props:["flag","toggle"],
		methods:{
			handleCity(){
				this.$router.push('/city');
			}
		}
	}
</script>

<style lang="scss" scoped>
	$sc: 25;
	.toolbar{
		width: 100%;
		position: fixed;
		top: 0;
	    right: 0;
	    left: 0;
		background: #282828;
		z-index: 500;
	    height: 50/$sc+rem;
	    line-height: 50/$sc+rem;
	    overflow: hidden;
	    i{
	    	color: #fff;
	    	margin: 16/$sc+rem;
	    }
	    .h3_1{
	    	position: absolute;
	    	left: 40/$sc+rem;
	    	top: 4/$sc+rem;
	    	color: #fff;
	   		/*display: inline-block;*/
	   		/*float: left;*/
	    }
		.h3_2{
			color: #fff;
			position: absolute;
			right: 20/$sc+rem;
			top: 4/$sc+rem;
			font-size: 14px;
		}
	}
</style>