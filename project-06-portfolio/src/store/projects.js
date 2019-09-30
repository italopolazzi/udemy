import { firestore } from '@/plugins/firestore';

export default {
    state: {
        projects: [],
        project: null,
        errors: []
    },
    getters: {
        projects: state => state.projects,
        loading: state => state.loading
    },
    mutations: {
        LOADING_ALTERNATE(state, loading = null) {
            state.loading = loading ? loading : !state.loading
        },
        SET_PROJECTS(state, snapshot) {
            if (snapshot.empty) {
                console.log("Sem documentos");

            } else {
                const temp = []
                snapshot.forEach(doc => temp.push({ id: doc.id, ...doc.data() }))
                console.log(temp);
                state.projects = temp
            }
        },
        SET_PROJECT(state, { doc, id }) {
            if (!doc.exists) {
                console.log("Documento inexistente");
            } else {
                state.project = { id, ...doc.data() }
                console.log(state.project);
            }
        },
        PUSH_ERROR(state, error) {
            state.errors.push(error)
        }
    },
    actions: {
        async getProjects({ commit }) {
            commit('LOADING_ALTERNATE', true)
            try {
                const snapshot = await firestore.collection('projects').get()
                console.log(snapshot);
                commit('SET_PROJECTS', snapshot)
                commit('LOADING_ALTERNATE', false)
            } catch (error) {
                console.error(error);
                commit('PUSH_ERROR', error)
            }
        },
        async loadProjectDetails({ commit, state }, id) {
            if (state.project.id != id) {
                const doc = await firestore.collection('projects').doc(id).get()
                commit('SET_PROJECT', { doc, id })
            }
        }
    }
}