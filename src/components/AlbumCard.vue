<template>
  <CardComponent :id="album.id" :name="user">
    <template #content>
      <span>TITLE: {{ album.title }}</span>
    </template>
  </CardComponent>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Album } from "@/types";
import store from "@/store";
//Component
import CardComponent from "@/components/CardComponent.vue";
export default {
  name: "AlbumCard",

  components: { CardComponent },

  props: {
    album: {
      type: Object as PropType<Album>,
      required: true,
    },
  },

  computed: {
    user(): string {
      return `User ID: ${this.album.userId} (${
        store.getters.findUser(this.album.userId).name
      })`;
    },
  },
};
</script>
