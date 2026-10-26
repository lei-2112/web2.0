<script setup>
// 具名插槽知识点：空状态占位
defineProps({
  icon: { type: String, default: '🗑️' },
  text: { type: String, default: '这里空空如也' },
  actionText: { type: String, default: '' }
})
defineEmits(['action'])
</script>

<template>
  <div class="empty">
    <div class="empty-icon">{{ icon }}</div>
    <p class="empty-text">{{ text }}</p>
    <button v-if="actionText" class="btn btn-primary" @click="$emit('action')">{{ actionText }}</button>
    <slot></slot>
  </div>
</template>

<style scoped>
.empty {
  text-align: center;
  padding: 60px 20px;
  color: var(--text-muted);
}
.empty-icon {
  font-size: 56px;
  margin-bottom: 14px;
  opacity: 0.6;
}
.empty-text {
  font-size: 16px;
  margin-bottom: 18px;
}
</style>
