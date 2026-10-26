<script setup>
import QuantityStepper from './QuantityStepper.vue'

// props + emit 知识点：购物车单项
defineProps({
  item: { type: Object, required: true }
})
defineEmits(['update', 'remove'])
</script>

<template>
  <div class="cart-row">
    <div class="row-img" :style="{ background: item.product.gradient }">{{ item.product.emoji }}</div>
    <div class="row-info">
      <router-link :to="`/products/${item.product.id}`" class="row-name">{{ item.product.name }}</router-link>
      <div class="row-price">¥{{ item.product.price }} <span class="unit">/ {{ item.product.unit }}</span></div>
    </div>
    <!-- 组件 v-model 知识点：复用数量步进器 -->
    <QuantityStepper :model-value="item.qty" :max="item.product.stock" @update:model-value="$emit('update', item.id, $event)" />
    <div class="row-total">¥{{ (item.product.price * item.qty).toFixed(2) }}</div>
    <button class="row-remove" title="删除" @click="$emit('remove', item.id)">✕</button>
  </div>
</template>

<style scoped>
.cart-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: #fff;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}
.row-img {
  width: 64px;
  height: 64px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  font-size: 32px;
  flex-shrink: 0;
}
.row-info {
  flex: 1;
  min-width: 0;
}
.row-name {
  font-weight: 600;
  font-size: 15px;
}
.row-name:hover { color: var(--primary); }
.row-price {
  margin-top: 6px;
  color: var(--accent);
  font-weight: 700;
}
.unit { font-size: 12px; color: var(--text-muted); font-weight: 400; }
.row-total {
  min-width: 80px;
  text-align: right;
  font-weight: 800;
  color: var(--accent);
}
.row-remove {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  color: var(--text-muted);
  transition: all 0.2s;
}
.row-remove:hover { background: #fee; color: #d32f2f; }
@media (max-width: 560px) {
  .row-total { display: none; }
}
</style>
