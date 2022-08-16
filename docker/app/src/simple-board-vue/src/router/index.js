import { createRouter, createWebHistory } from 'vue-router'
import { store } from '@/store'

// DynamicImportで読み込む
function laodView(view) {
  return () => import(/* webpackChunkName: "about" */ `@/views/${view}.vue`)
}

// ルーティング設定
const routes = [
  {
    path: '/',
    name: 'top',
    component: laodView('TopView')
  },
  {
    path: '/board',
    name: 'board',
    component: laodView('BoardView'),
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'login',
    component: laodView('LoginView')
  },
  {
    path: '/signup',
    name: 'signup',
    component: laodView('SignupView')
  }
]

// ルーティング作成
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // 認証必要なパスかどうか
  if (to.matched.some((recode) => recode.meta.requiresAuth)) {
    // ログインチェック
    if (!store.getters.loggedIn) {
      next({name: 'login'});
    } else {
      next();
    }
    
  // 要らない場合はスルー 
  } else next();
});

export default router
