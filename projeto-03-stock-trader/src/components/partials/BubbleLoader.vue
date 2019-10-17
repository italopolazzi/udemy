<template>
  <Loader>
    <img :src="image.src" alt slot="image" />
    <TextLoader slot="text" />
  </Loader>
</template>

<script>
import gif from "@/assets/img/loader.gif";
import Loader from "@/components/components/Loader";
import TextLoader from "@/components/partials/TextLoader";

export default {
  components: { Loader, TextLoader },
  data() {
    return {
      image: {
        src: gif
      }
    };
  }
};
</script>

<style>
</style>