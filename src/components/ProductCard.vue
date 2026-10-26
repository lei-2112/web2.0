<script setup>
import StarRating from './StarRating.vue'

// props + 事件（emit）知识点：商品卡片
defineProps({
  product: { type: Object, required: true }
})
defineEmits(['add'])
</script>

<template>
  <div class="card">
    <router-link :to="`/products/${product.id}`" class="card-img" :style="{ background: product.gradient }">
      <span class="card-emoji">{{ product.emoji }}</span>
      <span v-for="t in product.tags" :key="t" class="tag card-tag">{{ t }}</span>
    </router-link>
    <div class="card-body">
      <h3 class="card-name">
        <router-link :to="`/products/${product.id}`">{{ product.name }}</router-link>
      </h3>
      <StarRating :value="product.rating" :size="13" />
      <div class="card-foot">
        <div class="price">
          <span class="cur">¥{{ product.price }}</span>
          <span class="old">¥{{ product.oldPrice }}</span>
        </div>
        <button class="add-btn" title="加入购物车" @click="$emit('add', product.id)">＋</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: var(--card);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.2s, box-shadow 0.2s;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}
.card-img {
  position: relative;
  display: block;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-emoji {
  font-size: 72px;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.15));
}
.card-tag {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(255, 255, 255, 0.9);
  color: var(--primary-dark);
}
.card-tag + .card-tag {
  left: auto;
  right: 10px;
}
.card-body {
  padding: 12px 14px 14px;
}
.card-name {
  font-size: 15px;
  margin-bottom: 6px;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-name a:hover {
  color: var(--primary);
}
.card-foot {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cur {
  color: var(--accent);
  font-size: 18px;
  font-weight: 800;
}
.old {
  margin-left: 6px;
  color: var(--text-muted);
  font-size: 12px;
  text-decoration: line-through;
}
.add-btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--primary);
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  transition: all 0.2s;
}
.add-btn:hover {
  background: var(--accent);
  transform: scale(1.08);
}
</style>
