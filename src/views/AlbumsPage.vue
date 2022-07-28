<template>
  <PageComponent :back-click="goToBack" :next-click="goToNext" page-number="3">
    <template #main>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>title</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="album in $store.state.albums" :key="album.id">
            <td>
              {{ album.userId }} ({{
                $store.getters.findUser(album.userId).name
              }})
            </td>
            <td>{{ album.id }}</td>
            <td>{{ album.title }}</td>
          </tr>
        </tbody>
      </table>
    </template>
  </PageComponent>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import store from "@/store";
import PageComponent from "@/components/PageComponent.vue";
import router from "@/router";

export default {
  name: "AlbumsPage",

  components: { PageComponent },

  computed: {
    ...mapGetters(["findUser"]),
  },

  mounted() {
    store.dispatch("getUsers");
    store.dispatch("getAlbums");
  },

  methods: {
    goToBack(): void {
      router.push("/posts");
    },

    goToNext(): void {
      router.push("/");
    },
  },
};
</script>
