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
                quantity: 100,
                price: 15.00,
                name: 'Twitter'
            },
            google: {
                id: 1,
                quantity: 100,
                price: 15.00,
                name: 'Google'
            },
            bmw: {
                id: 1,
                quantity: 100,
                price: 15.00,
                name: 'BMW'
            },
            facebook: {
                id: 1,
                quantity: 100,
                price: 15.00,
                name: 'Facebook Inc.'
            },
        }
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        portfolio: (state) => state.portfolio,
        stock: (state) => state.stock,
    }
})

export default store