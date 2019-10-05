<template>
  <div class="contact-view">
    <v-card>
      <v-card-title>
        <div class="overline"># Contact me</div>
      </v-card-title>

      <v-card-text>
        <v-img :src="contact_cel.src" :alt="contact_cel.alt">
          <v-container fluid fill-height>
            <v-layout align-center justify-center>
              <v-flex xs6 md4 class="contact-view-buttons white" text-center>
                <v-btn
                  text
                  x-large
                  icon
                  color="cyan"
                  @click="contact_form = 'ContactFormTwitter'"
                >
                  <v-icon>mdi-twitter</v-icon>
                </v-btn>
                <v-btn
                  text
                  x-large
                  icon
                  color="red"
                  @click="contact_form = 'ContactFormEmail'"
                >
                  <v-icon>mdi-email</v-icon>
                </v-btn>
                <v-btn
                  text
                  x-large
                  icon
                  color="green"
                  @click="contact_form = 'ContactFormWhatsApp'"
                >
                  <v-icon>mdi-whatsapp</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
      </v-card-text>
    </v-card>
    <v-dialog v-model="dialog" fullscreen :persistent="false" :hide-overlay="false">
      <ContactForm @closeDialog="dialog = false">
        <component :is="contact_form" />
      </ContactForm>
    </v-dialog>
  </div>
</template>

<script>
import ContactForm from "./ContactForm/ContactForm";
import ContactFormTwitter from "./ContactForm/ContactFormTwitter";
import ContactFormEmail from "./ContactForm/ContactFormEmail";
import ContactFormWhatsApp from "./ContactForm/ContactFormWhatsApp";

import contact_cel from "@/assets/contact_cel.jpg";

export default {
  name: "contact-view",
  components: {
    ContactForm,
    ContactFormTwitter,
    ContactFormEmail,
    ContactFormWhatsApp
  },
  data() {
    return {
      contact_cel: {
        src: contact_cel,
        alt: ""
      },
      contact_form: null
    };
  },
  computed: {
    dialog: {
      get() {
        return !!this.contact_form;
      },
      set(v) {
        this.contact_form = null;
      }
    }
  }
};
</script>

<style>
</style>