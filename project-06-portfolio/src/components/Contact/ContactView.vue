<template>
  <div class="contact-view">
    <!-- 
    contact-->
    <v-container fluid>
      <v-layout row>
        <v-flex xs12 md6>
          <v-card height="100%">
            
              <v-img :src="contact_cellphone" height="100%"></v-img>
          </v-card>
        </v-flex>

        <v-flex xs12 md6>
          <v-card>
            <v-card-title>
              <div class="overline"># Contact me</div>
            </v-card-title>

            <v-card-text>
              <v-img
                :src="contact_hand"
              >
                <v-container fluid fill-height>
                  <v-layout align-center justify-center>
                    <v-flex xs2 md4 class="contact-view-buttons white" text-center>
                      <v-btn text x-large icon color="cyan" @click="contact_form = 'twitter'">
                        <v-icon>mdi-twitter</v-icon>
                      </v-btn>
                      <v-btn text x-large icon color="red" @click="contact_form = 'email'">
                        <v-icon>mdi-email</v-icon>
                      </v-btn>
                      <v-btn text x-large icon color="green" @click="contact_form = 'whatsapp'">
                        <v-icon>mdi-whatsapp</v-icon>
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-dialog v-model="dialog" fullscreen :persistent="false" :hide-overlay="false">
      <ContactForm @closeDialog="dialog = false" :contact_form="contact_form" />
    </v-dialog>
  </div>
</template>

<script>
import ContactForm from "./ContactForm/ContactForm";
import ContactFormSlot from "./ContactForm/ContactFormSlot";

import contact_cellphone from "@/assets/contact_cellphone.svg";
import contact_hand from "@/assets/contact_hand.svg";

export default {
  name: "contact-view",
  components: {
    ContactForm,
    ContactFormSlot
  },
  data() {
    return {
      contact_hand,
      contact_cellphone,
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