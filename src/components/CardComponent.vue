<template>
  <section class="card__main">
    <div class="card">
      <span class="card__id">{{ id }}</span>
      <span class="card__name">{{ name }}</span>

      <slot name="content" />
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "CardComponent",

  props: {
    id: Number,
    name: String,
  },
};
</script>

<style scoped>
.card {
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

.card__main {
  display: flex;
  flex-direction: column;
  flex: 1;

  justify-content: center;
  align-items: center;

  gap: 10px;
}

.card__id {
  font-weight: bold;
  font-size: 12px;

  color: gray;
}

.card__name {
  font-weight: bold;
  font-size: 14px;

  color: #16191d;
}
</style>
