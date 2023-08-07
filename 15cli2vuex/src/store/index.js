import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import moduleA from './modules/moduleA'
import getters from './getters'

//1.安装插件
Vue.use(Vuex)

/* //创建模块modulesA
const modulesA = {//如果这样写模块要定义在store的上面，否则会报错
  state:{
    name:'han'
  },
  mutations:{
    updatename(state,payload){
      state.name = payload
    }
  },
  actions:{
     aupdatename(context){
      setTimeout(() =>{
        console.log(context);//里面包含很多东西还包含根的相关方法，可以进行对象解构
        context.commit('updatename','hanmiao')
      })
     }
  },
  getters:{
    fullname(state){
      return state.name + '111'
    },
    fullname2(state,getters){
      return getters.fullname + '222'
    },
    fullname3(state,getters,rootstate){
      return getters.fullname2 + rootstate.counter
    }
  }
} */

const state = {
  state:{
    //保存状态，这些状态是响应式的，但是有要求要是在store state中初始化定义好了，其他界面可以取出来 $store.state.counter
    //单一状态树不要建立多个store
    counter:0,
    students:[
      {id:1,name:'A',age:18},
      {id:2,name:'B',age:24},
      {id:3,name:'C',age:35},
      {id:4,name:'D',age:10}
    ],
    info:{
      id:6,
      name:'F',
      age:20
    }
  }
}
//2.创建对象
const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules:{//可以将store化分为模块，并写相关属性
    a:moduleA
  }
   /* mutations:{//不要在mutations里面进行任何异步操作，应为devtools插件不会响应，数据出现分歧 
    
    //  1.vuex的store状态state更新的唯一方式mutations有两部分：事件类型（type）和回调函数（该函数的第一个参数就是state）
      //如：increment是事件类型，(state){state.counter++}是回调函数.
      //2.传入额外的参数被称为他的载荷（Payload）,有很多参数是，Payload通常是对象
    // increment(state){
      //state.counter++
    //},
    //3.可以把mutations里的类型弄成常量比如：文件mutations-types.js 
    [INCREMENT](state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    incrementcounter(state,count){
      state.counter += count
    },
    addstu(state,stu){
      state.students.push(stu)
    },
    addstudent(state){
      //state.info.age = 19
      //state.info['address'] = 'bj'//不是响应式的，但cli4是响应式的因为只有在state初始化好的才会响应式
      Vue.set(state.info,'address','北京')//这是响应式的
    },
    delstudent(state){
       //delete state.info.age//不是响应式的，但在cli4是响应式的
       Vue.delete(state.info,'age')//这个方法是响应式的
    }
  },
  actions:{//异步操作在这里写，默认属性是context：上下文,可以传多个参数 1.普通方法 2.推荐使用promise
    //  aupdateinfo(context,payload){//可以传递参数
    //   setTimeout(() => {
    //     context.commit('delstudent')
    //     console.log(payload);//输出对象，会把第二个参数对象赋值给他
    //     console.log(payload.message); 
    //     payload.success()
    //   },1000)
    //  }

     aupdateinfo(context,payload){
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          context.commit('delstudent')
          console.log(payload);//输出：我是携带的信息
          resolve('111')//调用then函数，并传递给then中的函数数据和打印
        },1000)
      })
     }
  }, 
  getters:{//类似于计算属性，
     powercounter(state){
      return state.counter * state.counter
     }, 
     more20stu(state){
       return state.students.filter(s => s.age > 20)//显示学生年龄大于20的信息
     },
     more20stulength(state,getters){
      return getters.more20stu.length//显示学生年龄大于20的信息
     },
    moreagestu(state){
      // return function(age){
      //   return state.students.filter(s => s.age > age)
      // }

      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  } */
})


//3.导出对象
export default store

/* ES6补充 ：对象解构*/
/* 
  const obj = {
  name:'han',
  age:20,
  height:200
}
const {name,age} = obj//意味着在对象中只取这两个属性，顺序可以随意写
 */