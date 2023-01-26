<!-- ./src/App.vue -->
<script setup>
// import { reactive } from "vue";
import PersonDisplay from "./components/PersonDisplay.vue";
import PersonEdit from "./components/PersonEdit.vue";
// const store = reactive({
//   count: 0,
//   increment() {
//     this.count++;
//   },
// });
</script>
<template>
  <div>
    <!-- <h1>{{ store.count }}</h1>
    <button @click="store.increment">Increment</button> -->
    <PersonDisplay />
    <PersonEdit />
  </div>
</template>
