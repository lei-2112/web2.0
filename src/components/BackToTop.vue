<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 侦听滚动位置（事件 + 条件渲染知识点）
const visible = ref(false)
function onScroll() {
  visible.value = window.scrollY > 400
}
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <!-- v-if / v-show 知识点：条件显示回到顶部按钮 -->
  <Transition name="fade">
    <button v-if="visible" class="back-top" @click="window.scrollTo({ top: 0, behavior: 'smooth' })">
      ▲
    </button>
  </Transition>
</template>

<style scoped>
.back-top {
  position: fixed;
  right: 28px;
  bottom: 40px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--primary);
  color: #fff;
  font-size: 16px;
  box-shadow: var(--shadow-hover);
  z-index: 90;
}
.back-top:hover {
  background: var(--primary-dark);
}
</style>
