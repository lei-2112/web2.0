<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '../stores/cart.js'
import { products, categories } from '../data/products.js'
import HeroBanner from '../components/HeroBanner.vue'
import FeatureBar from '../components/FeatureBar.vue'
import SectionTitle from '../components/SectionTitle.vue'
import ProductGrid from '../components/ProductGrid.vue'
import BackToTop from '../components/BackToTop.vue'

const cart = useCartStore()

// 计算属性知识点：推荐商品 = 评分高 + 销量高的前 8 个
const recommended = computed(() =>
  [...products].sort((a, b) => b.sales - a.sales).slice(0, 8)
)
// 今日特价：有折扣的商品
const deals = computed(() => products.filter((p) => p.oldPrice).slice(0, 4))

function addToCart(id) {
  cart.addToCart(id, 1)
  window.dispatchEvent(new CustomEvent('show-toast', { detail: '已加入购物车' }))
}
</script>

<template>
  <div>
    <HeroBanner />
    <FeatureBar />

    <section class="container section">
      <SectionTitle title="今日特惠" subtitle="限时折扣，手慢无">
        <template #extra>
          <router-link to="/products" class="more">查看全部 →</router-link>
        </template>
      </SectionTitle>
      <ProductGrid :products="deals" @add="addToCart" />
    </section>

    <section class="container section">
      <SectionTitle title="热卖推荐" subtitle="大家都在买的好物" />
      <ProductGrid :products="recommended" @add="addToCart" />
    </section>

    <section class="container section">
      <SectionTitle title="分类选购" subtitle="按品类快速浏览" />
      <div class="cat-grid">
        <router-link
          v-for="c in categories"
          :key="c"
          :to="`/products?category=${encodeURIComponent(c)}`"
          class="cat-cell"
        >{{ c }}</router-link>
      </div>
    </section>

    <BackToTop />
  </div>
</template>

<style scoped>
.section {
  margin-top: 30px;
}
.more {
  font-size: 14px;
  color: var(--primary);
  font-weight: 600;
}
.cat-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;
}
.cat-cell {
  background: #fff;
  border-radius: var(--radius);
  padding: 26px 0;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  box-shadow: var(--shadow);
  transition: all 0.2s;
}
.cat-cell:hover {
  color: var(--primary);
  transform: translateY(-3px);
  box-shadow: var(--shadow-hover);
}
@media (max-width: 768px) {
  .cat-grid { grid-template-columns: repeat(3, 1fr); }
}
</style>
