<template>
  <div id="app">
    <!-- <h2>{{message}}</h2> -->
    <!-- <h2>{{counter}}</h2>
    <button @click="$store.state.counter++">+</button>
    <button @click="$store.state.counter--">-</button>
    <hello-vuex :counter = '$store.state.counter'/> -->

    <!-- 模块A里面的内容 -->
    <h2>模块A里面的内容</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updatename">修改名字</button>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <button @click="asynupdatename">异步修改名字</button>

  <!-- 响应式信息 进行添加和删除-->
    <h2>{{$store.state.info}}</h2>
    <button @click="addstudent">添加信息</button>
    <button @click="delstudent">删除信息</button>

    <h2>{{$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>

    <button @click="addcounter(5)">+5</button>
    <button @click="addcounter(10)">+10</button>
    <button @click="addstu">添加学生</button>

    <hello-vuex counter='$store.state.counter'/>

  <!-- 需求：显示counter*counter（两种方法） -->
    <!-- <h2>{{$store.state.counter * $store.state.counter}}</h2> -->
    <h2>{{$store.getters.powercounter}}</h2>

  <!-- 需求：显示年龄大于二十的学生信息（两种方法：计算属性和getters） -->
    <!-- <h2>{{more20student}}</h2> -->
    <h2>{{$store.getters.more20stu}}</h2>

  <!-- 需求：还想获取年龄大于20的学生个数（两种方法） -->
    <h2>{{$store.getters.more20stu.length}}</h2>

  <!-- 把length定义为getters,可以使用前面定义的more20stu -->
    <h2>{{$store.getters.more20stu.length}}</h2>

  <!-- 需求：获取年龄大于age的，这个age是别人传进来的年龄，不能写死 -->
    <h2>{{$store.getters.moreagestu(10)}}</h2>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
import {INCREMENT} from './store/mutations-types'

export default {
  name: 'App',
  components:{
    HelloVuex
  },
  data(){
    return {
      message:'我是App组件',
      counter:0
    }
  },
  methods:{
    add(){
      //1.mutations的普通提交风格,传递值
      //this.$store.commit('increment')
      this.$store.commit(INCREMENT)
    },
    sub(){
      this.$store.commit('decrement')
    },
    addcounter(count){
      this.$store.commit('incrementcounter',count)//这里的count传递的是值
      /* 2.mutations的特殊提交风格，传递对象
      this.$store.commit({
        type:'incrementcounter',
        count//这里的count传递的是整个对象
      }) */
    },
    addstu(){
      const stu = {id:5,name:'E',age:35}
      this.$store.commit('addstu',stu)
    },
    addstudent(){
      this.$store.commit('addstudent')
    },
    delstudent(){
      //this.$store.commit('delstudent')//mutations的提交

      /* 传递多个参数（两种方法：1.传递函数：但是不优雅，2.推荐使用promise） */
      /* this.$store.dispatch('aupdateinfo',{//不优雅，携带的信息和回调的代码在一起
        message:'我是携带的信息',
        success:() => {
          console.log('里面已经完成了');
        }
      }) */

      this.$store.dispatch('aupdateinfo','我是携带的信息')//这行代码会运行promise
      .then(res => {
        console.log('里面已经完成了');
        console.log(res);//111
      })
    },

    /* 与模块A相关代码 */
    updatename(payload){
    this.$store.commit('updatename','miao')
    },
    asynupdatename(){
      this.$store.dispatch('aupdatename')
    }
  },
  /* computed:{
    // more20student(){
    //   return this.$store.state.students.filter(s=> {return s.age >=20})
    // } 
    more20student (){
      return this.$store.state.students.filter(s => s.age > 20)//年龄大于20的
      return this.$store.state.students.filter(s => s.age > 20).length//年龄大于20的个数
    }
  } */

  
}
</script>

<style>

</style>
