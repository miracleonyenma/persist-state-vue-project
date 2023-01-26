// ./src/stores/person.js

import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const usePersonStore = defineStore(
  "person",
  () => {
    const person = ref({
      name: "John",
      age: 30,
    });

    // const person = ref(
    //   useLocalStorage("person", {
    //     name: "John",
    //     age: 30,
    //   })
    // );

    // if (localStorage.getItem("person")) {
    //   person.value = JSON.parse(localStorage.getItem("person"));
    // }

    const YOB = computed(() => {
      return new Date().getFullYear() - person.value.age;
    });

    const changeName = (newName) => {
      console.log({ newName });
      person.value.name = newName;
    };

    const changeAge = (newAge) => {
      person.value.age = newAge;
    };

    const increment = () => {
      person.value.age++;
    };

    const decrement = () => {
      person.value.age--;
    };

    // watch(
    //   person,
    //   (newPerson) => {
    //     console.log({ newPerson });
    //     localStorage.setItem("person", JSON.stringify(newPerson));
    //   },
    //   { deep: true }
    // );

    return {
      person,
      YOB,
      changeName,
      changeAge,
      increment,
      decrement,
    };
  },
  {
    persist: true,
  }
);
