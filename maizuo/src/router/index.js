import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "@/components/pages/Content/Home"
import Movie from "@/components/pages/Content/Movie"
import Cinema from "@/components/pages/Content/Cinema"
import City from "@/components/pages/Content/City"
import Film from "@/components/pages/Content/Film"
import MovieList from "@/components/pages/Content/MovieList"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:{'name':'home'}
    },
    {
    	path:'/home',
    	name:'home',
    	component:Home,
    	
    },
    {
    	path:'/movie',
    	name:'movie',
    	component:Movie,
    	children:[
		    	{
		    		path: ":type",
		    		compontent: MovieList
		    	}
	    	]
    },
    {
    	path:'/cinema',
    	name:'cinema',
    	component:Cinema
    },
    {
    	path: '/city',
   		 name: 'city',
   		 component: City
    },
    {
    	path:'/film/:id',
    	name: 'film',
    	component: Film,
    	props: true
    }
  ]
})
