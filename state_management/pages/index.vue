<script setup lang="ts">
const counter = useCounter();
</script>

<template>
  <div>
    <div>
      Counter: {{ counter }}
      <button @click="counter++">+</button>
      <button @click="counter--">-</button>
    </div>
    <Counter />
  </div>
</template>
