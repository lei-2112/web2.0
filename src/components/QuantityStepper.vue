<script setup>
// 组件 v-model 知识点：props modelValue + emit update:modelValue
const props = defineProps({
  modelValue: { type: Number, default: 1 },
  min: { type: Number, default: 1 },
  max: { type: Number, default: 99 }
})
const emit = defineEmits(['update:modelValue'])

function set(v) {
  const n = Math.min(Math.max(v, props.min), props.max)
  emit('update:modelValue', n)
}
</script>

<template>
  <div class="stepper">
    <button class="step-btn" @click="set(modelValue - 1)" :disabled="modelValue <= min">−</button>
    <span class="step-val">{{ modelValue }}</span>
    <button class="step-btn" @click="set(modelValue + 1)" :disabled="modelValue >= max">+</button>
  </div>
</template>

<style scoped>
.stepper {
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
}
.step-btn {
  width: 30px;
  height: 32px;
  font-size: 16px;
  color: var(--text);
  background: #f7f8fa;
  transition: all 0.2s;
}
.step-btn:hover:not(:disabled) {
  background: var(--primary-light);
  color: var(--primary);
}
.step-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.step-val {
  min-width: 38px;
  text-align: center;
  font-weight: 600;
}
</style>
