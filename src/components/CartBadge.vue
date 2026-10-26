<script setup>
import { useCartStore } from '../stores/cart.js'

const cart = useCartStore()
</script>

<template>
  <span class="cart-badge">
    <span class="cart-icon">🛒</span>
    <!-- Transition 知识点：数量变化时的动画 -->
    <Transition name="bump" mode="out-in">
      <span v-if="cart.cartCount > 0" :key="cart.cartCount" class="count">{{ cart.cartCount }}</span>
    </Transition>
  </span>
</template>

<style scoped>
.cart-badge {
  position: relative;
  display: inline-flex;
  align-items: center;
}
.cart-icon {
  font-size: 22px;
}
.count {
  position: absolute;
  top: -6px;
  right: -10px;
  min-width: 18px;
  height: 18px;
  padding: 0 4px;
  border-radius: 9px;
  background: var(--accent);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  display: grid;
  place-items: center;
}
.bump-enter-active {
  animation: bump 0.3s ease;
}
.bump-leave-active {
  transition: opacity 0.1s;
}
.bump-leave-to {
  opacity: 0;
}
@keyframes bump {
  0% { transform: scale(0.4); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}
</style>
