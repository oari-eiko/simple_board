import { createRouter, createWebHistory } from 'vue-router'

// import HomeView from '../views/HomeView.vue'   ← これでも読み込める

// DynamicImport で読み込む関数
function laodView(view) {
  return () => import(/* webpackChunkName: "about" */ `@/views/${view}.vue`)
}

// ルーティング設定
const routes = [
  {
    path: '/',
    name: 'home',
    component: laodView('HomeView')
  },
  {
    path: '/about',
    name: 'about',
    component: laodView('AboutView')
  }
]

// ルーティング作成
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
