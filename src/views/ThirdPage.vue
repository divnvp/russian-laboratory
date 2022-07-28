<template>
  <div>
    <h1>3</h1>
    <button @click="$router.push('/')">Назад</button>

    <table>
      <thead>
        <tr>
          <td>User ID</td>
          <td>ID</td>
          <td>title</td>
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
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import store from "@/store";

export default {
  name: "SecondPage",

  computed: {
    ...mapGetters(["findUser"]),
  },

  mounted() {
    store.dispatch("getUsers");
    store.dispatch("getAlbums");
  },
};
</script>
