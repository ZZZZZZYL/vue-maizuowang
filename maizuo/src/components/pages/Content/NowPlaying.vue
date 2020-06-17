<template>
	<div>
		<ul>
			<li v-for="item in list" :key="item.id">
				<img :src="item.cover.origin" />
				<h3>{{item.name}}</h3>
				<p>{{item.cinemaCount}}上映 {{item.watchCount}}观看
					<span>{{item.grade}}分</span>
				</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				list: []
			}
		},
		created(){
			this.$http.get("/mz/v4/api/film/now-playing",{
				params:{
	  	 		__t:new Date().getTime(),
	  	 		page:1,
	  	 		count:5
	  	 	}
	  	 }).then((res)=>{
	  	 	this.list = res.data.data.films;
			})//m.maizuo.com/v4/api/film/now-playing
		}
	}
</script>

<style scoped lang="scss">
$sc:25;
   .more {
   	    width: 160/$sc+rem;
    height: 30/$sc+rem;
    border: 1/$sc+rem solid #aaa;
    border-radius: 15/$sc+rem;
    margin-top: 10/$sc+rem;
    margin-left:auto;
    margin-right:auto;
    margin-bottom: 30/$sc+rem;
    text-align: center;
    line-height: 30/$sc+rem;
    font-size: 12/$sc+rem;
    color: #616161;
    cursor: pointer;
   }

</style>