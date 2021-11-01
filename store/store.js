import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		todos: []
	},
	mutations: {
		getTodos(state) {
			let todos = plus.storage.getItem("todos");
			if(todos !== null){
				state.todos = JSON.parse(todos);
			}else{
				plus.storage.setItem('todos', '[]');
			}
		},
		setTodos(state, para) {
			if(para.inputVal !== ''){
				state.todos.push({"id": para.idNum, "title": para.inputVal});
				this.commit('setItem');
			}
		},
		removeTodoList(state, index){
			state.todos.splice(index, 1);
			this.commit('setItem');
		},
		checkChange(state, index) {
			let checked = state.todos[index].checked;
			if(checked){
				checked = undefined;
			}else{
				checked = true
			}
			state.todos[index].checked = checked;
			this.commit('setItem');
			this.commit('getTodos');
		},
		setItem(state) {
			plus.storage.setItem('todos', JSON.stringify(state.todos));
		}
	}
})