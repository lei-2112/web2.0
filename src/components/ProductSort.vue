<script setup>
// 表单绑定 + computed 知识点：排序
defineProps({
  modelValue: { type: String, default: 'default' }
})
defineEmits(['update:modelValue'])

const options = [
  { value: 'default', label: '综合排序' },
  { value: 'priceAsc', label: '价格从低到高' },
  { value: 'priceDesc', label: '价格从高到低' },
  { value: 'sales', label: '销量优先' },
  { value: 'rating', label: '好评优先' }
]
</script>

<template>
  <select class="sort" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
    <option v-for="o in options" :key="o.value" :value="o.value">{{ o.label }}</option>
  </select>
</template>

<style scoped>
.sort {
  padding: 8px 12px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: #fff;
  font-size: 14px;
  cursor: pointer;
}
</style>
