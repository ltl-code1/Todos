<template>
	<view class="content">
		<Addition />
		<Subtraction />
	</view>
</template>

<script>
	import Addition from '../../components/Addition/Addition.vue'
	import Subtraction from '../../components/Subtraction/Subtraction.vue'
	
	export default {
		data() {
			return {
				
			}
		},
		components: {
			Addition,
			Subtraction
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	
</style>
