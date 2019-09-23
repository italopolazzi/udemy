import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        calculator: {
            result: 0,
            expression: "",
            errors: []
        }
    },
    mutations: {
        ADD_IN_EXPRESSION({ calculator }, key) {
            calculator.expression += key
        },
        CLEAR_ALL({ calculator }) {
            calculator.result = 0
            calculator.expression = ''
            calculator.errors = []
        },
        RESOLVE_EXPRESSION({ calculator }) {
            try {
                calculator.result = eval(calculator.expression)
                calculator.errors = []
            } catch (error) {
                calculator.errors.push(error)
                if (calculator.errors.length) {
                    setTimeout(() => {
                        calculator.errors.shift()
                    }, 5000);
                }
            }
        }
    },
    actions: {

    },
    getters: {
        result: state => state.calculator.result,
        expression: state => state.calculator.expression,
        errors: state => state.calculator.errors
    }
})