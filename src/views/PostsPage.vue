<template>
  <PageComponent :back-click="goToBack" :next-click="goToNext" page-number="2">
    <template #main>
      <div v-for="post in $store.state.posts" :key="post.id">
        <PostCard :post="post" />
      </div>
    </template>
  </PageComponent>
</template>

<script lang="ts">
import store from "@/store";
import router from "@/router";
import { mapGetters } from "vuex";
//Components
import PageComponent from "@/components/PageComponent.vue";
import PostCard from "@/components/PostCard.vue";

export default {
  name: "PostsPage",

  components: { PostCard, PageComponent },

  computed: {
    ...mapGetters(["findUser"]),
  },

  mounted() {
    store.dispatch("getUsers");
    store.dispatch("getPosts");
  },

  methods: {
    goToBack(): void {
      router.push("/users");
    },

    goToNext(): void {
      router.push("/albums");
    },
  },
};
</script>
