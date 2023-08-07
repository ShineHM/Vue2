export default{//类似于计算属性，
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
      /* return function(age){
        return state.students.filter(s => s.age > age)
      } */
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  }
