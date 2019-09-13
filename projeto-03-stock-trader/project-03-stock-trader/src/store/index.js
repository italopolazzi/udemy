import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function randomNumber(limit) {
    return Math.floor(Math.random() * limit)
}
Array.prototype.sample = function() {
    return this[randomNumber(this.length)]
}

const store = new Vuex.Store({
    state: {
        global: {
            messages: []
        },
        funds: 10000,
        portfolio: {
            twitter: {
                id: 1,
                quantity: 12,
                price: 12.00,
                name: 'Twitter'
            }
        },
        stock: {
            twitter: {
                id: 1,
                quantity: 5,
                price: 1500.00,
                name: 'Twitter'
            },
            google: {
                id: 1,
                quantity: 5,
                price: 1500.00,
                name: 'Google'
            },
            bmw: {
                id: 1,
                quantity: 5,
                price: 1500.00,
                name: 'BMW'
            },
            facebook: {
                id: 1,
                quantity: 5,
                price: 1500.00,
                name: 'Facebook Inc.'
            },
        }
    },
    mutations: {
        // BUY
        BUY_QUANTITY(state, { key, quantity }) {
            state.portfolio[key].quantity += quantity
        },
        REMOVE_FUNDS(state, total) {
            state.funds -= total
        },
        REMOVE_QUANTITY_OF_STOCK(state, { key, quantity }) {
            state.stock[key].quantity -= quantity
        },
        ADD_TO_PORTFOLIO(state, item) {
            item.quantity = 0
            state.portfolio[item.key] = item
        },
        // SELL
        SELL_QUANTITY(state, { key, quantity }) {
            state.portfolio[key].quantity -= quantity
        },
        ADD_FUNDS(state, total) {
            state.funds += total
        },
        REMOVE_QUANTITY_IN_PORTFOLIO(state, { key, quantity }) {
            state.portfolio[key].quantity -= quantity
        },
        // FLOAT
        FLOAT_STOCK(state, stock) {
            // operação randomica -1 ou 1
            const random_operator = [1, -1].sample()
            const _10perc_stock_price = 0.1 * stock.price
                // número randomico
            const random_number = randomNumber(_10perc_stock_price)
                // total
            const total = random_operator * random_number
            stock.price += total
        },
        THROW_ERROR(state, text) {
            state.global.messages.push({ type: 'error', text })
            throw Error(text)

        }
    },
    actions: {
        buyItem({ commit, state }, { item, quantity }) {
            const total = quantity * item.price
            const key = item.key

            if (state.stock[key] < quantity) {
                commit('THROW_ERROR', 'Estoque insuficiente!')
            } else if (state.funds < total) {
                commit('THROW_ERROR', 'Saldo insuficiente!')
            }

            // retira do estoque
            commit('REMOVE_FUNDS', total)
            commit('REMOVE_QUANTITY_OF_STOCK', { key, quantity })

            // adiciona no portfolio
            if (!state.portfolio.hasOwnProperty(key)) {
                commit('ADD_TO_PORTFOLIO', item)
            }
            commit('BUY_QUANTITY', { key, quantity })
        },
        sellItem({ commit, state }, { item, quantity }) {
            const key = item.key

            // verificar se possuo a quantidade para vender
            // devolver o dinheiro para minha conta
            // remover a quantidade do meu portfolio

            if (state.portfolio[key].quantity < quantity) {
                commit('THROW_ERROR', 'Você não possui está quantidade para vender')
            } else if (quantity < 1) {
                commit('THROW_ERROR', 'Você não pode vender uma quantidade nula ou negativa')
            } else if (!state.portfolio.hasOwnProperty(key)) {
                commit('THROW_ERROR', 'Você não possui este item para vender')
            }

            const total = quantity * item.price

            commit('SELL_QUANTITY', { key, quantity })
            commit('ADD_FUNDS', total)

        },
        endDay({ state, commit }) {
            for (let key in state.stock) {
                commit('FLOAT_STOCK', state.stock[key])
            }
        }
    },
    getters: {
        funds: state => state.funds,
        portfolio: state => state.portfolio,
        stock: state => state.stock,
        global_messages: state => state.global.messages
    }
})

export default store