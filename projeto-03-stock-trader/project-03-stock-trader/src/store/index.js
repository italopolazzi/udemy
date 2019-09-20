import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const randomNumber = limit => Math.floor(Math.random() * limit)
Array.prototype.sample = function() { return this[randomNumber(this.length)] }

const store = new Vuex.Store({
    state: {
        global: {
            messages: []
        },
        funds: 10000,
        loading: true,
        portfolio: {
            twitter: {
                id: 1,
                quantity: 12,
                name: 'Twitter'
            }
        },
        price_refs: {
            twitter: 120.00,
            google: 1300.00,
            bmw: 3000.00,
            facebook: 740.00
        },
        stock: {
            twitter: {
                id: 1,
                quantity: 5,
                name: 'Twitter'
            },
            google: {
                id: 2,
                quantity: 5,
                name: 'Google'
            },
            bmw: {
                id: 3,
                quantity: 5,
                name: 'BMW'
            },
            facebook: {
                id: 4,
                quantity: 5,
                name: 'Facebook Inc.'
            },
        }
    },
    mutations: {
        BUY_QUANTITY(state, { key, quantity }) {
            state.portfolio[key].quantity += quantity
            state.stock[key].quantity -= quantity
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
        SELL_QUANTITY(state, { key, quantity }) {
            state.stock[key].quantity += quantity
            state.portfolio[key].quantity -= quantity
        },
        ADD_FUNDS(state, total) {
            state.funds += total
        },
        REMOVE_QUANTITY_IN_PORTFOLIO(state, { key, quantity }) {
            state.portfolio[key].quantity -= quantity
        },
        FLOAT_PRICE_REF(state, key) {
            const random_operator = [1, -1].sample()
            const _10perc_price_ref = 0.1 * state.price_refs[key]

            const random_number = randomNumber(_10perc_price_ref)

            const total = random_operator * random_number
            state.price_refs[key] += total
        },
        THROW_ERROR(state, text) {
            state.global.messages.push({ type: 'error', text })
            throw Error(text)
        },
        SET_LOADING(state, bool) {
            setTimeout(() => {
                state.loading = bool
            }, 5000);
        }
    },
    actions: {
        buyItem({ commit, state }, { item, quantity }) {
            const key = item.key
            const total = quantity * state.price_refs[key]

            if (state.stock[key] < quantity) {
                commit('THROW_ERROR', 'Estoque insuficiente!')
            } else if (state.funds < total) {
                commit('THROW_ERROR', 'Saldo insuficiente!')
            }

            commit('REMOVE_FUNDS', total)
            commit('REMOVE_QUANTITY_OF_STOCK', { key, quantity })

            if (!state.portfolio.hasOwnProperty(key)) {
                commit('ADD_TO_PORTFOLIO', item)
            }
            commit('BUY_QUANTITY', { key, quantity })
        },
        sellItem({ commit, state }, { item, quantity }) {
            const key = item.key

            if (state.portfolio[key].quantity < quantity) {
                commit('THROW_ERROR', 'Você não possui está quantidade para vender')
            } else if (quantity < 1) {
                commit('THROW_ERROR', 'Você não pode vender uma quantidade nula ou negativa')
            } else if (!state.portfolio.hasOwnProperty(key)) {
                commit('THROW_ERROR', 'Você não possui este item para vender')
            }

            const total = quantity * state.price_refs[key]

            commit('SELL_QUANTITY', { key, quantity })
            commit('ADD_FUNDS', total)
        },
        endDay({ state, commit }) {
            for (let key in state.price_refs) {
                commit('FLOAT_PRICE_REF', key)
            }
        },
        loadAll({ state, commit }, vm) {
            commit('SET_LOADING', true)
            vm.$firebase('stock-trader.json')
                .then(res =>
                    state = res.data['-Lowh4zsRq4xON3JTpDw']
                )
                .catch(err => console.error(err))
                .finally(() => commit('SET_LOADING', false))
        },
        saveAll({ state, commit }, vm) {
            commit('SET_LOADING', true)
            vm.$firebase.put('stock-trader.json', { '-Lowh4zsRq4xON3JTpDw': state })
                .then(res => console.log(res))
                .catch(err => console.error(err))
                .finally(() => commit('SET_LOADING', false))
        }
    },
    getters: {
        funds: state => state.funds,
        portfolio: state => state.portfolio,
        stock: state => state.stock,
        global_messages: state => state.global.messages,
        price_ref: state => key => state.price_refs[key],
        is_loading: state => state.loading
    }
})

export default store