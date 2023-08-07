//配置路由相关信息
import Vue from 'vue'
import router from 'vue-router'
/* import Home from '@/components/Home'
import About from '../components/About'
import User from '../components/User' */

/* ES6懒加载写法 一个组件对应一个js文件*/
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

//1.通过Vue.use(插件)，安装插件
Vue.use(router)

//2.创建router对象。并传入到vue实例中
export default new router({
  routes: [
    {
      path:'',
      redirect:'/home'//重定向
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta:{
        title:'首页'
      },
      children:[
        /* {
          path:'',
          redirect:'news' 
        }, */
        {
          path:'news',//这里可以不用使用/news，因为他会自动的在home中寻找并加上
          component:HomeNews
        },
        {
          path:'message',
          component:HomeMessage
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta:{
        title:'关于'
      }
    },
    {
      path: '/user/:userid',
      name: '/User',
      component: User,
      meta:{
        title:'用户'
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        title:'档案'
      }
    }
  ],
  mode:'history',
  linkActiveClass:'active'//修改router-link默认的名称
})

/* 全局守卫 */
/* 前置守卫（guard） */
/* router.beforeEach((to,from,next) => {//错误：不知道为什么一直报错说beforeEach不是函数
  //从from跳转到to
  document.title = to.matched[0].meta.title;//为了表示路由的嵌套
  next();
}) */

/* 后置钩子（hook） */
/* router.afterEach((to,from) =>{
  console.log('---');
}) */
