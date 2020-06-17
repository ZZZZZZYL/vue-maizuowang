<template>
  <div id="app">
    <MyHeader />
    <router-view class="app"/>
  </div>
</template>

<script>
import MyHeader from "@/components/pages/MyHeader/MyHeader"
export default {
  name: 'App',
  components:{
      MyHeader
  }
}
</script>

<style lang="scss">
$sc:25;
#app {
   @import "./style/reset.scss"
 
}
.app{
   margin-top:50/$sc+rem;
}
</style>

