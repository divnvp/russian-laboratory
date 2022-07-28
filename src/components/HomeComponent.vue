<template>
  <div style="font-size: 18px">
    <router-link to="/first" style="margin-right: 10px"> 1 </router-link>
    <router-link to="/second" style="margin-right: 10px">2</router-link>
    <router-link to="/third">3</router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HomeComponent",
});
</script>
