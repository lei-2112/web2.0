<script setup>
import { categories } from '../data/products.js'

// props + emit 知识点：分类筛选
defineProps({
  modelValue: { type: String, default: '全部' }
})
defineEmits(['update:modelValue'])

// 计算属性知识点：全部+各分类
const allCategories = ['全部', ...categories]
</script>

<template>
  <div class="cats">
    <button
      v-for="c in allCategories"
      :key="c"
      class="cat-btn"
      :class="{ on: modelValue === c }"
      @click="$emit('update:modelValue', c)"
    >{{ c }}</button>
  </div>
</template>

<style scoped>
.cats {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.cat-btn {
  padding: 8px 18px;
  border-radius: 20px;
  background: #fff;
  border: 1px solid var(--border);
  font-size: 14px;
  color: var(--text-muted);
  transition: all 0.2s;
}
.cat-btn:hover {
  border-color: var(--primary);
  color: var(--primary);
}
.cat-btn.on {
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
  font-weight: 600;
}
</style>
