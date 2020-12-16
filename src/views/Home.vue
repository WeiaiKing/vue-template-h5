<template>
  <div class="tabbar">
    <router-view></router-view>
    <tab-bar>
      <tab-item path="/index" activeColor="blue">
        <img src="@/assets/icon/start.png" slot="item-icon" />
        <img src="@/assets/icon/start1.png" slot="item-icon-active" />
        <div slot="item-text">首页</div>
      </tab-item>
      <tab-item path="/selling" activeColor="blue">
        <img src="@/assets/icon/selling.png" slot="item-icon" />
        <img src="@/assets/icon/selling1.png" slot="item-icon-active" />
        <div slot="item-text">活动</div>
      </tab-item>
      <tab-item path="/card" activeColor="blue">
        <img src="@/assets/icon/cart.png" slot="item-icon" />
        <img src="@/assets/icon/cart1.png" slot="item-icon-active" />
        <div slot="item-text">购物车</div>
      </tab-item>
      <tab-item path="/mine" activeColor="blue">
        <img src="@/assets/icon/mine.png" slot="item-icon" />
        <img src="@/assets/icon/mine1.png" slot="item-icon-active" />
        <div slot="item-text">我的</div>
      </tab-item>
    </tab-bar>
  </div>
</template>
<script>
import TabItem from '@/components/tabbar/TabItem.vue'
import TabBar from '@/components/tabbar/TabBar.vue'
export default {
  name: 'welcome',
  components: {
    TabBar,
    TabItem
  }
}
</script>
<style lang="scss" scoped>
</style>
