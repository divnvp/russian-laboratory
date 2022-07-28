<template>
  <PageComponent :back-click="goToBack" :next-click="goToNext" page-number="3">
    <template #main>
      <div v-for="album in $store.state.albums" :key="album.id">
        <AlbumCard :album="album" />
      </div>
    </template>
  </PageComponent>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import router from "@/router";
import store from "@/store";
//Component
import PageComponent from "@/components/PageComponent.vue";
import AlbumCard from "@/components/AlbumCard.vue";

export default {
  name: "AlbumsPage",

  components: { AlbumCard, PageComponent },

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
