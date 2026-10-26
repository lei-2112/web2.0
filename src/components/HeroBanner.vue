<script setup>
import { ref, computed } from 'vue'

// 轮播图数据（ref 知识点）
const slides = [
  { title: '新鲜水果 · 产地直采', sub: '当季鲜果，48 小时从果园到餐桌', emoji: '🍊', bg: 'linear-gradient(135deg,#ff9a56,#ff6a3d)' },
  { title: '健康零食 · 科学配比', sub: '每日坚果，办公室健康标配', emoji: '🥜', bg: 'linear-gradient(135deg,#11998e,#38ef7d)' },
  { title: '精选粮油 · 家庭常备', sub: '五常大米，满屋飘香', emoji: '🍚', bg: 'linear-gradient(135deg,#f6d365,#fda085)' }
]

// 计算属性 + 事件知识点：自动轮播
const current = ref(0)
const activeSlide = computed(() => slides[current.value])
let timer = null
function go(n) {
  current.value = (n + slides.length) % slides.length
}
function next() {
  go(current.value + 1)
}
function start() {
  timer = setInterval(next, 4000)
}
function stop() {
  clearInterval(timer)
}
</script>

<template>
  <section class="hero" @mouseenter="stop" @mouseleave="start" @click="start">
    <div class="container">
      <Transition name="fade" mode="out-in">
        <div class="hero-banner" :key="current" :style="{ background: activeSlide.bg }">
          <div class="hero-content">
            <h1 class="hero-title">{{ activeSlide.title }}</h1>
            <p class="hero-sub">{{ activeSlide.sub }}</p>
            <router-link to="/products" class="btn hero-btn">立即选购 →</router-link>
          </div>
          <div class="hero-emoji">{{ activeSlide.emoji }}</div>
          <div class="hero-dots">
            <span
              v-for="(s, i) in slides"
              :key="i"
              class="dot"
              :class="{ on: i === current }"
              @click="go(i)"
            ></span>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 24px 0 8px;
}
.hero-banner {
  position: relative;
  border-radius: var(--radius);
  padding: 44px 48px;
  color: #fff;
  min-height: 220px;
  display: flex;
  align-items: center;
  overflow: hidden;
  box-shadow: var(--shadow-hover);
}
.hero-title {
  font-size: 34px;
  font-weight: 800;
}
.hero-sub {
  margin-top: 10px;
  font-size: 16px;
  opacity: 0.92;
}
.hero-btn {
  margin-top: 20px;
  background: #fff;
  color: var(--primary-dark);
  font-weight: 700;
}
.hero-emoji {
  font-size: 120px;
  position: absolute;
  right: 50px;
  bottom: -10px;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2));
}
.hero-dots {
  position: absolute;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}
.dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.2s;
}
.dot.on {
  width: 22px;
  border-radius: 5px;
  background: #fff;
}
@media (max-width: 640px) {
  .hero-banner { padding: 30px; }
  .hero-title { font-size: 24px; }
  .hero-emoji { font-size: 70px; right: 20px; }
}
</style>
