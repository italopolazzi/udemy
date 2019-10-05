<template>
  <v-card :loading="form.loading" height="100%" class="contact-form">
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

    <v-card>
      <v-img :src="contact_cel.src">
        <v-row class="align-center justify-center fill-height">
          <div>
            <v-subheader>Enviar com:</v-subheader>
            <v-tooltip bottom>
              <template v-slot:activator="{on}">
                <v-btn
                  v-on="on"
                  large
                  :href="whatsapp_link"
                  target="_blank"
                  color="green"
                  x-large
                  icon
                >
                  <v-icon>mdi-whatsapp</v-icon>
                </v-btn>
              </template>
              <span>Enviar com WhatsApp</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{on}">
                <v-btn v-on="on" large :href="email_link" target="_blank" color="red" x-large icon>
                  <v-icon>mdi-email</v-icon>
                </v-btn>
              </template>
              <span>Enviar com E-mail</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{on}">
                <v-btn
                  v-on="on"
                  large
                  :href="twitter_link"
                  target="_blank"
                  color="cyan"
                  x-large
                  icon
                >
                  <v-icon>mdi-twitter</v-icon>
                </v-btn>
              </template>
              <span>Enviar com Twitter</span>
            </v-tooltip>
          </div>
        </v-row>
      </v-img>
    </v-card>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn large @click="reset" color="secondary" text>Limpar</v-btn>
      <!-- <v-btn @click="resetValidation" text>Limpar validação</v-btn> -->
      <v-spacer></v-spacer>
      <!-- <v-btn @click="validate" color="secondary black--text">Validar</v-btn> -->
      <!-- <a :href="email_link">Send mail with subject</a> -->
      <v-subheader>Enviar com:</v-subheader>
      <v-tooltip bottom>
        <template v-slot:activator="{on}">
          <v-btn v-on="on" large :href="whatsapp_link" target="_blank" color="green" x-large icon>
            <v-icon>mdi-whatsapp</v-icon>
          </v-btn>
        </template>
        <span>Enviar com WhatsApp</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{on}">
          <v-btn v-on="on" large :href="email_link" target="_blank" color="red" x-large icon>
            <v-icon>mdi-email</v-icon>
          </v-btn>
        </template>
        <span>Enviar com E-mail</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{on}">
          <v-btn v-on="on" large :href="twitter_link" target="_blank" color="cyan" x-large icon>
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
        </template>
        <span>Enviar com Twitter</span>
      </v-tooltip>
      <v-spacer></v-spacer>
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
  name: "contact-form",
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
    encodeURI() {
      return encodeURIComponent(this.form.content.value);
    },
    twitter_link() {
      return `https://twitter.com/messages/compose?recipient_id=796843094503198720&text=${this.encodeURI}`;
    },
    whatsapp_link() {
      return `https://wa.me/5531992972820/?text=${this.encodeURI}`;
    },
    email_link() {
      return `mailto:itpzzi@gmail.com?subject=${this.encodeURI}`;
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