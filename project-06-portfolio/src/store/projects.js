import global from "@/data/global";

export default {
    state: {
        projects: global.projects,
        project: null
    },
    mutations: {
        SET_PROJECT(state, project) {
            state.project = project
        }
    },
    getters: {
        projects: state => state.projects,
        project: state => state.project,
    }
}