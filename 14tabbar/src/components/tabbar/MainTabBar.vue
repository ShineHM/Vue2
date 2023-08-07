<template>
   <tab-bar>
      <tab-bar-item path='/home' activeColor='blue'>
        <img slot="item-icon" src="../../assets/img/tabbar/首页.svg" alt="" >
        <img slot="item-icon-active" src="../../assets/img/tabbar/点首页.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <img slot="item-icon" src="../../assets/img/tabbar/分类.svg" alt="" >
        <img slot="item-icon-active" src="../../assets/img/tabbar/点分类.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/cart'>
        <img slot="item-icon" src="../../assets/img/tabbar/购物车.svg" alt="" >
        <img slot="item-icon-active" src="../../assets/img/tabbar/点购物车.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
        <img slot="item-icon" src="../../assets/img/tabbar/我的.svg" alt="" >
        <img slot="item-icon-active" src="../../assets/img/tabbar/点我的.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
  import TabBar from './TabBar.vue'
  import TabBarItem from './TabBarItem.vue'
export default {
  name:'MainTabBar',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>