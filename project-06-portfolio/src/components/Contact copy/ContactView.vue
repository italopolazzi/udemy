<template>
  <div class="contact-view">
    <v-container fluid>
      <v-layout row wrap>
        <!-- <v-flex xs12 md4>
          <v-img
            :src="contact_img.src"
            :alt="contact_img.alt"
            max-height="500"
            cover
            :aspect-ratio="4/7"
          ></v-img>
        </v-flex>-->
        <v-flex xs12>
          <ContactForm />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ContactForm from "./ContactForm";
import { mapGetters } from "vuex";
import contact_img from "@/assets/contact.jpg";
export default {
  name: "contact-view",
  components: {
    ContactForm
  },
  data() {
    return {
      contact_img: {
        src: contact_img,
        alt: ""
      }
    };
  }
};
</script>

<style>
</style>