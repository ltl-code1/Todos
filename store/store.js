import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		count: 0
	},
	mutations: {
		add(state, num) {
			state.count += num
		},
		sub(state, num) {
			state.count -= num
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