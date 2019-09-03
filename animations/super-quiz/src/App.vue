<template>
  <div id="app">
    <h1>Super Quiz</h1>
    <button id="alternate-admin" @click="admin = !admin">Alterar modo usuário/admin</button>
    <transition name="flip" mode="out-in" appear>
      <component :is="component" />
    </transition>
  </div>
</template>

<script>
import Admin from "./components/Admin/Admin";
import User from "./components/User/User";

import questoes from "./util/questions";

export default {
  components: { Admin, User },
  methods: {},
  computed: {
    component() {
      return this.admin ? Admin : User;
    }
  },
  data() {
    return {
      admin: false
    };
  },
  created() {}
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  display: flex;
  flex-direction: column;
	align-items: center;
	position: relative;
}

button#alternate-admin{
	position: absolute;
	top: 1rem;
	left: 1rem;
}

#app h1,
#app h3 {
  font-weight: 200;
}
#app h1 {
  font-size: 4rem;
}
#app h3 {
  font-size: 2rem;
}

</style>
