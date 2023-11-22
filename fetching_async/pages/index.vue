<script setup lang="ts">
import { transform } from '@vue/compiler-core';

const { data: products } = await useFetch('/api/products', {
  transform: (_products) => _products.data, //for delete "data" key from response
});

console.log(toRaw(products.value));
</script>

<template>
  <div>{{ products }}</div>
</template>
