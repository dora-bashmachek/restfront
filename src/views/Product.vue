<template>
  <div>
    <h1>Product Page</h1>
    <p>{{ product.id }}</p>
    <p>{{ product.title }}</p>
    <p>{{ product.price }}</p>
    <!-- <p>{{ product.phonestag }}</p>
    <p>{{ product.mactag }}</p> -->
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Product',
  data() {
    return {
      product: {}
    }
  },
  async mounted() {
    const { data } = await axios.get('http://localhost:1337/api/products/' + this.$route.params.id);
    this.product = {
      id: data.data.id,
      ...data.data.attributes
    };
  },
};
</script>

<style scoped>
</style>