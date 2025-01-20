<script setup>
import { ref } from 'vue'
import HomeNav from '@/components/home/HomeNav.vue'
import LoginModal from '@/components/modal/LoginModal.vue'

const isOpen = ref(false)

const handleLoginModal = (val) => {
  isOpen.value = val
}
</script>

<template>
  <div class="home">
    <LoginModal :show-status="isOpen" @open-login-modal="handleLoginModal"/>
    <HomeNav @open-login-modal="handleLoginModal"/>
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
