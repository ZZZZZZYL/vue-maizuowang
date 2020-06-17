<template>
	<div>
		<ul>
			<li v-for="item in list" :key="item.id">
				<img :src="item.cover.origin" alt="" />
				<h3>{{item.name}}</h3>
				<p>{{item.cinemaCount}}上映{{item.watchCount}}观看
					<span>{{item.grade}}</span>
				</p>
			</li>
		</ul>
		<div class="more">更多热映电影</div>
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
			this.$http.get("/mz/v4/api/film/coming-soon",{
				params: {
					__t: new Date().getTime(),
					page: 1,
					count: 3					
				}
			}).then((res)=>{
				this.list=res.data.data.films;
			})
		}
	}
</script>

<style>
</style>