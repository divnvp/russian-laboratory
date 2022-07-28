<template>
  <div>
    <h1>2</h1>
    <button @click="$router.push('/')">Назад</button>

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
  </div>
</template>

<script lang="ts">
import store from "@/store";
import { mapGetters } from "vuex";
import { User } from "@/types";

export default {
  name: "SecondPage",

  computed: {
    ...mapGetters(["findUser"]),
  },

  mounted() {
    store.dispatch("getUsers");
    store.dispatch("getPosts");
  },
};
</script>
