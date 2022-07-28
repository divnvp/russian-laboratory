<template>
  <section class="user-card">
    <span class="user-card__id">{{ user.id }}</span>
    <span class="user-card__name">{{ user.name }}</span>
    <span class="user-card__user-name">{{ user.username }}</span>
    <span>E-mail: {{ user.email }}</span>
    <span>Address: {{ getFullAddress(user.address) }}</span>
    <span>Contacts: {{ getContact(user) }}</span>
    <span>Website: {{ user.website }}</span>
    <span>Company: {{ getCompany(user.company) }}</span>
  </section>
</template>

<script lang="ts">
import { Address, Company, User } from "@/types";
import { PropType } from "vue";

export default {
  name: "UserCard",

  props: {
    user: { type: Object as PropType<User>, required: true },
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

<style scoped>
.user-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  margin: 10px;
  padding: 10px;

  width: 800px;

  background-color: white;
  border-radius: 10px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
}

.user-card__id {
  font-weight: bold;
  font-size: 12px;

  color: gray;
}

.user-card__name {
  font-weight: bold;
  font-size: 18px;

  color: #16191d;
}

.user-card__user-name {
  font-weight: bold;
  font-size: 12px;

  color: #16191d;
}
</style>
