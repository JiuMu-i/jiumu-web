<script setup>
import { onErrorCaptured } from 'vue'
import BasicInformation from '@/components/personal/homepage/BasicInformation.vue'
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
    </div>
  </main>
</template>

<style src="@/assets/css/personal/personalHomepage.css" scoped></style>
