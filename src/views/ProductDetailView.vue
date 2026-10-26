<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { findProduct } from '../data/products.js'
import { useCartStore } from '../stores/cart.js'
import StarRating from '../components/StarRating.vue'
import QuantityStepper from '../components/QuantityStepper.vue'
import EmptyState from '../components/EmptyState.vue'

const route = useRoute()
const cart = useCartStore()

// 响应式 + 计算属性知识点：商品详情
const product = computed(() => findProduct(route.params.id))
const qty = ref(1)
const stockText = computed(() =>
  product.value?.stock > 0 ? `仅剩 ${product.value.stock} 件` : '暂时缺货'
)

function addToCart() {
  cart.addToCart(product.value.id, qty.value)
  window.dispatchEvent(new CustomEvent('show-toast', { detail: '已加入购物车' }))
  qty.value = 1
}

// 生命周期 + 滚动知识点：进入页面回到顶部
onMounted(() => window.scrollTo(0, 0))
</script>

<template>
  <div class="container detail-page">
    <!-- v-if / v-else 知识点 -->
    <div v-if="product" class="detail">
      <div class="detail-img" :style="{ background: product.gradient }">
        <span class="d-emoji">{{ product.emoji }}</span>
      </div>
      <div class="detail-info">
        <span v-for="t in product.tags" :key="t" class="tag">{{ t }}</span>
        <h1 class="d-name">{{ product.name }}</h1>
        <div class="d-rating">
          <StarRating :value="product.rating" :size="16" />
          <span class="sales">已售 {{ product.sales }}</span>
          <span class="cat">{{ product.category }}</span>
        </div>

        <div class="d-price">
          <span class="p-cur">¥{{ product.price }}</span>
          <span class="p-old">¥{{ product.oldPrice }}</span>
          <span class="p-unit">/ {{ product.unit }}</span>
        </div>

        <p class="d-desc">{{ product.desc }}</p>

        <!-- 表单 + 组件 v-model 知识点 -->
        <div class="d-buy">
          <div class="d-qty">
            <span class="qty-label">数量</span>
            <QuantityStepper v-model="qty" :max="product.stock" />
          </div>
          <div class="stock" :class="{ low: product.stock <= 10 }">{{ stockText }}</div>
          <button class="btn btn-accent d-add" :disabled="product.stock <= 0" @click="addToCart">
            🛒 加入购物车
          </button>
        </div>

        <div class="d-note">全国包邮 · 次日达 · 7 天无忧退换</div>
      </div>
    </div>

    <EmptyState v-else icon="❓" text="商品不存在或已下架">
      <router-link to="/products" class="btn btn-primary">返回商品列表</router-link>
    </EmptyState>
  </div>
</template>

<style scoped>
.detail-page {
  padding-top: 28px;
}
.detail {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 34px;
  background: #fff;
  border-radius: var(--radius);
  padding: 30px;
  box-shadow: var(--shadow);
}
.detail-img {
  border-radius: 12px;
  min-height: 340px;
  display: grid;
  place-items: center;
}
.d-emoji {
  font-size: 150px;
  filter: drop-shadow(0 6px 16px rgba(0, 0, 0, 0.2));
}
.d-name {
  font-size: 26px;
  font-weight: 800;
  margin: 12px 0;
}
.d-rating {
  display: flex;
  align-items: center;
  gap: 14px;
  color: var(--text-muted);
  font-size: 13px;
}
.cat {
  background: var(--primary-light);
  color: var(--primary);
  padding: 2px 10px;
  border-radius: 20px;
  font-weight: 600;
}
.d-price {
  margin: 20px 0;
  background: var(--primary-light);
  border-radius: 10px;
  padding: 16px 18px;
}
.p-cur {
  color: var(--accent);
  font-size: 34px;
  font-weight: 800;
}
.p-old {
  color: var(--text-muted);
  text-decoration: line-through;
  margin-left: 10px;
}
.p-unit {
  margin-left: 6px;
  color: var(--text-muted);
}
.d-desc {
  color: var(--text-muted);
  line-height: 1.7;
  font-size: 15px;
  margin-bottom: 22px;
}
.d-buy {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}
.d-qty {
  display: flex;
  align-items: center;
  gap: 10px;
}
.qty-label {
  color: var(--text-muted);
  font-size: 14px;
}
.stock {
  font-size: 13px;
  color: var(--primary);
  font-weight: 600;
}
.stock.low {
  color: var(--accent);
}
.d-add {
  padding: 12px 30px;
}
.d-note {
  margin-top: 20px;
  font-size: 13px;
  color: var(--text-muted);
  border-top: 1px dashed var(--border);
  padding-top: 16px;
}
@media (max-width: 720px) {
  .detail { grid-template-columns: 1fr; }
  .d-emoji { font-size: 100px; }
  .detail-img { min-height: 220px; }
}
</style>
