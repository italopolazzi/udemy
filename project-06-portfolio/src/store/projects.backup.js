import global from "@/data/global";

export default {
    state: {
        projects: global.projects,
        project: null,
        filtering_by_tags: ['freeCodeCamp'],
        /** 
         * TODO
         * Get all tags available in projects
         * */
        all_tags: ['html', 'responsive', 'css', 'freeCodeCamp']
    },
    mutations: {
        SET_PROJECT(state, project) {
            state.project = project
        },
        ADD_TAG_TO_FILTER(state, tag) {
            if (!state.filtering_by_tags.includes(tag)) {
                state.filtering_by_tags.push(tag)
            }
        },
        REMOVE_TAG_FROM_FILTER(state, tag) {
            state.filtering_by_tags.splice(state.filtering_by_tags.indexOf(tag), 1)
        },
        SET_TAGS_TO_FILTER(state, tags) {
            state.filtering_by_tags = tags
        }
    },
    getters: {
        projects: state => {
            return state.filtering_by_tags.length ?
                state.projects.filter(project => project.tags.some(tag => state.filtering_by_tags.includes(tag))) :
                state.projects

        },
        project: state => state.project,
        all_tags: state => state.all_tags,
        filtering_by_tags: state => state.filtering_by_tags
    }
}