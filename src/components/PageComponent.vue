<template>
  <section>
    <header>
      <button @click="backClick">←</button>

      <h1>{{ pageNumber }}</h1>

      <button @click="nextClick">→</button>
    </header>

    <main>
      <slot name="main" />
    </main>
  </section>
</template>

<script lang="ts">
export default {
  name: "PageComponent",

  props: {
    pageNumber: { type: String, required: true },

    backClick: { type: Function, required: true },
    nextClick: { type: Function, required: true },
  },
};
</script>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

header button {
  border: none;
  width: 100px;
  height: 50px;

  font-size: 18px;

  cursor: pointer;
}

header button:hover {
  color: white;
  background-color: gray;
}
</style>
