import Vue from 'vue'
Vue.filter("dataFormat",function(value){
	var d= new Date(value);
	return (d.getMonth()+1)+"月"+d.getDate()+"日"
	
})
