import { createRouter, createWebHashHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'

// 使用 defineAsyncComponent 演示「异步/懒加载组件」知识点
const HomeView = defineAsyncComponent(() => import('../views/HomeView.vue'))
const ProductListView = defineAsyncComponent(() => import('../views/ProductListView.vue'))
const ProductDetailView = defineAsyncComponent(() => import('../views/ProductDetailView.vue'))
const CartView = defineAsyncComponent(() => import('../views/CartView.vue'))

const routes = [
  { path: '/', name: 'home', component: HomeView, meta: { title: '首页' } },
  { path: '/products', name: 'products', component: ProductListView, meta: { title: '全部商品' } },
  { path: '/products/:id', name: 'product-detail', component: ProductDetailView, meta: { title: '商品详情' } },
  { path: '/cart', name: 'cart', component: CartView, meta: { title: '购物车' } },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  // 使用 hash 模式：GitHub Pages 不支持 history 模式，hash 模式子路由刷新不 404
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

// 路由守卫：动态设置页面标题（生命周期/导航守卫知识点）
router.afterEach((to) => {
  document.title = `${to.meta.title || '商城'} · 鲜选商城`
})

export default router
