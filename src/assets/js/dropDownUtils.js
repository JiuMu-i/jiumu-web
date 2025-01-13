import { useRouter } from 'vue-router'

/**
 * 类名：下拉选项框工具类
 * 目的：旨在整合有关于下拉选项框的方法
 */
export default class DropDownUtils {
  #router = useRouter()

  constructor () {}

  // 下拉选中内容跳转
  selectedToJump (path) {
    this.#router.push(path)
  }
}