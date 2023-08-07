
  export default{//异步操作在这里写，默认属性是context：上下文,可以传多个参数 1.普通方法 2.推荐使用promise
    /* aupdateinfo(context,payload){//可以传递参数
    setTimeout(() => {
      context.commit('delstudent')
      console.log(payload);//输出对象，会把第二个参数对象赋值给他
      console.log(payload.message); 
      payload.success()
    },1000)
    } */

    aupdateinfo(context,payload){
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          context.commit('delstudent')
          console.log(payload);//输出：我是携带的信息
          resolve('111')//调用then函数，并传递给then中的函数数据和打印
        },1000)
      })
    }
  }


