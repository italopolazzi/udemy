new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado() {
            return `Valor ${this.valor != 37 ? 'Diferente' : 'Igual'}`
        }
    },
    watch: {
        resultado(newv, oldv) {
            setTimeout(() => {
                this.valor = 0
            }, 5000);
        }
    }
});