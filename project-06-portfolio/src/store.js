import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import main from "@/store/main";
import projects from "@/store/projects";

export default new Vuex.Store({
    modules: {
        main,
        projects
    },
    state: {

    },
    mutations: {

    },
    actions: {

    }
})