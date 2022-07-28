<template>
  <CardComponent :id="post.id" :name="user">
    <template #content>
      <span>TITLE: {{ post.title }}</span>
      <span>BODY: {{ post.body }}</span>
    </template>
  </CardComponent>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Post } from "@/types";
import store from "@/store";
//Component
import CardComponent from "@/components/CardComponent.vue";

export default {
  name: "PostCard",

  components: { CardComponent },

  props: {
    post: { type: Object as PropType<Post>, required: true },
  },

  computed: {
    user(): string {
      return `User ID: ${this.post.userId} (${
        store.getters.findUser(this.post.userId).name
      })`;
    },
  },
};
</script>
