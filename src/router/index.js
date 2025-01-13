import { createMemoryHistory, createRouter } from 'vue-router'
import { createDiscreteApi } from 'naive-ui'
import Home from '@/views/HomePage.vue'

const { loadingBar } = createDiscreteApi(['loadingBar'])

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'HomeContent',
        component: () => import('@/components/home/HomeContent.vue')
      },
      {
        path: '/personalHomepage',
        name: 'PersonalHomepage',
        component: () => import('@/components/personal/PersonalHomepage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

router.beforeEach(() => {
  loadingBar.start()
})

router.afterEach(() => {
  loadingBar.finish()
})

export default router