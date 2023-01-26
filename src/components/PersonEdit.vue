<!-- ./src/components/PersonEdit.vue -->

<script setup>
// import store from "../../store";
// import { useStore } from "../../composables/store";
import { usePersonStore } from "../stores/person";

// const { increment, decrement } = useStore();

const { increment, decrement } = usePersonStore();
</script>
<template>
  <!-- <div>
    <button @click="store.decrement">-</button>
    <button @click="store.increment">+</button>
  </div> -->

  <div>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>
<style scoped>
div:has(button) {
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 0;
}
</style>
