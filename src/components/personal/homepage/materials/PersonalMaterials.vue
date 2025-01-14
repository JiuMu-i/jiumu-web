<script setup>
import GButtonStyle from '@/components/general/button/GButtonStyle.vue'

</script>

<template>
  <div class="personalMaterials">
    <div class="container">
      <!-- 基础资料栏 -->
      <div class="basicMaterialsBar">
        <!-- 关注组 -->
        <div class="followCloselyGroup">
          <div class="followItem followTo">
            <span>关注了</span>
            <span>0</span>
          </div>
          <div class="dividerContainer">
            <div class="divider"></div>
          </div>
          <div class="followItem followFrom">
            <span>关注者</span>
            <span>0</span>
          </div>
        </div>
        <!-- 操作组 -->
        <div class="operateGroup">
          <!-- 签到 -->
          <div class="operateItem signIn">
            <g-button-style>签到</g-button-style>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="@/assets/css/personal/homepage/materials/personalMaterials.css" scoped></style>
