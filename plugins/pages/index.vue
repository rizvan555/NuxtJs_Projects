<template>
  <div>Main Page</div>
</template>

<script setup>
const { $sayHello } = useNuxtApp();
$sayHello('Rizvan');
</script>

<style lang="scss" scoped></style>
