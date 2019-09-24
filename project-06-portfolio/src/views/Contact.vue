<template>
  <div class="contact">
    <h1>This is an contact page</h1>
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from "@/components/Contact/ContactForm";
export default {
  name: "contact",
  components: {
    ContactForm
  }
};
</script>
