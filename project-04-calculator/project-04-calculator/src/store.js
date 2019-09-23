import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        result: 0
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        result: state => state.result
    }
})