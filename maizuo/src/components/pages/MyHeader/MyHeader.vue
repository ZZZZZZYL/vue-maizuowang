<template>
	<div class="myheader">
		<Toolbar :toggle='toggle'/>		
		<Nav :flag="flag" :toggle="toggle"/>
	</div>
</template>

<script>
	import Toolbar from './Toolbar'
	import Nav from './Nav'
	export default{
		data(){
			return{
				flag: false
			}
		},
		methods:{
			toggle(){
				this.flag = !this.flag;
			}
			
		},
		components: {
			Toolbar,Nav
		}
	}
</script>

<style lang="scss">
</style>