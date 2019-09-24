<template>
  <div class="contact-form">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 lg4>
          <v-img :src="img.src" :alt="img.alt" max-height="500" cover :aspect-ratio="4/7"></v-img>
        </v-flex>
        <v-flex xs12 lg8>
          <v-card :loading="form.loading" height="100%" >
            <v-card-title>
              <div class="overline mb-4"># Contact me</div>
            </v-card-title>
            <v-card-text>
              <v-form ref="contact_form" v-model.trim.lazy="form.valid" lazy-validation>
                <v-container fluid>
                  <v-layout row wrap>
                    <!-- INPUT ini -->
                    <v-flex xs12 lg6 :class="addPadding">
                      <v-text-field
                        v-model.trim.lazy="form.name.value"
                        :rules="form.name.rules"
                        :label="form.name.label"
                        required
                      ></v-text-field>
                    </v-flex>
                    <!-- INPUT ini -->
                    <v-flex xs12 lg6 :class="addPadding">
                      <v-text-field
                        v-model="form.email.value"
                        :rules="form.email.rules"
                        :label="form.email.label"
                        required
                      ></v-text-field>
                    </v-flex>
                    <!-- INPUT ini -->
                    <v-flex xs12 lg6 :class="addPadding">
                      <v-text-field
                        v-model.trim.lazy="form.subject.value"
                        :rules="form.subject.rules"
                        :label="form.subject.label"
                        required
                      ></v-text-field>
                    </v-flex>
                    <!-- INPUT ini -->
                    <v-flex xs12 lg6 :class="addPadding">
                      <v-textarea
                        auto-grow
                        clearable
                        counter
                        v-model.trim.lazy="form.content.value"
                        :label="form.content.label"
                        :rules="form.content.rules"
                        required
                      ></v-textarea>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn large @click="reset" text>Limpar</v-btn>
              <!-- <v-btn @click="resetValidation" text>Limpar validação</v-btn> -->
              <v-spacer></v-spacer>
              <v-btn @click="validate" text>Validar</v-btn>
              <v-btn large @click="send" color="primary">Enviar</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
const basic_rules = [
  v => !!v || "Este campo precisa ser preenchido",
  v => v.length >= 5 || "No mínimo 5 caracteres"
];
import contact_img from "@/assets/contact.jpg";
export default {
  name: "contact-form",
  data() {
    return {
      img: {
        src: contact_img,
        alt: ""
      },
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
    };
  },
  computed: {
    addPadding() {
      return { "pa-4": this.$vuetify.breakpoint.lgAndUp };
    }
  },
  methods: {
    reset() {
      this.$refs.contact_form.reset();
    },
    resetValidation() {
      this.$refs.contact_form.resetValidation();
    },
    validate() {
      this.form.loading = true;
      setTimeout(() => {
        if (this.$refs.contact_form.validate()) {
          console.log("Valido");
        } else {
          console.log("Invalido");
        }
        this.form.loading = false;
      }, 5000);
    },
    send() {
      this.validate();
    }
  }
};
</script>

<style>
</style>