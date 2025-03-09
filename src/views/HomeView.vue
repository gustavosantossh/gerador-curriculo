<script setup lang="ts">

import Form from "../components/Form.vue";
import LoadPdf from "../components/LoadPdf.vue";


</script>

<template>
  <main class="h-screen max-w-screen lg:grid lg:grid-rows-2 lg:grid-cols-2">
    
    <section class="h-screen overflow-auto">
      <Form />
    </section>

    <section>
      <LoadPdf />
    </section>

  </main>
</template>

<style>
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: darkgray;
  /* Cor da barra */
  border-radius: 20px;
}

/* Fundo da scrollbar */
::-webkit-scrollbar-track {
  background: #cecece;
  /* Cor do fundo */
}
</style>