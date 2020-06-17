<template>
	<div>
		<Swiper />
		<NowPlaying />
		<div class="divideline">
			<div class="comming">即将上映</div>
		</div>
		<router-view />
		<ComingSoon />
	</div>
</template>

<script>
	import Swiper from '@/components/common/Swiper'
	import NowPlaying from '@/components/pages/Content/NowPlaying'
	import ComingSoon from '@/components/pages/Content/ComingSoon'
	export default{
		components: {
			Swiper,NowPlaying,ComingSoon
		}
	}
</script>

<style lang="scss" scoped>
	$sc:25;
	img{
		max-width: 100%;
	}
	.divideline{
		position: relative;
		margin-top: 30/$sc+rem;
		margin-bottom: 30/$sc+rem;
		border-bottom: 1px solid #a8a8a8;
	}
	.comming{
		width: 65/$sc+rem;
		height: 20/$sc+rem;
		margin: 0 auto;
		margin-bottom: -10/$sc+rem;
		border-radius: 5/$sc+rem;
		font-size: 10/$sc+rem;
		line-height: 20/$sc+rem;
		text-align: center;
		color: #eee;
		background: #a7a7a7;
		
	}
</style>