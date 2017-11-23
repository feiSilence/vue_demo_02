<template>
	<div id="main">
		<div>下面是index单页面</div>
		<div class="gray-box">
			<shop-item key="index" v-for="item,index in goodsList" :item="item"></shop-item>
		</div>
	</div>
</template>


<script>
import goodData from '@/lib/newGoodsData'
import shopItem from '@/components/shop-item'

export default {
  data () {
    return {
      goodsList: goodData
    }
  },
  components: {
  	shopItem
  }
}
</script>


