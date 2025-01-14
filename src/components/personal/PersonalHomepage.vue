<script setup>
import { onErrorCaptured } from 'vue'
import BasicInformation from './homepage/BasicInformation.vue'
import MaterialsList from './homepage/MaterialsList.vue'
import LoadingBarUtils from '@/assets/js/loadingBarUtils'

const LoadingBarClass = new LoadingBarUtils()

onErrorCaptured(() => {
  LoadingBarClass.loadingError()

  return false
})
</script>

<template>
  <main class="personalHomepage">
    <div class="pageContent">
      <BasicInformation />
      <MaterialsList />
    </div>
  </main>
</template>

<style src="@/assets/css/personal/personalHomepage.css" scoped></style>
