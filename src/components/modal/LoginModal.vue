<script setup>
import { ref, defineProps, computed } from 'vue'
import {
  NModalProvider,
  NModal,
  NInputGroup,
  NSelect,
  NInput,
  NButton,
  NIcon
} from 'naive-ui'
import { AngleDoubleLeft, AngleDoubleRight } from '@vicons/fa'
import LogoDeer from '@/assets/svg/logo-deer.svg?component'
import { LoginModalData } from '@/assets/data/modal/index'
import request from '@/utils/request/index'

const props = defineProps({
  showStatus: Boolean
})
const emit = defineEmits(['open-login-modal'])
const pageLocation = ref(true)
/**
 * Form表单相关变量
 */
const telAreaCodeVal = ref('+86')
const telephoneNumber = ref(null)
const userPassword = ref(null)
const userPasswordAgain = ref(null)

/**
 * 控制Modal是否开启的响应式变量
 * @comment 为获取父组件传递进来的props.showStatus赋值给loginModalShow,需要用到可读写的computed
 *          两个子组件“LoginModal”&“HomeNav”都通过向父组件“HomePage”emit一个“open-login-modal”
 *          方法并携带Boolean类型的标识符来控制Modal的开启状态
 *          避免子组件单独修改Modal的show变量而使props中的值与show的值状态不同步
 */
const loginModalShow = computed({
  get: () => props.showStatus,
  set: (newVal) => {
    emit('open-login-modal', newVal)
  }
})

// 关闭模态框 （暂时未启用）
const handleCloseModal = () => {
  loginModalShow.value = false
}

// 输入框限制函数 -- 仅允许输入数字
const handleTelNumInputRestrictions = (val) => !val || /^\d+$/.test(val)

// 表单登录处理
const handleFormLogin = () => {
  const res = request.post('/user/userLogin', {
    "area_code": "+86",
    "telephone_number": "17611107902",
    "password": "Zhaosii5279369"
  })
  console.log(res)
}

// 跳转注册页
const handleJumpToRegister = () => {
  pageLocation.value = false
}

// 返回登录页
const handleBackLogin = () => {
  pageLocation.value = true
}
</script>

<template>
  <n-modal-provider>
    <n-modal v-model:show="loginModalShow" transform-origin="center" :auto-focus="false">
      <template #default>
        <div class="modalPage">
          <div class="content">
            <div v-if="pageLocation" class="container">
              <!-- 登录页 -->
              <div class="loginBar">
                <!-- Modal Title -->
                <div class="modalTitle">
                  <LogoDeer class="logo" />
                  <span class="logoText">JiuMu</span>
                </div>
                <!-- Form Telephone Number -->
                <div class="formItems">
                  <n-input-group>
                    <n-select
                      v-model:value="telAreaCodeVal"
                      :options="LoginModalData.telephoneAreaCode_ARR"
                      class="telephoneAreaCode" />
                    <n-input
                      v-model:value="telephoneNumber"
                      type="text"
                      placeholder="输入手机号"
                      :allow-input="handleTelNumInputRestrictions" />
                  </n-input-group>
                </div>
                <!-- Form Password -->
                <div class="formItems">
                  <n-input
                    v-model:value="userPassword"
                    type="password"
                    placeholder="输入密码"
                    show-password-on="click" />
                </div>
                <!-- Form Login Button -->
                <div class="formItems">
                  <n-button @click="handleFormLogin" class="loginButton">登录</n-button>
                </div>
              </div>
              <!-- 跳转注册页 -->
              <div class="switchBar registerJump">
                <n-button text icon-placement="right" @click="handleJumpToRegister" class="registerLink">
                  注册新账号
                  <template #icon>
                    <n-icon>
                      <AngleDoubleRight />
                    </n-icon>
                  </template>
                </n-button>
              </div>
            </div>
            <div v-else class="container">
              <!-- 注册页 -->
              <div class="registerBar">
                <!-- Modal Title -->
                <div class="modalTitle">
                  <LogoDeer class="logo" />
                  <span class="logoText">JiuMu</span>
                </div>
                <!-- Form Telephone Number -->
                <div class="formItems">
                  <n-input-group>
                    <n-select
                      v-model:value="telAreaCodeVal"
                      :options="LoginModalData.telephoneAreaCode_ARR"
                      class="telephoneAreaCode" />
                    <n-input
                      v-model:value="telephoneNumber"
                      type="text"
                      placeholder="填写手机号"
                      :allow-input="handleTelNumInputRestrictions" />
                  </n-input-group>
                </div>
                <!-- Form Password -->
                <div class="formItems">
                  <n-input
                    v-model:value="userPassword"
                    type="password"
                    placeholder="设置密码"
                    show-password-on="click" />
                </div>
                <!-- Form Password Again -->
                <div class="formItems">
                  <n-input
                    v-model:value="userPasswordAgain"
                    type="password"
                    placeholder="再次确认密码"
                    show-password-on="click" />
                </div>
                <div class="formItems">
                  <n-button class="registerButton">注册</n-button>
                </div>
              </div>
              <!-- 返回登录页 -->
              <div class="switchBar loginBack">
                <n-button text @click="handleBackLogin" class="loginLink">
                  <template #icon>
                    <n-icon>
                      <AngleDoubleLeft />
                    </n-icon>
                  </template>
                  返回
                </n-button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </n-modal>
  </n-modal-provider>
</template>

<style src="@/assets/css/modal/loginModal.css" scoped></style>
