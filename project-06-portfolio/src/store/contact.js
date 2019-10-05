import { functions } from '@/plugins/firestore'

const basic_rules = [
    v => !!v || "Este campo precisa ser preenchido",
    v => v.length >= 5 || "No mínimo 5 caracteres"
];

export default {
    state: {
        form: {
            valid: false,
            loading: false,
            name: {
                label: "Nome",
                value: "",
                rules: [...basic_rules]
            },
            email: {
                label: "E-mail",
                value: "",
                rules: [
                    ...basic_rules,
                    v => /.+@.+\..+/.test(v) || "E-mail precisa ser válido"
                ]
            },
            subject: {
                label: "Assunto",
                value: "",
                rules: [...basic_rules]
            },
            content: {
                label: "Seu texto",
                value: "",
                rules: [
                    ...basic_rules,
                    v =>
                    v.length <= 5000 || "O conteúdo está limitado a 5000 caracteres"
                ]
            }
        }
    },
    getters: {
        form: state => state.form
    },
    mutations: {
        LOADING_ALTERNATE(state, loading = null) {
            state.form.loading = loading ? loading : !state.form.loading
        }
    },
    actions: {
        async validateAndSendContactView({ commit, state }, form) {
            try {
                commit("LOADING_ALTERNATE", true)
                if (!form.validate()) throw Error('Formulário invalido')

                const data = {
                    name: state.form.name.value,
                    sender: state.form.email.value,
                    subject: state.form.subject.value,
                    content: state.form.content.value
                }
                const sendMail = functions.httpsCallable('sendMail')
                const result = await sendMail(data)
                console.log(result);

            } catch (error) {
                console.error(error);
            } finally {
                commit("LOADING_ALTERNATE", false)
            }
        }
    }
}