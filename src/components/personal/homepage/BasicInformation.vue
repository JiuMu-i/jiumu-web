<script setup>
import { ref } from 'vue'
import {
  NAvatar,
  NProgress
} from 'naive-ui'
import DefaultUser from '@/assets/svg/default-user.svg?component'

let vipExpPercentage = ref(60)
const progressColor = {
  stops: ['var(--jiumu-color-primary-light-1)', 'var(--jiumu-color-primary-light-2)']
}

</script>

<template>
  <div class="basicInformationBar">
    <div class="container">
      <!-- 头像 -->
      <n-avatar :size="80" class="personalAvatar">
        <DefaultUser />
      </n-avatar>
      <div class="informationBar">
        <!-- 昵称 & 会员等级标识 -->
        <div class="informationGroup">
          <span class="nickname">JiuMu谢歆玮</span>
        </div>
        <!-- 会员等级经验值展示 -->
        <div class="experienceGroup">
          <n-progress type="line" :height="12" :percentage="vipExpPercentage" indicator-placement="inside" :color="progressColor">
            OK
          </n-progress>
        </div>
        <span>Content Placeholder</span>
      </div>
    </div>
  </div>
</template>

<style src="@/assets/css/personal/homepage/basicInformation.css" scoped></style>
