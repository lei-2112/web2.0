<script setup>
// 表单绑定（v-model）知识点：搜索框
defineProps({
  modelValue: { type: String, default: '' }
})
defineEmits(['update:modelValue', 'search'])
</script>

<template>
  <form class="search-bar" @submit.prevent="$emit('search')">
    <input
      v-model.trim="$attrs.value ?? modelValue"
      :value="modelValue"
      type="text"
      placeholder="输入关键词搜索商品…"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <button type="submit">搜索</button>
  </form>
</template>

<style scoped>
.search-bar {
  display: flex;
  border: 1px solid var(--border);
  border-radius: 30px;
  overflow: hidden;
  max-width: 360px;
  background: #fff;
}
.search-bar input {
  flex: 1;
  border: none;
  outline: none;
  padding: 10px 18px;
  font-size: 14px;
}
.search-bar button {
  padding: 0 22px;
  background: var(--primary);
  color: #fff;
  font-weight: 600;
}
</style>
