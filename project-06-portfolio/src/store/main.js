export default {
    state: {
        user: {
            fname: 'Ítalo',
            lname: 'Polazzi'
        }
    },
    getters: {
        user: state => state.user
    }
}