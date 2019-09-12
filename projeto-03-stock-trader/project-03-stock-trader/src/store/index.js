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
            state.stock[key].quantity += quantity
        },
        ADD_FUNDS(state, total) {
            state.funds += total
        },
        REMOVE_QUANTITY_IN_PORTFOLIO(state, { key, quantity }) {
            state.portfolio[key].quantity -= quantity
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
                throw Error('Você não possui está quantidade para vender')
            } else if (quantity < 1) {
                throw Error('Você não pode vender uma quantidade nula ou negativa')
            }

            const total = quantity * item.price



        }
    },
    getters: {
        funds: state => state.funds,
        portfolio: state => state.portfolio,
        stock: state => state.stock,
    }
})

export default store