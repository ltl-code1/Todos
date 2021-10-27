<template>
	<view class="content">
		<view class="header">
			<text class="title">待完成：0</text>
			<view class="todo-container">
				<input class="todo-input" type="text" v-model="inputVal" placeholder="添加Todo" />
				<button class="todo-btn" size="mini" @click="setTodos(inputVal)">添加</button>
			</view>
		</view>
		<view class="main">
			<checkbox-group class="list" v-for="item in todos">
				<label class="list-label"> 
					<view class="list-content">
						<checkbox class="list-checkbox" :value="1" />
						<text class="list-text">{{item.title}}</text>
					</view>
					<text class="iconfont icon-shanchu list-remove"></text>
				</label>
			</checkbox-group>
		</view>
		<view class="">
			{{val}}
		</view>
		<view class="footer">
			
		</view>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex'
	
	export default {
		data() {
			return {
				val: 0,
				inputVal: ''
			}
		},
		components: {
			
		},
		computed:{
			...mapState(['todos'])
		},
		onLoad() {
			this.getTodos()
		},
		methods: {
			...mapMutations(['getTodos', 'setTodos']),
			
		}
	}
</script>

<style lang="less">
	page{
		background-color: #CACCC9;
	}
	.content{
		.header{
			display: flex;
			justify-content: space-around;
			align-items: center;
			width: 750rpx;
			height: 100rpx;
			margin-top: 20rpx;
			
			.title{
				color: #64958E;
				font-size: 32rpx;
			}
			.todo-container{
				.todo-input{
					display: inline-block;
					height: 60rpx;
					margin-right: 16rpx;
					padding-left: 16rpx;
					background-color: #F9FBF8;
					font-size: 28rpx;
					border-radius: 8rpx;
				}
				.todo-btn{
					background-color: #64958E;
					color: #fff;
				}
			}
		}
		
		.main{
			margin: 40rpx;
			
			.list{
				height: 70rpx;
				margin: 20rpx 0;
				border-left: 10rpx solid #64958E;
				background-color: #F9FBF8;
				
				.list-label{
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 100%;
					
					.list-content{
						.list-checkbox{
							margin: 0 20rpx 0 30rpx;
						}
						.list-text{
							font-size: 28rpx;
						}
					}
					.list-remove{
						margin-right: 20rpx;
						padding: 8rpx;
					}
				}
			}
		}
		
		.footer{
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 100rpx;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.2);
		}
	}
</style>
