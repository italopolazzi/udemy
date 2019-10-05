<template>
  <v-card class="contact-form">
    <v-toolbar :color="config.color">
      <v-toolbar-title>Contact form</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text icon @click="$emit('closeDialog')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-card-text>
      <ContactFormSlot :config="config" />
    </v-card-text>
  </v-card>
</template>

<script>
function formatedFullString({ subject, name, email, content }) {
  return encodeURIComponent(
    `
  Assunto:
  ${subject.value}

  Nome: 
  ${name.value}

  E-mail:
  ${email.value}

  Seu texto:
  ${content.value}
  `
  );
}
function formatedContentString({ content }) {
  return encodeURIComponent(content.value);
}

import ContactFormSlot from "./ContactFormSlot";
export default {
  name: "contact-form",
  props: ["contact_form"],
  components: { ContactFormSlot },
  data() {
    return {
      forms: {
        twitter: {
          name: "Twitter",
          color: "cyan",
          handler() {
            const id = "796843094503198720";
            const text = formatedFullString(this.form);
            return `https://twitter.com/messages/compose?recipient_id=${id}&text=${text}`;
          }
        },
        email: {
          name: "E-Mail",
          color: "red",
          handler() {
            const cc = this.form.email.value;
            const subject = this.form.subject.value;
            const email = this.form.email.value;
            const body = formatedContentString(this.form);
            return `mailto:itpzzi@gmail.com?cc=${cc}&subject=${subject}&body=${body}`;
          }
        },
        whatsapp: {
          name: "WhatsApp",
          color: "green",
          handler() {
            const number = "5531992972820";
            const text = formatedFullString(this.form);
            return `https://wa.me/${number}/?text=${text}`;
          }
        }
      }
    };
  },
  computed: {
    config() {
      return this.forms[this.contact_form];
    }
  }
};
</script>

<style>
</style>