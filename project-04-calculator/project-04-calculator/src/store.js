import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const secure_eval = expression => {
    const matched = expression.split('').every(item => /\d|[().+-/*]/g.test(item))
    if (matched) {
        return eval(expression)
    } else {
        throw Error('Invalid expression')
    }
}

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
        RESOLVE_EXPRESSION({ calculator }, resolve_symbol = "=") {
            try {
                switch (resolve_symbol) {
                    case "%":
                        calculator.result = secure_eval(calculator.expression) / 100
                        break;
                    default:
                        calculator.result = secure_eval(calculator.expression)
                        break;
                }
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