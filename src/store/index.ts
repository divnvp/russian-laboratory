import Vue from "vue";
import Vuex, { Commit, StoreOptions } from "vuex";

import { Album, Post, RootState, User } from "@/types";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0",
    baseUrl: "https://jsonplaceholder.typicode.com",

    users: [],
    posts: [],
    albums: [],
  },

  getters: {
    findUser: (state: RootState) => (userId: number) => {
      return state.users.find((user: User) => user.id === userId);
    },
  },

  mutations: {
    getUsers(state: RootState, payload: User[]): void {
      state.users = payload;
    },

    getPosts(state: RootState, payload: Post[]): void {
      state.posts = payload;
    },

    getAlbums(state: RootState, payload: Album[]): void {
      state.albums = payload;
    },
  },

  actions: {
    getUsers({ commit, state }: { commit: Commit; state: RootState }): void {
      fetch(state.baseUrl + "/users").then(async (response) => {
        if (response.ok) {
          const payload: User[] = await response.json();
          commit("getUsers", payload);
        } else {
          throw new Error(response.statusText);
        }
      });
    },

    getPosts({ commit, state }: { commit: Commit; state: RootState }): void {
      fetch(state.baseUrl + "/posts").then(async (response) => {
        if (response.ok) {
          const payload: Post[] = await response.json();
          commit("getPosts", payload);
        } else {
          throw new Error(response.statusText);
        }
      });
    },

    getAlbums({ commit, state }: { commit: Commit; state: RootState }): void {
      fetch(state.baseUrl + "/albums").then(async (response) => {
        if (response.ok) {
          const payload: Album[] = await response.json();
          commit("getAlbums", payload);
        } else {
          throw new Error(response.statusText);
        }
      });
    },
  },
};

export default new Vuex.Store<RootState>(store);
