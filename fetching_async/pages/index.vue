<script setup lang="ts">
// const { data: products } = await useFetch('/api/products', {
//   transform: (_products) => _products.data, //for delete "data" key from response
// });

const { pending, data: products } = await useLazyFetch('/api/products', {
  transform: (_products: any) => _products.data, //for delete "data" key from response
});
console.log(products);
</script>

<template>
  <div v-if="pending">Loading.....</div>
  <div v-else>
    <div v-for="product in products">
      {{ product.name }}
    </div>
  </div>
</template>
