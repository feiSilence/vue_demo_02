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

export default new Router({
  routes: [
    {
      path: '/',
      component: Shop
    }
  ]
})
