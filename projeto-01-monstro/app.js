const MONSTRO = {
    name: "Monstro",
    code: 0
}
const JOGADOR = {
    name: "Jogador",
    code: 1
}
const EMPATE = {
    name: "Empate",
    code: -1
}
const ATTACKED_ACTION = "atingiu"
const CURED_ACTION = "curou"
const MAX_LIFE = 100
const NO_WINNER = null

new Vue({
    el: "#app",
    data: {
        vencedor: NO_WINNER,
        jogadores: {
            jogador: {
                life: MAX_LIFE
            },
            monstro: {
                life: MAX_LIFE
            }
        },
        log: []
    },
    computed: {
        logNaoVazio() {
            return this.log.length > 0
        },
        logDesc() {
            return this.log.reverse()
        },
        finalMessage() {
            switch (this.vencedor) {
                case MONSTRO:
                    return `${MONSTRO.name} venceu!`
                case JOGADOR:
                    return `${JOGADOR.name} venceu!`
                default:
                    return "Empatou!"
            }
        },
        finalMessageClass() {
            if (this.vencedor == JOGADOR) {
                return 'success'
            } else if (this.vencedor == MONSTRO) {
                return 'error'
            }
        }
    },
    methods: {
        testEnd() {
            if (this.jogadores.monstro.life <= 0 && this.jogadores.jogador.life <= 0) {
                this.vencedor = EMPATE
            } else if (this.jogadores.monstro.life <= 0) {
                this.vencedor = JOGADOR
            } else if (this.jogadores.jogador.life <= 0) {
                this.vencedor = MONSTRO
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

            this.pushToLog({ name: JOGADOR.name, action: ATTACKED_ACTION, action_value: player_av }, { name: MONSTRO.name, action: ATTACKED_ACTION, action_value: monster_av })
        },

        ataque_especial() {
            let player_av = this.random10() + this.random5()
            let monster_av = this.random10()

            this.execAction(player_av, monster_av)

            this.pushToLog({ name: JOGADOR.name, action: ATTACKED_ACTION, action_value: player_av }, { name: MONSTRO.name, action: ATTACKED_ACTION, action_value: monster_av })
        },

        curar() {
            let player_av = this.random10() + this.random5()
            let monster_av = this.random10()

            this.execActionCurar(player_av, monster_av)

            this.pushToLog({ name: JOGADOR.name, action: CURED_ACTION, action_value: player_av }, { name: MONSTRO.name, action: ATTACKED_ACTION, action_value: monster_av })
        },
        reset() {
            this.log = []
            this.jogadores.monstro.life = MAX_LIFE
            this.jogadores.jogador.life = MAX_LIFE
            this.vencedor = NO_WINNER
        },
        desistir() {
            this.reset()
        },
        iniciarNovoJogo() {
            this.reset()
        }
    }
})