# 鲜选商城（实验三：Vue 练习）

任选主题用 Vue 实现的前端网站 —— 小型电商/商品展示站。只需前端，数据为本地演示数据。

## 运行方法
```bash
cd "C:\Users\www68\Doubao\chats\2026-10-26\new-chat\vue-ecshop"
npm install        # 首次
npm run dev        # 启动，浏览器打开 http://localhost:5173/
npm run build      # 打包静态文件（产物在 dist/，用于 GitHub Pages 部署）
```

## 部署到 GitHub（GitHub 仓库 + GitHub Pages，得到公网链接）

项目已按 GitHub Pages 适配（`vite.config.js` 设了 `base: './'`，路由用 hash 模式，子页面刷新不 404）。

1. 在 GitHub 新建一个空仓库（如 `vue-ecshop`），复制仓库地址 `https://github.com/你的用户名/vue-ecshop.git`
2. 本地推代码：
   ```bash
   cd "C:\Users\www68\Doubao\chats\2026-10-26\new-chat\vue-ecshop"
   git add -A
   git commit -m "init: Vue 3 电商练习项目"
   git remote add origin https://github.com/你的用户名/vue-ecshop.git
   git branch -M main
   git push -u origin main
   ```
3. 生成并推送站点文件（GitHub Pages）：
   ```bash
   npm run build
   git add -A
   git commit -m "build: 打包站点"
   git push origin main
   ```
4. 到 GitHub 仓库页 **Settings → Pages → Build and deployment**，Source 选 `Deploy from a branch`，分支选 `main`，目录选 `/`，点 **Save**。
5. 稍等 1~2 分钟，即可访问公网链接：`https://你的用户名.github.io/vue-ecshop/`

> 若不想每次手动 build，可在 GitHub Actions 里加一个自动构建 workflow；有需要我再补。

## 页面（4 个，>= 要求 3 个）
| 路由 | 页面 | 说明 |
|---|---|---|
| `/` | 首页 | 轮播横幅、服务保障、今日特惠、热卖推荐、分类入口 |
| `/products` | 商品列表 | 搜索、分类筛选、价格区间、排序、商品网格 |
| `/products/:id` | 商品详情 | 图片、评分、数量选择、加入购物车 |
| `/cart` | 购物车 | 数量加减、单项删除、清空、合计、结算（演示） |

## 组件（24 个 `.vue`，>= 要求 15 个单文件组件）
- 根/布局：`App.vue`、`NavBar.vue`、`FooterBar.vue`、`CartBadge.vue`、`BackToTop.vue`、`Toast.vue`
- 首页：`HeroBanner.vue`（自动轮播）、`FeatureBar.vue`、`SectionTitle.vue`
- 商品：`ProductCard.vue`、`ProductGrid.vue`、`StarRating.vue`、`QuantityStepper.vue`
- 筛选：`SearchBar.vue`、`CategoryFilter.vue`、`PriceFilter.vue`、`ProductSort.vue`
- 购物车：`CartItem.vue`、`CartSummary.vue`、`EmptyState.vue`
- 页面视图：`HomeView.vue`、`ProductListView.vue`、`ProductDetailView.vue`、`CartView.vue`

## 覆盖的 Vue 教程知识点（https://cn.vuejs.org/tutorial/）
声明式渲染、响应式 `ref`/`computed`、`v-bind` 属性绑定、`v-on` 事件、`v-if/v-else`、`v-for`、class 与 style 绑定、表单 `v-model`（含组件 v-model）、组件 props / emit / slot、`watch` 侦听器、`onMounted` 生命周期、`Transition/TransitionGroup` 动画、`Teleport`、`defineAsyncComponent` 异步组件、动态组件 `<component :is>`、`v-html`。路由用 vue-router，状态管理用 Pinia。

## 上台讲解要点（代码逻辑）
- 入口 `main.js` → 挂载 `App.vue`
- 路由 `router/index.js`：4 个页面，`defineAsyncComponent` 懒加载，`afterEach` 改标题
- 状态 `stores/cart.js`：Pinia，`addToCart/changeQty/removeItem/clearCart`，`cartCount/totalPrice` 计算属性
- 数据 `data/products.js`：商品数组，`findProduct()` 按 id 查
- 商品列表过滤链：关键词 → 分类 → 价格 → 排序（全部在 `computed` 里）
- 组件通信：`ProductGrid` → `ProductCard`（props 下发数据，emit 上抛“加入购物车”）
