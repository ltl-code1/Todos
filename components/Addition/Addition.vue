<template>
	<view>
		<text>当前最新的count值为：{{$store.state.count}}</text>
		<button @click="$store.commit('add')">+1</button>
	</view>
</template>

<script>
	export default {
		name:"Addition",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">

</style>
