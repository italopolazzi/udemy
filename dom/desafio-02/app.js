new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        saveTheValue(event) {
            this.valor = event.target.value
        },
        showAlert: () => alert('Exibindo alerta!')
    }
})