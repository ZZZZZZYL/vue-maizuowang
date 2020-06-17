import Vue from 'vue'
Vue.directive("watchScroll",function(el,binding){
	console.log(binding);
	var dis = el.getAttribute('data-value');
	window.addEventListener("scroll",function(e){
		var stop = document.documentElement.scrollTop;
		if(stop>dis){
			console.log("true");
			binding.value.flag = true;
		}else{
			console.log("false");
			binding.value.flag = false;
		}
	})
})
Vue.directive("gotop",{
	bind(el){
		el.onclick=function(){
			document.documentElement.scrollTop = 0;
		}
	}
})
