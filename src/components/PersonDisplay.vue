<!-- ./src/components/PersonDisplay.vue -->
<script setup>
// import store from "../../store";
// import { useStore } from "../../composables/store";
import { usePersonStore } from "../stores/person";

// const { person, YOB } = useStore();

const store = usePersonStore();

console.log({ store });
</script>
<template>
  <!-- <div>
    <h1>{{ store.count }}</h1>
  </div> -->
  <div>
    <h1>
      <span>Hi, I'm </span>
      <input
        :value="store.person.name"
        @change="(e) => store.changeName(e.target.value)"
      />
    </h1>
    <p>
      aged
      <input
        type="number"
        :value="store.person.age"
        @change="(e) => store.changeAge(e.target.value)"
      />
    </p>
    <p>born in {{ store.YOB }}</p>
  </div>
</template>
<style scoped>
input {
  border: none;
  background: none;
  color: inherit;
  font: inherit;
}
</style>
