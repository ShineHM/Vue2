import {INCREMENT} from './mutations-types'

  export default{ //
    /* 不要在mutations里面进行任何异步操作，应为devtools插件不会响应，数据出现分歧 */
    
    /*  1.vuex的store状态state更新的唯一方式mutations有两部分：事件类型（type）和回调函数（该函数的第一个参数就是state）
      如：increment是事件类型，(state){state.counter++}是回调函数.
      2.传入额外的参数被称为他的载荷（Payload）,有很多参数是，Payload通常是对象
    */
    /* increment(state){
      state.counter++
    }, */
    /* 3.可以把mutations里的类型弄成常量比如：文件mutations-types.js */
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
  }