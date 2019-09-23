<template>
  <div id="calculator">
    <Display />
    <Keyboard />
  </div>
</template>

<script>
import Display from "@/components/Display";
import Keyboard from "@/components/Keyboard";

export default {
  name: "calculator",
  components: {
    Keyboard,
    Display
  },
  data: () => ({
    //
  })
};
</script>