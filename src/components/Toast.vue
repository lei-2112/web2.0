<script setup>
import { ref, onMounted } from 'vue'

// 全局提示：通过自定义事件触发（可配合 provide/inject）
const message = ref('')
const visible = ref(false)
let timer = null

function show(msg = '操作成功', ms = 1800) {
  message.value = msg
  visible.value = true
  clearTimeout(timer)
  timer = setTimeout(() => (visible.value = false), ms)
}

// 生命周期知识点：onMounted 注册全局监听
onMounted(() => {
  window.addEventListener('show-toast', (e) => show(e.detail))
})

defineExpose({ show })
</script>

<template>
  <!-- Teleport 知识点：把提示挂载到 body -->
  <Teleport to="body">
    <Transition name="toast">
      <div v-if="visible" class="toast">
        <span class="toast-icon">✓</span>
        {{ message }}
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.toast {
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(31, 41, 51, 0.92);
  color: #fff;
  padding: 12px 22px;
  border-radius: 30px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 9999;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}
.toast-icon {
  color: #7be0a2;
  font-weight: 800;
}
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translate(-50%, -12px);
}
</style>
