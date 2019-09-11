import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
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
                price: 15.00,
                name: 'Twitter'
            },
            google: {
                id: 1,
                quantity: 5,
                price: 15.00,
                name: 'Google'
            },
            bmw: {
                id: 1,
                quantity: 5,
                price: 15.00,
                name: 'BMW'
            },
            facebook: {
                id: 1,
                quantity: 5,
                price: 15.00,
                name: 'Facebook Inc.'
            },
        }
    },
    mutations: {
        BUY_QUANTITY(state, { key, quantity }) {
            state.portfolio[key].quantity += quantity
        },
        REMOVE_FUNDS_AND_QUANTITY_OF_STOCK(state, { key, total, quantity }) {
            state.stock[key].quantity -= quantity
            state.funds -= total
        },
        ADD_TO_PORTFOLIO(state, item) {
            item.quantity = 0
            state.portfolio[item.key] = item
        }
    },
    actions: {
        buyItem({ commit, state }, { item, quantity }) {
            const total = quantity * item.price
            const key = item.key

            if (state.stock[key] < quantity) {
                throw Error('Estoque insuficiente!')
            } else if (state.funds < total) {
                throw Error('Saldo insuficiente!')
            }

            // retira do estoque
            commit('REMOVE_FUNDS_AND_QUANTITY_OF_STOCK', { key, total, quantity })

            // adiciona no portfolio
            if (!state.portfolio.hasOwnProperty(key)) {
                commit('ADD_TO_PORTFOLIO', item)
            }
            commit('BUY_QUANTITY', { key, quantity })
        }
    },
    getters: {
        funds: state => state.funds,
        portfolio: state => state.portfolio,
        stock: state => state.stock,
    }
})

export default store