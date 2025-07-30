import { useRouter } from 'vue-router'

/**
 * 类名：点击事件控制器
 * 目的：用于控制点击事件的逻辑运行细节
 */
export default class ClickController {
  #router = useRouter()

  constructor () {}

  // 点击事件跳转页面
  toJump (path) {
    this.#router.push(path)
  }
}