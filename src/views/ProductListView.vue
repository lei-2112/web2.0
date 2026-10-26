<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { products } from '../data/products.js'
import { useCartStore } from '../stores/cart.js'
import CategoryFilter from '../components/CategoryFilter.vue'
import PriceFilter from '../components/PriceFilter.vue'
import SearchBar from '../components/SearchBar.vue'
import ProductSort from '../components/ProductSort.vue'
import ProductGrid from '../components/ProductGrid.vue'
import BackToTop from '../components/BackToTop.vue'

const route = useRoute()
const router = useRouter()
const cart = useCartStore()

// 筛选状态（ref 知识点）
const keyword = ref('')
const category = ref('全部')
const priceRange = ref([0, 9999])
const sortBy = ref('default')

// 从 URL 查询参数初始化（onMounted 知识点）
onMounted(() => {
  if (route.query.keyword) keyword.value = route.query.keyword
  if (route.query.category) category.value = route.query.category
})

// 侦听路由变化（watch 知识点）
watch(
  () => route.query,
  (q) => {
    if (q.keyword !== undefined) keyword.value = q.keyword
    if (q.category !== undefined) category.value = q.category
  }
)

// 计算属性知识点：筛选 + 排序后的商品列表
const filtered = computed(() => {
  let list = products.filter((p) => {
    const hitKeyword =
      !keyword.value.trim() ||
      p.name.includes(keyword.value.trim()) ||
      p.tags.some((t) => t.includes(keyword.value.trim()))
    const hitCat = category.value === '全部' || p.category === category.value
    const hitPrice = p.price >= priceRange.value[0] && p.price <= priceRange.value[1]
    return hitKeyword && hitCat && hitPrice
  })
  switch (sortBy.value) {
    case 'priceAsc':
      list = [...list].sort((a, b) => a.price - b.price)
      break
    case 'priceDesc':
      list = [...list].sort((a, b) => b.price - a.price)
      break
    case 'sales':
      list = [...list].sort((a, b) => b.sales - a.sales)
      break
    case 'rating':
      list = [...list].sort((a, b) => b.rating - a.rating)
      break
    default:
      break
  }
  return list
})

const resultCount = computed(() => filtered.value.length)

function onSearch() {
  router.replace({ query: { ...route.query, keyword: keyword.value || undefined } })
}

function addToCart(id) {
  cart.addToCart(id, 1)
  window.dispatchEvent(new CustomEvent('show-toast', { detail: '已加入购物车' }))
}
</script>

<template>
  <div class="container list-page">
    <h1 class="page-title">全部商品 <span class="count">共 {{ resultCount }} 件</span></h1>

    <!-- 搜索 + 排序 工具行 -->
    <div class="toolbar">
      <SearchBar v-model="keyword" @search="onSearch" />
      <ProductSort v-model="sortBy" />
    </div>

    <!-- 分类筛选 -->
    <div class="filter-block">
      <CategoryFilter v-model="category" />
    </div>

    <!-- 价格筛选 -->
    <div class="filter-block price-block">
      <PriceFilter v-model="priceRange" />
    </div>

    <!-- 商品网格 -->
    <ProductGrid :products="filtered" @add="addToCart" />

    <BackToTop />
  </div>
</template>

<style scoped>
.list-page {
  padding-top: 28px;
}
.page-title {
  font-size: 26px;
  font-weight: 800;
  margin-bottom: 20px;
}
.count {
  font-size: 14px;
  color: var(--text-muted);
  font-weight: 500;
  margin-left: 8px;
}
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}
.filter-block {
  margin-bottom: 14px;
  background: #fff;
  border-radius: 10px;
  padding: 14px 16px;
  box-shadow: var(--shadow);
}
.price-block {
  display: flex;
  align-items: center;
}
</style>
