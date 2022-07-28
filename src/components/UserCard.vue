<template>
  <CardComponent :id="user.id" :name="user.name">
    <template #content>
      <span class="user-card__user-name">{{ user.username }}</span>
      <span>E-mail: {{ user.email }}</span>
      <span>Address: {{ getFullAddress(user.address) }}</span>
      <span>Contacts: {{ getContact(user) }}</span>
      <span>Website: {{ user.website }}</span>
      <span>Company: {{ getCompany(user.company) }}</span>
    </template>
  </CardComponent>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Address, Company, User } from "@/types";
//Component
import CardComponent from "@/components/CardComponent.vue";

export default {
  name: "UserCard",
  components: { CardComponent },
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
.user-card__user-name {
  font-weight: bold;
  font-size: 12px;

  color: #16191d;
}
</style>
