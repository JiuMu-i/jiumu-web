<script setup>
import HomeNav from '@/components/home/HomeNav.vue'

</script>

<template>
  <div class="home">
    <HomeNav />
    <router-view></router-view>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--jiumu-bg-color);
  transition: background-color var(--jiumu-transition-duration);
}
</style>
