<script setup>
import GalleryNav from './gallery/GalleryNav.vue'
import GalleryContent from './gallery/GalleryContent.vue'

</script>

<template>
  <main class="galleryPage">
    <div class="pageContent">
      <GalleryNav />
      <GalleryContent />
    </div>
  </main>
</template>

<style src="@/assets/css/photoAlbum/galleryPage.css" scoped></style>
