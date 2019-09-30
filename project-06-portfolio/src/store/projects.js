import { firestore } from '@/plugins/firestore';

export default {
    state: {
        projects: [],
        project: null,
        errors: [],
        loading: false
    },
    getters: {
        projects: state => state.projects,
        project: state => state.project,
        loading: state => state.loading
    },
    mutations: {
        LOADING_ALTERNATE(state, loading = null) {
            state.loading = loading ? loading : !state.loading
        },
        SET_PROJECTS(state, snapshot) {
            if (snapshot.empty) {

                console.log("VAZIO!");

            } else {
                const temp = []
                snapshot.forEach(doc => temp.push({ id: doc.id, ...doc.data() }))
                state.projects = temp
            }
        },
        SET_PROJECT(state, { doc, id }) {
            if (!doc.exists) {
                console.log("VAZIO!");

            } else {
                state.project = { id, ...doc.data() }
            }
        },
        PUSH_ERROR(state, error) {
            state.errors.push(error)
        }
    },
    actions: {
        async getProjects({ commit }) {
            try {
                commit('LOADING_ALTERNATE', true)
                const snapshot = await firestore.collection('projects').get()
                commit('SET_PROJECTS', snapshot)
            } catch (error) {
                console.error(error);
                commit('PUSH_ERROR', error)
            } finally {
                commit('LOADING_ALTERNATE', false)
            }
        },
        async loadProjectDetails({ commit, state }, id) {
            const doc = await firestore.collection('projects').doc(id).get()
            commit('SET_PROJECT', { doc, id })
        }
    }
}