<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart.js'
import CartItem from '../components/CartItem.vue'
import CartSummary from '../components/CartSummary.vue'
import EmptyState from '../components/EmptyState.vue'

const cart = useCartStore()
const router = useRouter()

// 计算属性知识点：购物车明细与合计
const items = computed(() => cart.cartItems)
const count = computed(() => cart.cartCount)
const total = computed(() => cart.totalPrice)

function updateQty(id, qty) {
  cart.changeQty(id, qty)
}
function remove(id) {
  cart.removeItem(id)
  window.dispatchEvent(new CustomEvent('show-toast', { detail: '已移除商品' }))
}
function clear() {
  cart.clearCart()
  window.dispatchEvent(new CustomEvent('show-toast', { detail: '购物车已清空' }))
}
function checkout() {
  window.dispatchEvent(new CustomEvent('show-toast', { detail: '结算成功（演示）' }))
  cart.clearCart()
  router.push('/products')
}
</script>

<template>
  <div class="container cart-page">
    <h1 class="page-title">我的购物车 <span class="count">共 {{ count }} 件</span></h1>

    <!-- TransitionGroup 知识点：列表增删动画 -->
    <div v-if="items.length" class="cart-list">
      <TransitionGroup name="list" tag="div" class="cart-group">
        <CartItem
          v-for="it in items"
          :key="it.id"
          :item="it"
          @update="updateQty"
          @remove="remove"
        />
      </TransitionGroup>
      <CartSummary :count="count" :total="total" @clear="clear" @checkout="checkout" />
    </div>

    <EmptyState v-else icon="🛒" text="购物车还是空的，快去挑选好物吧" actionText="去逛逛">
      <router-link to="/products" class="btn btn-primary">去逛逛</router-link>
    </EmptyState>
  </div>
</template>

<style scoped>
.cart-page {
  padding-top: 28px;
}
.page-title {
  font-size: 26px;
  font-weight: 800;
  margin-bottom: 20px;
}
.count {
  font-size: 14px;
  color: var(--text-muted);
  font-weight: 500;
  margin-left: 8px;
}
.cart-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.cart-group {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
</style>
