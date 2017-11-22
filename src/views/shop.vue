<template>
	<div id="main">
		<div>下面是index单页面</div>
		<input type='text' style='width:200px' />
		<div class="gray-box">
			<shop-item key="index" v-for="item,index in goodsList" :item="item"></shop-item>

			<div class="item-box" key="index" v-for="item,index in goodsList" style="float:left;">
				<img :alt="item.name" :src=" item.sku_info[0].ali_image+'?x-oss-process=image/resize,w_206/quality,Q_80/format,webp' " style="opacity: 1;"
				>
				<h6>{{item.name}}</h6>
				<h4>{{item.name_title}}</h4>
				<div class="params-colors">
				  <ul class="colors-list">
				    <li key="index" v-for="sku,index in item.sku_info">
				      <a href="javascript:;" :title="sku.spec_json.show_name"><img :src="'http://img01.smartisanos.cn/'+ sku.spec_json.image +'/20X20.jpg'"></a>
				    </li>
				  </ul>
				</div>
			</div>
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


