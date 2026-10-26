<script setup>
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
import Toast from './components/Toast.vue'
</script>

<template>
  <div class="app">
    <NavBar />
    <main class="app-main">
      <!-- 路由出口：展示当前页面的组件（动态组件/路由知识点） -->
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <FooterBar />
    <!-- Teleport 知识点：把提示浮层挂载到 body -->
    <Toast />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.app-main {
  flex: 1;
}
</style>
