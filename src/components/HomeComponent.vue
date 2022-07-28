<template>
  <div>
    <button @click="$router.push('/first')">1</button>
    <button @click="$router.push('/second')">2</button>
    <button @click="$router.push('/third')">3</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HomeComponent",
});
</script>

<style scoped>
button {
  margin-right: 20px;

  width: 100px;
  height: 100px;

  cursor: pointer;

  border: none;

  font-size: 18px;
  font-weight: bold;
}

button:hover {
  background-color: gray;
  color: white;
}
</style>
