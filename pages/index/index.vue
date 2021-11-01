<template>
	<view class="content">
		<view class="header">
			<text class="title">待完成：{{unfinished}}</text>
			<view class="todo-container">
				<input class="todo-input" type="text" v-model="inputVal" placeholder="添加Todo" />
				<button class="todo-btn" size="mini" @click="useSetTodos(inputVal)">添加</button>
			</view>
		</view>
		<view class="main">
			<checkbox-group class="list" v-for="item in showTodos" :key="item.id" @change="checkboxChange(item.id)">
				<label class="list-label"> 
					<view class="list-content">
						<checkbox class="list-checkbox" :value="1" :checked="item.checked"/>
						<text class="list-text">{{item.title}}</text>
					</view>
					<text class="iconfont icon-shanchu list-remove" @click.stop="useRemoveTodoList(item.id)"></text>
				</label>
			</checkbox-group>
		</view>
		<view>
			{{showTodos}}
		</view>
		<view class="footer">
			<view class="show-all" @click="checkNavList(0)">
				<text class="iconfont icon-suoyou footer-icon" :class="[footerNavPosition == 0 ? footerNavClass : '']"></text>
				<text class="footer-text" :class="[footerNavPosition == 0 ? footerNavClass : '']">全部</text>
			</view>
			<view class="show-unfinish" @click="checkNavList(1)">
				<text class="iconfont icon-order-completed_fill footer-icon" :class="[footerNavPosition == 1 ? footerNavClass : '']"></text>
				<text class="footer-text" :class="[footerNavPosition == 1 ? footerNavClass : '']">未完成</text>
			</view>
			<view class="show-finished" @click="checkNavList(2)">
				<text class="iconfont icon-order-incomplete footer-icon" :class="[footerNavPosition == 2 ? footerNavClass : '']"></text>
				<text class="footer-text" :class="[footerNavPosition == 2 ? footerNavClass : '']">已完成</text>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex'
	
	export default {
		data() {
			return {
				showTodos: [],
				inputVal: '',
				footerNavClass: 'footer-nav',
				footerNavPosition: 0,
				ada: []
			}
		},
		components: {
			
		},
		computed:{
			...mapState(['todos']),
			unfinished: function() {
				let unfinishedNum = 0;
				for (let i = 0; i < this.todos.length; i++) {
					if(!this.todos[i].checked){
						unfinishedNum++;
					}
				}
				return unfinishedNum;
			}
		},
		onLoad() {
			
			this.getTodos();
			this.showTodos = this.todos;
			// plus.storage.removeItem('todos');
		},
		methods: {
			...mapMutations(['getTodos', 'setTodos', 'removeTodoList', 'checkChange']),
			useSetTodos(inputVal) {
				let idNum = this.getRandom(1, 9999999999);
				this.setTodos({inputVal: inputVal, idNum: idNum});
				this.inputVal = '';
			},
			useRemoveTodoList(id) {
				let index = this.getIndex(this.todos, id);
				this.ada = index;
				this.removeTodoList(index);
			},
			checkboxChange(id) {
				let index = this.getIndex(this.todos, id);
				this.checkChange(index);
			},
			checkNavList(index) {
				let list = [];
				if(index == 0){
					this.footerNavPosition = 0;
					this.showTodos = this.todos;
				}else if(index == 1){
					this.footerNavPosition = 1;
					for (let i = 0; i < this.todos.length; i++) {
						if(!this.todos[i].checked){
							list.push(this.todos[i])
						}
					}
					this.showTodos = list;
				}else{
					this.footerNavPosition = 2;
					for (let i = 0; i < this.todos.length; i++) {
						if(this.todos[i].checked){
							list.push(this.todos[i])
						}
					}
					this.showTodos = list;
				}
			},
			getRandom(min, max) {
				return parseInt(Math.random() * (max - min + 1) + min)
			},
			getIndex(todos, id) {
				for (let i = 0; i < todos.length; i++) {
					if(todos[i].id == id){
						return i;
					}
				}
			}
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
			margin-bottom: 100rpx;
			
			.list{
				height: 100rpx;
				margin: 30rpx 0;
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
						color: #999;
					}
				}
			}
		}
		
		.footer{
			display: flex;
			justify-content: space-around;
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 100rpx;
			padding-top: 16rpx;
			box-shadow: 0 0 20rpx rgba(0, 0, 0, 0.2);
			z-index: 9;
			background-color: #CACCC9;
			
			.show-all, .show-unfinish, .show-finished{
				text-align: center;
				
				.footer-icon{
					display: block;
					font-size: 50rpx;
					color: #333;
				}
				
				.footer-text{
					font-size: 30rpx;
				}
			}
			
			.show-all{
				.footer-icon{
					font-size: 40rpx;
					margin: 6rpx 0 6rpx;
				}
			}
			
			.footer-nav{
				color: #64958E !important;
			}
		}
	}
</style>
