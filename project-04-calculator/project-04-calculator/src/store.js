import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        result: 0,
        expression: "3+3",
        errors: []
    },
    mutations: {
        ADD_IN_EXPRESSION(state, key) {
            state.expression += key
        },
        CLEAR_ALL(state) {
            state.result = 0
            state.expression = ''
            state.errors = []
        },
        RESOLVE_EXPRESSION(state) {
            try {
                state.result = eval(state.expression)
                state.errors = []
            } catch (error) {
                state.errors.push(error)
            }
        }
    },
    actions: {

    },
    getters: {
        result: state => state.result,
        expression: state => state.expression,
        errors: state => state.errors,

    }
})