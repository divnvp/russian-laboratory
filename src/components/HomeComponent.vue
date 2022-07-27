<template>
  <div>
    <router-link to="/first">1</router-link>
    <router-link to="/second">2</router-link>
    <router-link to="/third">3</router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HomeComponent",
});
</script>
