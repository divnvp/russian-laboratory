<template>
  <div>
    <h1>1</h1>
    <button @click="$router.push('/')">Назад</button>

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
  </div>
</template>

<script lang="ts">
import store from "@/store";
import { Address, Company } from "@/types";

export default {
  name: "FirstPage",

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
  },
};
</script>
