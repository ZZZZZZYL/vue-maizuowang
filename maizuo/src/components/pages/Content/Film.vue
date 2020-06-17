<template>
	<div>
		<img :src="film.cover.origin" alt="" />
		<p class="p1">上映日期：{{film.premiereAt|dataFormat}}上映</p>
	
		<p class="p2">{{film.synopsis}}</p>
		<div class="buttondiv">
			<button @click="handleClickBuy">立即购票</button>			
		</div>
	</div>
</template>

<script>
	export default{
		props: ['id'],
		data(){
			return {
				film : {
					cover : {}
				}
			}
		},
		 created(){
	  	 this.$http.get("/mz/v4/api/film/"+this.id,{
	  	 	params:{
	  	 		__t:new Date().getTime(),	  	 		
	  	 	}
	  	 }).then((res)=>{
	  	 	this.film = res.data.data.film;
	  	 	console.log(this.film)
	  	 })
	 	},
	 	methods:{
	 		handleClickBuy(){
	 			this.$router.push('/film/'+this.id+'/cinema')
	 		}
	 	}
	}
</script>

<style lang="scss" scoped>
$sc:25;
	img{
		max-width:100%;
	}
	p{
		text-overflow: ellipsis;
		 font-size: 12px;
	    color: #333;
	    padding-left: 20/$sc+rem;
	    padding-right: 20/$sc+rem;
	}
	.p2{
		
	    margin-bottom: 80/$sc+rem;
	    padding-left: 20/$sc+rem;
	    padding-right: 20/$sc+rem;	    
	}
	.buttondiv{
		text-align: center;
	}
	button{
		font-size: 14px;
	    min-width: 156/$sc+rem;
	    height: 36/$sc+rem;
	    line-height: 36/$sc+rem;
	    border: none;
	    background-color: #fe8233;
	    padding: 0;
	    margin: 0;
	    border-radius: 18px;
	    color: #fff;
	    -webkit-transition: 0.5s ease;
	}
</style>