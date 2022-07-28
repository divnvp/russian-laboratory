<template>
  <PageComponent :back-click="goToBack" :next-click="goToNext" page-number="1">
    <template #main>
      <div v-for="user in $store.state.users" :key="user.id" class="card">
        <UserCard :user="user" />
      </div>
    </template>
  </PageComponent>
</template>

<script lang="ts">
import store from "@/store";
import router from "@/router";
// Components
import PageComponent from "@/components/PageComponent.vue";
import UserCard from "@/components/UserCard.vue";

export default {
  name: "UsersPage",

  components: { UserCard, PageComponent },

  mounted() {
    store.dispatch("getUsers");
  },

  methods: {
    goToBack(): void {
      router.push("/");
    },

    goToNext(): void {
      router.push("/posts");
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

.card {
  display: flex;
  flex-direction: column;
  flex: 1;

  justify-content: center;
  align-items: center;

  gap: 10px;
}
</style>
