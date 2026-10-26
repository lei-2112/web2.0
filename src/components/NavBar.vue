<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '../stores/cart.js'
import CartBadge from './CartBadge.vue'

// 响应式状态（ref 知识点）
const keyword = ref('')
const route = useRoute()
const cart = useCartStore()

// 事件处理（v-on / @submit 知识点）
function onSearch() {
  const kw = keyword.value.trim()
  if (kw) {
    window.location.href = `/products?keyword=${encodeURIComponent(kw)}`
  }
}
</script>

<template>
  <header class="navbar">
    <div class="container navbar-inner">
      <router-link to="/" class="logo">
        <span class="logo-mark">鲜</span>
        <span class="logo-text">鲜选商城</span>
      </router-link>

      <nav class="nav-links">
        <router-link to="/" class="nav-link" :class="{ active: route.path === '/' }">首页</router-link>
        <router-link to="/products" class="nav-link" :class="{ active: route.path === '/products' }">全部商品</router-link>
      </nav>

      <!-- 表单绑定（v-model 知识点） -->
      <form class="search" @submit.prevent="onSearch">
        <input v-model="keyword" type="text" placeholder="搜索商品…" />
        <button type="submit">🔍</button>
      </form>

      <router-link to="/cart" class="cart-link">
        <CartBadge />
      </router-link>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
  border-bottom: 1px solid var(--border);
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.04);
}
.navbar-inner {
  display: flex;
  align-items: center;
  gap: 24px;
  height: 62px;
}
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 800;
  font-size: 20px;
}
.logo-mark {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  background: var(--primary);
  color: #fff;
  border-radius: 9px;
}
.logo-text {
  color: var(--text);
}
.nav-links {
  display: flex;
  gap: 6px;
}
.nav-link {
  padding: 8px 14px;
  border-radius: 8px;
  font-weight: 600;
  color: var(--text-muted);
  transition: all 0.2s;
}
.nav-link:hover {
  color: var(--primary);
  background: var(--primary-light);
}
.nav-link.active {
  color: var(--primary);
  background: var(--primary-light);
}
.search {
  flex: 1;
  max-width: 360px;
  margin-left: auto;
  display: flex;
  border: 1px solid var(--border);
  border-radius: 30px;
  overflow: hidden;
  background: #fff;
}
.search input {
  flex: 1;
  border: none;
  outline: none;
  padding: 9px 16px;
  font-size: 14px;
}
.search button {
  width: 42px;
  background: var(--primary);
  color: #fff;
  font-size: 15px;
}
.cart-link {
  display: flex;
  align-items: center;
  margin-left: 4px;
}
@media (max-width: 640px) {
  .navbar-inner { gap: 12px; }
  .search { display: none; }
  .logo-text { font-size: 17px; }
}
</style>
