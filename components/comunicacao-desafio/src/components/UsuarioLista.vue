<template>
  <div class="usuario-lista">
    <table>
      <thead>
        <tr>
          <th>#ID</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(usuario, index) in usuarios"
          :key="index"
          @click="emitirUsuarioSelecionado(index)"
        >
          <td>{{ usuario.id }}</td>
          <td>{{ usuario.nome }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: { usuarios: Array },
  methods: {
    emitirUsuarioSelecionado(index) {
      this.$emit("usuarioSelecionado", this.usuarios[index]);
    }
  }
};
</script>

<style scoped>
.usuario-lista {
  flex: 1;
  display: flex;
}

table {
  flex: 1;
  border-spacing: 0px;
  border-collapse: separate;
  border-top: 1px solid #ccc;
}

th,
td {
  padding: 15px;
  border-bottom: 1px solid #ccc;
}

tbody tr:hover {
  background: rgba(0, 0, 0, 0.1);
}

tbody tr {
  cursor: pointer;
}
</style>
