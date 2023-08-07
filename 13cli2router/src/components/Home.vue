<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容，哈哈哈</p>

    <router-link to="/home/news"  replace>新闻</router-link> 
    <router-link to="/home/message"  replace>消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:"Home",
  data(){
    return{
      path:'/home/news'
    }
  },
  /* 完成需求：改变浏览器页面的title，使用生命周期函数和使用路由导航守卫 在index.js文件使用导航守卫*/

  created(){//方法一： 生命周期函数created，创建时进行回调
    console.log('home created');
    document.title = '首页';
  },
  destroyed(){
    console.log('home destroyed');
  },
  /* activated和deactivated只有使用keep-alive时才可使用这两个函数 */
  activated(){
    console.log('home activated');
    this.$router.push(this.path);
  },
  /* deactivated(){
    console.log('home deactivated');
    this.path = this.$router.path;
  }, */
	beforeRouteLeave(to,form,next) {
		console.log(this.$router.path);
		this.path = this.$router.path;
		next()
	}
	

  /* mounted(){//当我们摸班中<template>内容被挂载到dom上会进行回调

  },
  updated(){//当界面发生更新时，就会回调

  } */

}
</script>

<style>

</style>