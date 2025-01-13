import {
  useLoadingBar
} from 'naive-ui'

/**
 * 类名：加载条工具类
 * 目的：统一提取可能需要用到加载条的组件所涉及的方法
 * 范围：loadingStart() 和 loadingEnd()仅限于局部组件使用加载条时调用
 *      凡是通过路由跳转所调用的加载条，都由路由导航守卫来执行
 *      目前loadingError()方法由组件内创建调用
 */
export default class LoadingBarUtils {
  #loadingBar = useLoadingBar()

  constructor () {}

  // 开始加载
  loadingStart () {
    this.#loadingBar.start()
  }

  // 结束加载
  loadingEnd () {
    this.#loadingBar.finish()
  }

  // 加载报错
  loadingError () {
    this.#loadingBar.error()
  }
}