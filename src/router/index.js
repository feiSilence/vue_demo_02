//引入vue-router
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//引入样式
import '@/assets/css/reset.css'
import '@/assets/css/header.css'
import '@/assets/css/goodsList.css'

//引入单页面
import Shop from '@/views/shop'
import Item from '@/views/item'
import Cart from '@/views/cart'

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savePosition) {
    if (savePosition) {
      return savePosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path: '/',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/item',
      name: 'Item',
      component: Item
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
