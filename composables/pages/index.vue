<template>
  <div>Main Page</div>
</template>

<script setup>
const { sayHello } = useUtils(); //we can get useUtils from composables here
sayHello();
</script>

<style lang="scss" scoped></style>
