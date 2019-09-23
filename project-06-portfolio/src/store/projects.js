import global from "@/data/global";

export default {
    state: {
        projects: global.projects
    },
    getters: {
        projects: state => state.projects
    }
}