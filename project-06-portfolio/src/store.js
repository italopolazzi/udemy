import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import main from "@/store/main";
import projects from "@/store/projects";
import contact from "@/store/contact";

export default new Vuex.Store({
    modules: {
        main,
        projects,
        contact
    },
    state: {

    },
    mutations: {

    },
    actions: {

    }
})