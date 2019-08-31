export default {
    computed: {
        frase_computada_espacoViraVirgula_global() {
            return this.frase.replace(/ /g, ",");
        },
    }
}