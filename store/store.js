import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		todos: []
	},
	mutations: {
		add(state, num) {
			state.count += num
		},
		sub(state, num) {
			state.count -= num
		},
		getTodos(state) {
			let todos = plus.storage.getItem("todos");
			if(todos !== null){
				state.todos = JSON.parse(todos);
			}else{
				state.todos =[
					{
						title: '无内容'
					}
				]
			}
		},
		setTodos(state, inputVal) {
			console.log(inputVal)
			if(inputVal !== ''){
				state.todos.push({title: inputVal});
				plus.storage.setItem('todos', JSON.stringify(state.todos));
			}
		}
	},
	actions: {
		addAsync(context, num) {
			setTimeout(function() {
				context.commit('add', num)
			}, 1000)
		}
	}
})