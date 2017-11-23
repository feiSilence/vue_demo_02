# vue_demo_02
vue实战项目

commit_01 在根组件写入(头部导航)公共组件，用router编写单页面组件，newGoodsData.js模拟商品数据，在shop.vue单页面引入并渲染数据，将单个商品做成组件shop-item.vue并传入页面；
子级组件利用props接收父级传递的数据，给组件内元素添加事件处理函数；

commit_02 <router-link :to="{name: 'Item', query: {itemId:item.sku_info[itemIndex].sku_id}}"></router-link>，通过router-link跳转到商品详情页，通过query传递商品id，详情页组件item.vue通过data () {return {itemId: this.$route.query.itemId}}接收id数据，computed: {}过滤详情页数据itemsData并渲染数据{{itemsInfo.title}}
详情页中的交互，缩略图切换和颜色切换，@click="tableData(index)，获取循环数据中的index，通过id实现颜色切换，watch: {}监测数据变化

