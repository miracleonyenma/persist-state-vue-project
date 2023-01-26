// ./src/composables/store.js

import { computed, ref } from "vue";
import { useLocalStorage } from "@vueuse/core";

const person = ref(
  useLocalStorage("person-old", {
    name: "John",
    age: 30,
  })
);

const YOB = computed(() => {
  return new Date().getFullYear() - person.value.age;
});

// if (localStorage.getItem("name")) {
//   person.value.name = JSON.parse(localStorage.getItem("name"));
// }

// if (localStorage.getItem("person")) {
//   person.value = JSON.parse(localStorage.getItem("person"));
// }

// // watch for changes to person state
// watch(
//   person,
//   (newPerson) => {
//     localStorage.setItem("person", JSON.stringify(newPerson));
//   },
//   { deep: true }
// );

// watch(
//   () => person.value.name, // watch for changes to person.name // must use arrow function
//   (newName) => {
//     localStorage.setItem("name", JSON.stringify(newName));
//   },
//   {
//     deep: true,
//   }
// );

// by convention, composable function names start with "use"
export const useStore = () => {
  const increment = () => {
    person.value.age++;
  };

  const decrement = () => {
    person.value.age--;
  };

  return {
    person,
    YOB,
    increment,
    decrement,
  };
};
