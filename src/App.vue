<template>
  <div>
    <RouterLink :to="{name: 'home'}">Home</RouterLink> |
    <RouterLink :to="{name: 'products'}">About</RouterLink>
    <RouterView></RouterView>
  </div>
</template>

<script lang="ts">
export default {
  name: "App",
};
</script>

<style scoped></style>
