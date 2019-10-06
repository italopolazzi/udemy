export default {
    state: {
        user: {
            fname: 'Ítalo',
            lname: 'Polazzi'
        },
        global_messages: []
    },
    getters: {
        user: state => state.user,
        global_messages: state => state.global_messages
    },
    mutations: {
        ADD_GLOBAL_MESSAGE(state, config) {
            const default_config = {
                timeout: 6000,
                color: 'info',
                type: 'info',
            }
            state.global_messages.push({...default_config, ...config })
        }
    },
    actions: {
        addGlobalErrorMessage({ commit }, text) {
            commit('ADD_GLOBAL_MESSAGE', { type: 'error', color: 'error', text })
        },
        addGlobalSuccessMessage({ commit }, text) {
            commit('ADD_GLOBAL_MESSAGE', { type: 'success', color: 'success', text })
        }
    }
}