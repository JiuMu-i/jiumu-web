<script setup>
import {
  NImage
} from 'naive-ui'

const photoAlbumList = [
  {
    id: '1',
    name: '相册名称',
    src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
  },
  {
    id: '2',
    name: 'test2',
    src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
  },
  {
    id: '3',
    name: 'test3',
    src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
  },
  {
    id: '4',
    name: 'test4',
    src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
  },
  {
    id: '5',
    name: 'test5',
    src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
  }
]
</script>

<template>
  <div class="photoAlbumContentBar">
    <div class="container">
      <!-- 相册分类标题 -->
      <div class="photoAlbumTitleBar">
        <span class="photoAlbumTitle">默认</span>
      </div>
      <!-- 相册群组 -->
      <div class="photoAlbumListBar">
        <div
          v-for="item in photoAlbumList"
          :key="item.id">
          <n-image
            :src="item.src"
            object-fit="cover"
            width="100%"
            height="100%"
            preview-disabled
            class="coverImage"/>
          <div class="coverOptions">
            <span class="coverName">{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="@/assets/css/photoAlbum/homepage/photoAlbumContent.css" scoped></style>
