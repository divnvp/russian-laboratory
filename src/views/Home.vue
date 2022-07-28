<template>
  <header>
    <HomeComponent />
  </header>
</template>

<script lang="ts">
import Vue from "vue";
//Component
import HomeComponent from "@/components/HomeComponent.vue";

export default Vue.extend({
  name: "Home",
  components: {
    HomeComponent,
  },
});
</script>
