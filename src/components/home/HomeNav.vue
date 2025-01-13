<script setup>
import { ref } from 'vue'
import { useAppearanceStore } from '@/store/index'
import {
  NInput,
  NIcon,
  NDropdown,
  NAvatar,
  NSwitch
} from 'naive-ui'
import { Search32Regular } from '@vicons/fluent'
import { Sun, Moon, LogoGithub } from '@vicons/carbon'
import { ChevronDown, ExternalLink } from '@vicons/tabler'
import LogoDeer from '@/assets/svg/logo-deer.svg?component'
import DefaultUser from '@/assets/svg/default-user.svg?component'
import { HomeNavData } from '@/assets/data/home/index'
import DropDownUtils from '@/assets/js/dropDownUtils'

const appearanceStore = useAppearanceStore()
const appearanceActive = ref(appearanceStore.appearance)
const searchValue = ref(null)
const DropDownClass = new DropDownUtils()

// 文档下拉菜单选中事件
const handleDocSelect = (key) => {
  console.log(key)
}

// 游戏下拉菜单选中事件
const handleGameSelect = (key) => {
  console.log(key)
}

// 工具下拉菜单选中事件
const handleToolSelect = (key) => {
  console.log(key)
}

// 用户下拉菜单选中事件
const handleUserSelect = (key) => {
  DropDownClass.selectedToJump(key)
}

// 更改主题回调函数
function handleChangeAppearance(val) {
  appearanceStore.change(val)
}

// switch的轨道样式
const switchRailStyle = ({checked}) => {
  const railStyle = {}
  if (checked) {
    railStyle.background = '#303030'
  } else {
    railStyle.background = '#f0f2f5'
  }
  return railStyle
}

</script>

<template>
  <header class="homeNav">
    <div class="homeNavBar">
      <div class="container">
        <!-- LOGO -->
        <router-link to="/" class="homeNavBarTitle">
          <LogoDeer class="logo" />
          <span class="logoText">JiuMu</span>
        </router-link>
        <!-- 导航栏内容 -->
        <div class="content">
          <!-- 搜索栏 -->
          <div class="search homeNavBarSearch">
            <n-input v-model:value="searchValue" type="text" round placeholder="搜索" class="searchInput">
              <template #prefix>
                <n-icon :component="Search32Regular" />
              </template>
            </n-input>
          </div>
          <!-- 导航菜单 -->
          <nav class="homeNavBarMenu">
            <!-- 文档 -->
            <div class="navMenuItem homeNavBarMenuGroup navMenuText">
              <n-dropdown trigger="hover" :options="HomeNavData.documentDropdown_ARR" @select="handleDocSelect">
                <span class="dropdownButtonText">
                  文档
                  <n-icon :component="ChevronDown" />
                </span>
              </n-dropdown>
            </div>
            <!-- 游戏 -->
            <div class="navMenuItem homeNavBarMenuGroup navMenuText">
              <n-dropdown trigger="hover" :options="HomeNavData.gameDropdown_ARR" @select="handleGameSelect">
                <span class="dropdownButtonText">
                  游戏
                  <n-icon :component="ChevronDown" />
                </span>
              </n-dropdown>
            </div>
            <!-- 工具 -->
            <div class="navMenuItem homeNavBarMenuGroup navMenuText">
              <n-dropdown trigger="hover" :options="HomeNavData.toolDropdown_ARR" @select="handleToolSelect">
                <span class="dropdownButtonText">
                  工具
                  <n-icon :component="ChevronDown" />
                </span>
              </n-dropdown>
            </div>
            <!-- 相册 -->
            <a href="/" class="navMenuItem homeNavBarMenuLink navMenuText">相册</a>
            <!-- 聊天室 -->
            <a href="/" class="navMenuItem homeNavBarMenuLink navMenuText">
              聊天室
              <n-icon :component="ExternalLink" />
            </a>
            <!-- 主题切换 -->
            <div class="navMenuItem homeNavBarAppearance">
              <n-switch
                v-model:value="appearanceActive"
                @update:value="handleChangeAppearance"
                :rail-style="switchRailStyle"
                size="medium">
                <template #checked-icon>
                  <n-icon :component="Moon" />
                </template>
                <template #unchecked-icon>
                  <n-icon :component="Sun" />
                </template>
              </n-switch>
            </div>
          </nav>
          <!-- Avatar & Github -->
          <div class="homeNavBarSocial">
            <div class="navMenuItem homeNavBarMenuLink">
              <n-icon :component="LogoGithub" :size="28" class="socialLink"/>
            </div>
            <div class="navMenuItem homeNavBarMenuGroup">
              <n-dropdown trigger="hover" :options="HomeNavData.avatarDropdown_ARR" @select="handleUserSelect">
                <n-avatar round size="small" class="socialLink">
                  <DefaultUser />
                </n-avatar>
              </n-dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style src="@/assets/css/home/homeNav.css" scoped></style>
