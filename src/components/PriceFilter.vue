<script setup>
import { ref } from 'vue'

// 表单绑定 + 事件知识点：价格区间筛选
const props = defineProps({
  modelValue: { type: Array, default: () => [0, 9999] }
})
const emit = defineEmits(['update:modelValue'])

const min = ref(props.modelValue[0])
const max = ref(props.modelValue[1])

function apply() {
  const lo = Number(min.value) || 0
  const hi = Number(max.value) || 9999
  emit('update:modelValue', [lo, hi])
}
function reset() {
  min.value = 0
  max.value = 9999
  apply()
}
</script>

<template>
  <div class="price-filter">
    <span class="label">价格：</span>
    <input v-model.number="min" type="number" min="0" placeholder="最低" />
    <span class="sep">-</span>
    <input v-model.number="max" type="number" min="0" placeholder="最高" />
    <button class="btn btn-outline btn-sm" @click="apply">筛选</button>
    <button class="btn btn-sm reset" @click="reset">重置</button>
  </div>
</template>

<style scoped>
.price-filter {
  display: flex;
  align-items: center;
  gap: 8px;
}
.label { font-size: 14px; color: var(--text-muted); }
input {
  width: 72px;
  padding: 7px 8px;
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 14px;
}
.sep { color: var(--text-muted); }
.btn-sm { padding: 7px 14px; font-size: 13px; }
.reset { background: none; border: 1px solid transparent; color: var(--text-muted); }
.reset:hover { color: var(--primary); }
</style>
