<script setup lang="ts">
const nuxtApp = useNuxtApp();

console.log(nuxtApp);
</script>

<template>
  <div>My_Event_Id: {{ $route.params.id }}</div>
</template>
