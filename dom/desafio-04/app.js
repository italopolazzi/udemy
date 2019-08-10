new Vue({
    el: '#desafio',
    data: {
        efeito: true,
        ex3: '',
        ex4_input1: null,
        ex4_input2: null,
        ex5: '',
        ex6_width: 0
    },
    computed: {
        ex1() {
            return { destaque: this.efeito, encolher: !this.efeito }
        },
        ex2() { return ['c1', { c2: this.efeito }] },
        ex4() { return [this.ex4_input1, { c3: this.ex4_input2 == 'true' }] },
        ex6() { return { width: `${this.ex6_width}%`, height: '100px', background: 'red' } }
    },
    watch: {
        ex6_width(newv, oldv) {
            if (this.ex6_width >= 100) {
                this.ex6_width = 0
            }
        }
    },
    methods: {
        iniciarEfeito() {
            setInterval(() => {
                this.efeito = !this.efeito
            }, 1000);
        },
        iniciarProgresso() {
            setInterval(() => {
                this.ex6_width++
            }, 40);
        }
    }
})