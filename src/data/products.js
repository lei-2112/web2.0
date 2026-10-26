// 商品示例数据（无需真实图片，用 emoji + 渐变色生成占位图，保证离线/部署可用）
export const categories = ['水果', '蔬菜', '零食', '饮品', '粮油']

export const products = [
  { id: 1, name: '赣南脐橙 5斤装', category: '水果', price: 29.9, oldPrice: 39.9, unit: '箱',
    emoji: '🍊', gradient: 'linear-gradient(135deg,#ff9a56,#ff6a3d)', rating: 4.8, sales: 1200,
    tags: ['当季', '爆款'], stock: 88, desc: '江西赣南核心产区现摘脐橙，皮薄多汁，甜度高达14%，富含维C，老人小孩都爱吃的应季水果。' },
  { id: 2, name: '红富士苹果 10斤', category: '水果', price: 39.9, oldPrice: 49.9, unit: '箱',
    emoji: '🍎', gradient: 'linear-gradient(135deg,#ff5f6d,#ff3b53)', rating: 4.7, sales: 860,
    tags: ['脆甜'], stock: 66, desc: '山东烟台红富士，果形端正、清脆多汁，甜脆化渣，家庭常备的健康果品。' },
  { id: 3, name: '阳光玫瑰葡萄 2斤', category: '水果', price: 25.0, oldPrice: 32.0, unit: '盒',
    emoji: '🍇', gradient: 'linear-gradient(135deg,#a8e063,#56ab2f)', rating: 4.9, sales: 540,
    tags: ['高甜', '新品'], stock: 40, desc: '自带玫瑰香气的阳光玫瑰，粒大无籽，脆甜爆汁，冷藏后风味更佳。' },
  { id: 4, name: '云南高山蓝莓 2盒', category: '水果', price: 22.9, oldPrice: 29.9, unit: '盒',
    emoji: '🫐', gradient: 'linear-gradient(135deg,#5b86e5,#36d1dc)', rating: 4.6, sales: 320,
    tags: ['花青素'], stock: 55, desc: '高山昼夜温差种植，果粉厚实，酸甜平衡，花青素含量高，护眼佳品。' },

  { id: 5, name: '有机番茄 3斤', category: '蔬菜', price: 12.9, oldPrice: 15.9, unit: '份',
    emoji: '🍅', gradient: 'linear-gradient(135deg,#ff4b2b,#ff416c)', rating: 4.5, sales: 780,
    tags: ['有机', '沙瓤'], stock: 120, desc: '自然成熟沙瓤番茄，酸甜多汁，生吃熟食皆宜，番茄炒蛋的最佳拍档。' },
  { id: 6, name: '云南小土豆 5斤', category: '蔬菜', price: 9.9, oldPrice: 12.9, unit: '袋',
    emoji: '🥔', gradient: 'linear-gradient(135deg,#c9a227,#8e6e26)', rating: 4.4, sales: 410,
    tags: ['粉糯'], stock: 200, desc: '高原种植红皮小土豆，粉糯香浓，炖煮炒炸都好吃，粉质细腻不噎人。' },
  { id: 7, name: '娃娃菜 2颗', category: '蔬菜', price: 6.9, oldPrice: 8.9, unit: '袋',
    emoji: '🥬', gradient: 'linear-gradient(135deg,#43e97b,#38f9d7)', rating: 4.5, sales: 290,
    tags: ['鲜嫩'], stock: 150, desc: '黄心娃娃菜，叶片嫩甜，清炒涮锅皆宜，上汤娃娃菜的经典食材。' },

  { id: 8, name: '每日坚果 30袋装', category: '零食', price: 49.9, oldPrice: 69.9, unit: '箱',
    emoji: '🥜', gradient: 'linear-gradient(135deg,#f7971e,#ffd200)', rating: 4.9, sales: 950,
    tags: ['健康', '囤货'], stock: 70, desc: '每日一袋科学配比，坚果+果干双重营养，独立小包锁鲜，办公室健康零食首选。' },
  { id: 9, name: '黑巧克力 礼盒装', category: '零食', price: 35.9, oldPrice: 45.9, unit: '盒',
    emoji: '🍫', gradient: 'linear-gradient(135deg,#614385,#516395)', rating: 4.7, sales: 210,
    tags: ['微苦'], stock: 45, desc: '72%可可黑巧，丝滑微苦回甘，低糖配方，情人节/日常犒劳自己的精致礼盒。' },
  { id: 10, name: '抹茶曲奇 双拼', category: '零食', price: 19.9, oldPrice: 24.9, unit: '盒',
    emoji: '🍪', gradient: 'linear-gradient(135deg,#11998e,#38ef7d)', rating: 4.6, sales: 175,
    tags: ['手工'], stock: 60, desc: '宇治抹茶+黄油原味双拼曲奇，酥松奶香，下午茶标配，甜而不腻。' },

  { id: 11, name: '冷萃无糖乌龙茶', category: '饮品', price: 45.0, oldPrice: 58.0, unit: '箱(12瓶)',
    emoji: '🧋', gradient: 'linear-gradient(135deg,#56ccf2,#2f80ed)', rating: 4.8, sales: 640,
    tags: ['0糖0脂'], stock: 90, desc: '低温冷萃工艺，茶香清爽回甘，0糖0脂0卡，健身控糖人群的快乐水。' },
  { id: 12, name: '原产咖啡豆 中度烘焙', category: '饮品', price: 68.0, oldPrice: 88.0, unit: '袋(500g)',
    emoji: '☕', gradient: 'linear-gradient(135deg,#6d4c41,#4e342e)', rating: 4.9, sales: 130,
    tags: ['现磨'], stock: 30, desc: '云南保山精品豆，中度烘焙果香突出，酸苦平衡，手冲/意式皆宜。' },

  { id: 13, name: '五常大米 10斤', category: '粮油', price: 59.9, oldPrice: 79.9, unit: '袋',
    emoji: '🍚', gradient: 'linear-gradient(135deg,#f6d365,#fda085)', rating: 4.8, sales: 720,
    tags: ['核心产区'], stock: 85, desc: '黑龙江五常核心产区稻花香，米粒饱满油亮，煮饭满屋飘香，空口也能吃两碗。' },
  { id: 14, name: '非转基因玉米油 5L', category: '粮油', price: 79.9, oldPrice: 99.9, unit: '桶',
    emoji: '🌽', gradient: 'linear-gradient(135deg,#fce38a,#f38181)', rating: 4.6, sales: 190,
    tags: ['压榨'], stock: 40, desc: '非转基因玉米胚芽压榨，烟点高油烟少，清淡不腻，家庭日常烹饪好油。' }
]

// 按 id 快速查找商品
export function findProduct(id) {
  return products.find((p) => p.id === Number(id))
}
