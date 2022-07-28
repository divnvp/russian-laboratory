<template>
  <PageComponent :back-click="goToBack" :next-click="goToNext" page-number="1">
    <template #main>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Address</th>
            <th>ZIP code</th>
            <th>Contacts</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="user in $store.state.users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.username }}</td>
            <td>{{ getFullAddress(user.address) }}</td>
            <td>{{ user.address.zipcode }}</td>
            <td>{{ getContact(user) }}</td>
            <td>{{ user.website }}</td>
            <td>{{ getCompany(user.company) }}</td>
          </tr>
        </tbody>
      </table>
    </template>
  </PageComponent>
</template>

<script lang="ts">
import { Address, Company } from "@/types";
import store from "@/store";
import router from "@/router";
// Components
import PageComponent from "@/components/PageComponent.vue";

export default {
  name: "FirstPage",

  components: { PageComponent },

  mounted() {
    store.dispatch("getUsers");
  },

  methods: {
    getFullAddress(address: Address): string {
      return `${address.city}, ${address.street}, ${address.suite}
        (lat: ${address.geo.lat}, lng: ${address.geo.lng})
      `;
    },

    getContact(contact: { email: string; phone: string }): string {
      return `${contact.email} ${contact.phone}`;
    },

    getCompany(company: Company): string {
      return `${company.name}, ${company.bs}, "${company.catchPhrase}"`;
    },

    goToBack(): void {
      router.push("/");
    },

    goToNext(): void {
      router.push("/second");
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
