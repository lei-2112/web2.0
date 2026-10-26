import { defineStore } from 'pinia'
import { findProduct } from '../data/products.js'

// Pinia 状态管理：购物车
export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] // 形如 [{ id, qty }]
  }),
  getters: {
    // 购物车商品总数（计算属性知识点）
    cartCount: (state) => state.items.reduce((sum, it) => sum + it.qty, 0),
    // 带商品详情的购物车明细
    cartItems: (state) =>
      state.items.map((it) => ({
        ...it,
        product: findProduct(it.id)
      })),
    // 合计金额（保留两位）
    totalPrice: (state) =>
      state.items
        .reduce((sum, it) => sum + it.qty * (findProduct(it.id)?.price || 0), 0)
        .toFixed(2)
  },
  actions: {
    // 加入购物车：已有则累加数量
    addToCart(id, qty = 1) {
      const found = this.items.find((it) => it.id === id)
      if (found) {
        found.qty += qty
      } else {
        this.items.push({ id, qty })
      }
    },
    changeQty(id, qty) {
      const found = this.items.find((it) => it.id === id)
      if (found) {
        found.qty = qty
        if (found.qty <= 0) this.items.splice(this.items.indexOf(found), 1)
      }
    },
    removeItem(id) {
      this.items = this.items.filter((it) => it.id !== id)
    },
    clearCart() {
      this.items = []
    }
  }
})
