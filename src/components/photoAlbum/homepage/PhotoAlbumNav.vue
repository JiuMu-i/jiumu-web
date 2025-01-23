<script setup>
import {
  NButton,
  NIcon
} from 'naive-ui'
import { CameraAdd24Filled } from '@vicons/fluent'

// 创建新相册
const handleCreateNewPA = () => {}
</script>

<template>
  <div class="photoAlbumNavBar">
    <div class="container">
      <n-button
        type="primary"
        size="large"
        icon-placement="right"
        @click="handleCreateNewPA"
        class="createNewPhotoAlbum">
        添加相册
        <template #icon>
          <n-icon>
            <CameraAdd24Filled />
          </n-icon>
        </template>
      </n-button>
    </div>
  </div>
</template>

<style src="@/assets/css/photoAlbum/homepage/photoAlbumNav.css" scoped></style>
