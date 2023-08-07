<template>
  <div id="app">
    <!--router-link属性
      1. 默认渲染成a标签,使用tag可以修改
      2.默认情况下浏览器的返回按钮可以点击，若不需要可以使用replace
      3.当我们点击切换组件时，他会给当前元素设置一个叫 router-link-active的class属性
        可通过这个class修改颜色或一些其他css样式
      4.如果想修改设置 可以在index.js文件中使用linkActiveClass:'active'来修改router-link默认的名称

    <router-link to="/home" tag="button" replace>首页</router-link> 
    <router-link to="/about" tag="button" replace>关于</router-link> 
    <router-link :to="'/user/' + userid" tag="button" replace>用户</router-link> -->

    <router-link to="/home"  replace>首页</router-link> 
    <router-link to="/about"  replace>关于</router-link> 
    <router-link :to="'/user/' + userid"  replace>用户</router-link>
    <!-- <router-link to="/profile"  replace>档案</router-link> -->
    <!-- 添加了query后点击时url变成 http://localhost:8080/profile?name=hanmiao&age=18 -->
    <router-link :to="{path:'/profile', query:{name:'hanmiao',age:18}}"  replace>档案</router-link>
    <!-- 使用button来传递数据 -->
    <button @click='userclick'>用户</button>
    <button @click="profileclick">档案</button>
    <!-- keep-alive的属性：include字符串和正则表达式匹配的会被缓存和exclude相反 例子：组件名字，之间不能有空格否则无效-->
    <keep-alive exclude="Profile,User"><router-view></router-view></keep-alive><!--占位表示组件显示在什么位置  keep-alive不会一直销毁和创建提高性能-->
     

    <!-- <button @click="homeClick">home</button>
    <button @click="aboutClick">about</button> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userid:'queen',
    }
  },
  methods:{
    homeClick(){
      //console.log('1');
      this.$router.push('/home');
    },
    aboutClick(){
      //console.log('2');
      this.$router.push('/about');
    },
    userclick(){
      this.$router.push('/user/'+this.userid);
    },
    profileclick(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'hanmiao',
          age:18
        }
      }
      )
    }
  }
}
</script>

<style>
  /* .router-link-active{
    color:red; */    /* 通过router-link修改class */
    .active{
      color:red;
    }
</style>
