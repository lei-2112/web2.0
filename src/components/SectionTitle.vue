<script setup>
// 具名插槽知识点：区块标题，支持插槽自定义右侧内容
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' }
})
</script>

<template>
  <div class="section-title">
    <div class="st-text">
      <h2 class="st-title">{{ title }}</h2>
      <p v-if="subtitle" class="st-sub">{{ subtitle }}</p>
    </div>
    <div class="st-extra">
      <!-- 默认插槽知识点 -->
      <slot name="extra"></slot>
    </div>
  </div>
</template>

<style scoped>
.section-title {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 22px;
}
.st-title {
  font-size: 24px;
  font-weight: 800;
  position: relative;
  padding-left: 14px;
}
.st-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 4px;
  bottom: 4px;
  width: 5px;
  border-radius: 3px;
  background: var(--primary);
}
.st-sub {
  margin-top: 6px;
  color: var(--text-muted);
  font-size: 13px;
}
</style>
