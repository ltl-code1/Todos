<template>
	<view>
		<text>当前最新的count值为：{{count}}</text>
		<button @click="sub(num)">-{{num}}</button>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex'
	export default {
		name:"Addition",
		data() {
			return {
				num: 2
			};
		},
		computed: {
			...mapState(['count'])
		},
		methods: {
			...mapMutations(['sub'])
		}
	}
</script>

<style lang="less">

</style>
