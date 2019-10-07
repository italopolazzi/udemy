<template>
  <v-card :loading="form.loading" height="100%" class="contact-form-slot mt-5">
    <v-list-item two-line>
      <v-list-item-title>
        <div class="overline"># Contact with</div>
        <div class="title">{{config.name}}</div>
      </v-list-item-title>
    </v-list-item>
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
      <v-btn large color="primary" @click="send">Enviar</v-btn>
    </v-card-actions>
    <!-- {{link}} -->
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import mão_celular_fundo_transparent from "@/assets/mão_celular_fundo_transparent.svg";
export default {
  name: "contact-form-slot",
  props: ["config"],
  data() {
    return {
      mão_celular_fundo_transparent: {
        src: mão_celular_fundo_transparent,
        alt: ""
      }
    };
  },
  computed: {
    ...mapGetters(["form"]),
    addPadding() {
      return { "pa-4": this.$vuetify.breakpoint.lgAndUp };
    },
    link() {
      return this.config.handler.call(this);
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
      try {
        if (!this.$refs.contact_form.validate())
          throw Error("Formulário invalido");
        window.open(this.link, "_blank");
      } catch (error) {
        // window.alert(error);
        this.$store.dispatch("addGlobalErrorMessage", error.toString());
      }
    }
  }
};
</script>

<style>
</style>