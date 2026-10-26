<script setup>
import ProductCard from './ProductCard.vue'
import EmptyState from './EmptyState.vue'

// props + 插槽知识点：商品网格
defineProps({
  products: { type: Array, default: () => [] }
})
defineEmits(['add'])

// 触发添加并冒泡给上层（组件事件链）
function onAdd(id) {
  // 事件穿透：这里不做业务，直接向上抛出
}
</script>

<template>
  <div v-if="products.length" class="grid">
    <ProductCard
      v-for="p in products"
      :key="p.id"
      :product="p"
      @add="$emit('add', p.id)"
    />
  </div>
  <EmptyState v-else icon="🔍" text="没有找到符合条件的商品" />
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}
@media (max-width: 960px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 640px) {
  .grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
}
</style>
