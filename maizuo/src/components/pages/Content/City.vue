<template>
	<div class="box" v-watchScroll="vis" data-value="500">
		<button class="btn" v-show="vis.flag" v-gotop>回到顶部</button>
		<ul>			
			<li v-for="(item,index) in letters" :key="index">
				<!--跳转到字母对应的城市 href用的是锚点连接，要绑定-->
				<span class="item"><a :href="'#'+item">{{item}}</a></span>
			</li>
		</ul>
	   	 <ul class="list">    	
			<li v-for="(item,index) in list" :key="item.id">
				<!--下面这一句也是重点 输出的ABCDEFGHJKLMNPKRSTWXYZ不是定义在数组中输出的，				
				是取到了城市名的拼音首字母大写，用map放到了zm中，然后将zm输出。
				但是zm输出的时候要注意一个问题就是输出时有几个以A开头的城市就会输出几次A，
				所以要判断，下一个城市的首字母是否与上一个一样，如果一样就跳过，否则输出
				（首先index等于0时要输出，这是A，然后依次判断zm是否与上一个zm相等）-->
				<h3 :id="item.zm" v-if="index===0 || index!=0 && item.zm != list[index-1].zm">{{item.zm}}</h3>
				<span class="item">{{item.name}}</span>			
			</li>
	      </ul>
    </div>
</template>

<script>
	export default {
	  data(){
	  	 return {
	  	 	list: [],
	  	 	letters: [],
	  	 	vis:{
	  	 		flag: false
	  	 	}
	  	 }
	  },
	  created(){
	  	//这是在页面最上方的字母输出，跳过oiuv，用到的方法是fromCharCode，是将ASCII转化成字符
	  	for(var i = 65; i < 91; i++){
	  		if(i===73 || i=== 79 || i=== 85 || i===86){
	  			continue;
	  		}
	  		this.letters.push(String.fromCharCode(i))
	  	}
	  	 this.$http.get("/mz/v4/api/city",{
	  	 	params:{
	  	 		__t:new Date().getTime(),	  	 		
	  	 	}
	  	 }).then((res)=>{
	  	 	this.list = res.data.data.cities.sort((a,b)=>{//排序 用sort方法，并且是放到了回调函数中，按升序排序。
	  	 		return a.pinyin[0].charCodeAt()-b.pinyin[0].charCodeAt()
	  	 	}).map((item)=>{ //映射  现在item有三个键，分别是id zm name
	  	 		return {
	  	 			'id': item.id,
	  	 			'zm': item.pinyin[0],
	  	 			'name': item.name
	  	 		}
	  	 	})
	  	 })
	  }
	}
</script>

<style lang="scss" scoped>
	$sc:25;
	a{
		text-decoration: none;
		color: #838383;
	}
	h3:target{
		padding-top: 50/$sc+rem;
	}
	.list h3{
		clear: both;
		background: #ccc;
	}
	.item{
		width: 25%;
		font-size: 16px;
		line-height: 46/$sc+rem;
		text-align: center;
		display: inline-block;
		cursor: pointer;
		color: #838383;
		border-bottom: #ebebeb 1px solid;
		float: left;
	}
	.btn{
		position: fixed;
		bottom: 100/$sc+rem;
		right: 0;
		height: 40/$sc+rem;
		z-index: 500;
		background: rgba(0,0,0,0.2);
		border-radius: 12px;
		
		border: none;
	}
</style>