new Vue({
    el: "#desafio",
    data: {
        my_name: 'Ítalo Polazzi',
        my_age: 22,
        img_src: 'https://avatars2.githubusercontent.com/u/20938880?s=460&v=4'
    },
    methods: {
        triAge: age => age * 3,
        randomNumber: () => Math.random()
    }
})