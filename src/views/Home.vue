<template>
  <div>
    <h1>Home</h1>
    <select name="sort" v-model="sort">
      <option value="updatedAt:desc">Newest</option>
      <option value="price:asc">Price: Ascending</option>
      <option value="price:desc">Price: Descending</option>
    </select>
  </div>
</template>

<script>
import qs from "qs";
import { ref } from 'vue';
export default {
  name: "Home",
  setup() {
   const sort = ref("updatedAt:desc");
   return {
     sort,
   }
  },
};
</script>

<style scoped>
</style>