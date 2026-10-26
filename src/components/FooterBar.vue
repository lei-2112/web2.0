<script setup>
// 计算属性知识点：动态年份
import { computed } from 'vue'
const year = computed(() => new Date().getFullYear())
const links = [
  { text: '关于我们', url: '#' },
  { text: '帮助中心', url: '#' },
  { text: '配送说明', url: '#' },
  { text: '隐私政策', url: '#' }
]
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-left">
        <span class="footer-logo">鲜选商城</span>
        <p class="footer-slogan">新鲜直达 · 好物严选 · 用 Vue 构建的前端练习项目</p>
      </div>
      <!-- v-for 知识点 -->
      <nav class="footer-links">
        <a v-for="l in links" :key="l.text" :href="l.url" class="footer-link">{{ l.text }}</a>
      </nav>
    </div>
    <!-- v-html 知识点：免责声明 -->
    <div class="container footer-copy" v-html="`© ${year} 鲜选商城 · 仅用于前端课程实验，数据均为演示用途`"></div>
  </footer>
</template>

<style scoped>
.footer {
  background: #1f2933;
  color: #b6bec9;
  padding: 34px 0 22px;
  margin-top: 40px;
}
.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}
.footer-logo {
  font-size: 20px;
  font-weight: 800;
  color: #fff;
}
.footer-slogan {
  margin-top: 6px;
  font-size: 13px;
}
.footer-links {
  display: flex;
  gap: 18px;
}
.footer-link {
  font-size: 14px;
  color: #b6bec9;
  transition: color 0.2s;
}
.footer-link:hover {
  color: #fff;
}
.footer-copy {
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 12px;
  color: #8a93a1;
}
</style>
