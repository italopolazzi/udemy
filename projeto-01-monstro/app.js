new Vue({
    el: "#app",
    data: {
        vencedor: null,
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
        },
        logDesc() {
            return this.log.reverse()
        }
    },
    methods: {
        testEnd() {
            if (this.jogadores.monstro.life <= 0 && this.jogadores.jogador.life <= 0) {
                this.vencedor = "Empatou"
            } else if (this.jogadores.monstro.life <= 0) {
                this.vencedor = "Jogador"
            } else if (this.jogadores.jogador.life <= 0) {
                this.vencedor = "Monstro"
            }
        },
        random10: () => Math.round(Math.random()) * 10,
        random5: () => Math.round(Math.random()) * 5,
        pushToLog(p1, p2) {
            this.log.push([
                `${p2.name} ${p2.action} ${p1.name} com ${p2.action_value}.`,
                `${p1.name} ${p1.action} ${p2.name} com ${p1.action_value}.`
            ])
        },
        execAction(player_av, monster_av, action = 'atacar') {
            if (action == 'atacar') {
                this.jogadores.monstro.life -= player_av
                this.jogadores.jogador.life -= monster_av
            } else if (action == 'curar') {
                this.jogadores.jogador.life += player_av
                this.jogadores.jogador.life -= monster_av
            }
            this.testEnd()
        },
        execActionCurar(player_av, monster_av) {
            this.execAction(player_av, monster_av, 'curar')
        },
        ataque() {
            let player_av = this.random10()
            let monster_av = this.random10() + this.random5()

            this.execAction(player_av, monster_av)

            this.pushToLog({ name: "Jogador", action: "atingiu", action_value: player_av }, { name: "Monstro", action: "atingiu", action_value: monster_av })
        },

        ataque_especial() {
            let player_av = this.random10() + this.random5()
            let monster_av = this.random10()

            this.execAction(player_av, monster_av)

            this.pushToLog({ name: "Jogador", action: "atingiu", action_value: player_av }, { name: "Monstro", action: "atingiu", action_value: monster_av })
        },

        curar() {
            let player_av = this.random10() + this.random5()
            let monster_av = this.random10()

            this.execActionCurar(player_av, monster_av)

            this.pushToLog({ name: "Jogador", action: "curou", action_value: player_av }, { name: "Monstro", action: "atingiu", action_value: monster_av })
        },
        reset() {
            this.log = []
            this.jogadores.monstro.life = 100
            this.jogadores.jogador.life = 100
            this.vencedor = null
        },
        desistir() {
            this.reset()
        },
        iniciarNovoJogo() {
            this.reset()
        }
    }
})