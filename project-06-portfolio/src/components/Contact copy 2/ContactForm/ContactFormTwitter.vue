<template>
  <v-card :loading="form.loading" height="100%" class="contact-form-twitter">
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
                single-line
                rows="1"
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
      <v-btn large @click="reset" color="secondary" text>Limpar</v-btn>
      <v-spacer></v-spacer>
      <v-btn v-on="on" large :href="twitter_link" target="_blank" color="primary">Enviar</v-btn>
    </v-card-actions>
    {{whatsapp_link}}
    <br />
    {{email_link}}
    <br />
    {{twitter_link}}
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import contact_cel from "@/assets/contact_cel.jpg";
export default {
  name: "contact-form-twitter",
  data() {
    return {
      contact_cel: {
        src: contact_cel,
        alt: ""
      }
    };
  },
  computed: {
    ...mapGetters(["form"]),
    addPadding() {
      return { "pa-4": this.$vuetify.breakpoint.lgAndUp };
    },
    text() {
      return `
Assunto:
${this.form.subject.value}

Nome: 
${this.form.name.value}

E-mail:
${this.form.email.value}

Seu texto:
${this.form.content.value}`;
    },
    encodeURI() {
      return encodeURIComponent(this.text);
    },
    twitter_link() {
      return `https://twitter.com/messages/compose?recipient_id=796843094503198720&text=${this.encodeURI}`;
    }
  },
  methods: {
    reset() {
      this.$refs.contact_form.reset();
    },
    resetValidation() {
      this.$refs.contact_form.resetValidation();
    },
    send() {
      // this.$store.dispatch(
      //   "validateAndSendContactView",
      //   this.$refs.contact_form
      // );
    }
  }
};
</script>

<style>
</style>