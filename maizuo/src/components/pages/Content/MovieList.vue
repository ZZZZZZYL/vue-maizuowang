<template>
	 <div>
        <ul  v-infinite-scroll="loadMore"
             infinite-scroll-disabled="loading"
             infinite-scroll-distance="10">
			<li v-for="item in list" :key="item.id">
				<img :src="item.cover.origin" />
				<h3>{{item.name}}</h3>
				<p>{{item.cinemaCount}}上映 {{item.watchCount}}观看
					<span>{{item.grade}}分</span>
				</p>
			</li>
        </ul>
        <div class="more">更多热映电影</div>

    </div>
</template>

<script>
	import { Toast } from 'mint-ui';
export default {
	  data(){
	  	 return {
	  	 	list:[],  //放电影列表的地方
	  	 	type:'',  //电影的类型  coming-soon now-playing
	  	 	loading:false,//true的话，不允许发新的请求,false的话，才可以发请求
	  	 	no:1, //当前的页数是第一页
	  	 	hashMore:true // true 还有数据  false 没有数据了
	  	 }
	  },
	  created(){
	  		console.log("created")
	  },
	  watch:{
	   $route:{
        immediate:true,
        handler(n){
        	  console.log("watch")
	            let type=n.params.type;
		     	this.type=type;
		     	this.list=[];
		     	this.no=1;
		     	this.hashMore=true;
		     	this.loading=false; //防止发多个请求
		     	this.getData(); //一进来显示的是第一页数据
		     }

        }
    },
    methods:{
    	 loadMore(){
    	 	console.log("loadMore");
    	 	this.getData();
    	 },
    	 getData(){
              if(!this.hashMore){
              	var t=Toast({
				  message:'已经没有数据了',
				  position: 'middle',
				  duration: 3000
			   });
              	return;
              }
    	 	this.loading = true; //true 表示正在请求，其他请求无效
    	 	var t=Toast({
				  iconClass:'fa fa-spinner fa-pulse',
				  position: 'middle',
				  duration: -1
			});
    	 	 this.$http.get("/mz/v4/api/film/"+this.type,{
		  	 	params:{
		  	 		__t:new Date().getTime(),
		  	 		page:this.no,
		  	 		count:5
		  	 	}
		  	 }).then((res)=>{
		  	 	this.list = this.list.concat(res.data.data.films);
		  	 	var total =res.data.data.page.total;
		  	 	var current =res.data.data.page.current;
		  	 	console.log(total,current)
		  	 	this.hashMore = total!==current;
		  	 	// hashMore true表示没到最后页面
		  	 	// hashMore false 表示到最后的页面了
		  	 	this.loading=false;
		  	 	this.no+=this.hashMore?1:0;
		  	 	t.close();
		  	 })
    	 }
    }

	   
}

</script>

<style scoped lang="scss">

$sc:25;
    img{
    	max-width: 100%;
    }
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