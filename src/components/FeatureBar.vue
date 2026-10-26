<script setup>
// v-for + 静态数据知识点：服务保障栏
const features = [
  { icon: '🚚', title: '极速配送', desc: '当日达 / 次日达' },
  { icon: '🌱', title: '新鲜保障', desc: '产地直采品质严选' },
  { icon: '↩️', title: '无忧退换', desc: '7 天无理由退换' },
  { icon: '💬', title: '在线客服', desc: '7×24 小时贴心服务' }
]
</script>

<template>
  <div class="feature-bar">
    <div class="container features">
      <div v-for="f in features" :key="f.title" class="feature">
        <span class="f-icon">{{ f.icon }}</span>
        <div>
          <div class="f-title">{{ f.title }}</div>
          <div class="f-desc">{{ f.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.feature-bar {
  background: #fff;
  border-radius: var(--radius);
  margin: 16px 0;
  box-shadow: var(--shadow);
}
.features {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  padding: 18px 20px;
}
.feature {
  display: flex;
  align-items: center;
  gap: 12px;
}
.f-icon {
  font-size: 28px;
}
.f-title {
  font-weight: 700;
  font-size: 15px;
}
.f-desc {
  font-size: 12px;
  color: var(--text-muted);
  margin-top: 2px;
}
@media (max-width: 768px) {
  .features { grid-template-columns: repeat(2, 1fr); }
}
</style>
