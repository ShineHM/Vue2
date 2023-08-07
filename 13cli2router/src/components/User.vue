<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户内容，呵呵呵</p>
    <!-- <h2>{{$route.params.userid}}</h2> -->
    <h2>{{userid}}</h2>
  </div>
</template>

<script>
export default {
  name:'User',
  computed:{
    userid(){
      //传递参数的两种方式：params和query
      return this.$route.params.userid //$route表示是活跃的路由就用哪个路由 
    }
  }
  /* created(){//方法一：生命周期函数created，创建时进行回调
    // console.log('created');
    document.title = '用户';
  } */
}
</script>

<style>

</style>