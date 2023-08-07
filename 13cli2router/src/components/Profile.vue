<template>
  <div>
    <h2>我是Profile组件</h2>
    <!-- 显示url中的qurey信息 -->
    <h2>{{$route.query}}</h2>
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>
  </div>
</template>

<script>
export default {
  name:'Profile',
  
  /* created(){//方法一：生命周期函数created，创建时进行回调
    // console.log('created');
    document.title = '档案';
  } */
}
</script>

<style>

</style>