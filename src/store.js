import { reactive } from "vue";
const store = reactive({
  count: 0,
  increment() {
    this.count++;
    console.log({ count: this.count });
  },
  decrement() {
    this.count--;
    console.log({ count: this.count });
  },
});

export default store;
