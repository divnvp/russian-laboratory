<template>
  <PageComponent :back-click="goToBack" :next-click="goToNext" page-number="2">
    <template #main>
      <table>
        <tbody>
          <tr v-for="post in $store.state.posts" :key="post.id">
            <td>
              <h4>
                UserID: {{ post.userId }} (
                {{ $store.getters.findUser(post.userId).name }})
              </h4>

              <span>ID: {{ post.id }}</span>
            </td>
            <td>
              <h5>TITLE: {{ post.title }}</h5>
              <span>BODY: {{ post.body }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </PageComponent>
</template>

<script lang="ts">
import store from "@/store";
import { mapGetters } from "vuex";
import PageComponent from "@/components/PageComponent.vue";
import router from "@/router";

export default {
  name: "PostsPage",
  components: { PageComponent },
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

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
