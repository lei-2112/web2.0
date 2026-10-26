<script setup>
// props 知识点：评分展示组件
defineProps({
  value: { type: Number, default: 0 },
  size: { type: Number, default: 14 }
})
</script>

<template>
  <span class="stars" :style="{ '--size': size + 'px' }">
    <span
      v-for="i in 5"
      :key="i"
      class="star"
      :class="{ on: i <= Math.round(value) }"
    >★</span>
    <span class="score">{{ value }}</span>
  </span>
</template>

<style scoped>
.stars {
  display: inline-flex;
  align-items: center;
  gap: 1px;
  --size: 14px;
}
.star {
  font-size: var(--size);
  color: #d9dde3;
  line-height: 1;
}
.star.on {
  color: #ffb400;
}
.score {
  margin-left: 4px;
  font-size: calc(var(--size) - 2px);
  color: var(--text-muted);
  font-weight: 600;
}
</style>
