<script setup>
import { ref, watch } from 'vue'
import { useAppearanceStore } from '@/store/index'
import {
  NConfigProvider,
  NLoadingBarProvider,
  darkTheme
} from 'naive-ui'

let appearance = ref(darkTheme)
let themeClass = ref(null)

watch(() => useAppearanceStore().appearance, (newVal) => {
  if (newVal) {
    appearance.value = darkTheme
    themeClass.value = null
  } else {
    appearance.value = null
    themeClass.value = 'light'
  }
})
</script>

<template>
  <n-config-provider id="nConfigProvider" :class="themeClass" :theme="appearance" inline-theme-disabled>
    <n-loading-bar-provider>
      <router-view></router-view>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<style lang="scss" scoped>

</style>
