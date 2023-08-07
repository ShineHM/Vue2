  //创建模块modulesA
  export default{
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
  }
