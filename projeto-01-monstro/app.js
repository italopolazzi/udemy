new Vue({
    el: "#app",
    data: {
        jogadores: {
            jogador: {
                life: 100
            },
            monstro: {
                life: 100
            }
        },
        log: [

        ]
    },
    computed: {
        logNaoVazio() {
            return this.log.length > 0
        }
    },
    methods: {

        random10: () => Math.random() * 10,
        random5: () => Math.random() * 5,
        pushToLog(p1, p2) {
            this.log.push([
                `${p2.name} ${p2.action} ${p1.name} com ${p2.attack}.`,
                `${p1.name} ${p1.action} ${p2.name} com ${p1.attack}.`
            ])
        },

        ataque() {
            let monster_attack = this.random10() + this.random5()
            let player_attack = this.random10()

            this.jogadores.jogador.life -= monster_attack
            this.jogadores.monstro.life -= player_attack

            this.pushToLog({ name: "Jogador", action: "atingiu", attack: player_attack }, { name: "Monstro", action: "atingiu", attack: monster_attack })
        },

        ataque_especial() {
            this.jogadores.monstro.life -= this.random10()
        },

        curar() {

        },

        desistir() {

        }
    }
})