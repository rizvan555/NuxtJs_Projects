<template>
  <div>
    <NuxtLayout>
      <header>
        <ul>
          <li class="flex justify-center gap-6 border-b-2 text-2xl">
            <NuxtLink to="/" :class="{ 'font-bold': isHome }">Home</NuxtLink>
            <NuxtLink to="/events" :class="{ 'font-bold': isEvent }"
              >Events</NuxtLink
            >
          </li>
        </ul>
      </header>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>
export default {
  computed: {
    isHome() {
      return this.$route.path === '/';
    },
    isEvent() {
      return this.$route.path === '/events';
    },
  },
};
</script>
