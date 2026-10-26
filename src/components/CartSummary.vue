<script setup>
// props + 插槽知识点：结算汇总栏
defineProps({
  count: { type: Number, default: 0 },
  total: { type: String, default: '0.00' }
})
defineEmits(['clear', 'checkout'])
</script>

<template>
  <div class="summary">
    <button class="btn btn-outline" @click="$emit('clear')">清空购物车</button>
    <div class="summary-total">
      共 <b>{{ count }}</b> 件商品，合计：
      <span class="total-price">¥{{ total }}</span>
    </div>
    <button class="btn btn-accent checkout" @click="$emit('checkout')">去结算</button>
  </div>
</template>

<style scoped>
.summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 22px;
  background: #fff;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  flex-wrap: wrap;
}
.summary-total {
  font-size: 15px;
  flex: 1;
  text-align: right;
}
.total-price {
  color: var(--accent);
  font-size: 24px;
  font-weight: 800;
}
.checkout { padding: 12px 34px; }
@media (max-width: 560px) {
  .summary-total { text-align: left; flex-basis: 100%; }
}
</style>
