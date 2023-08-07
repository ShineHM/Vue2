import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

/* axios({//自带promise，axios.get(url,data,config)
  url:'http://123.207.32.32:8000/home/multidata',//接口不支持post请求，可以使用jsonp
  method:'get'//请求方式
}).then(res => {
  console.log(res);
}) */

//发送并发请求
/* axios.all([axios({
  url:'http://123.207.32.32:8000/home/multidata'
}),axios({
  url:'http://123.207.32.32:8000/home/data',
  params:{
    type:'sell',
    page:5
  }
})]).then(results => {
  console.log(results);
}) */

/* axios.all([axios({
  url:'http://123.207.32.32:8000/home/multidata'
}),axios({
  url:'http://123.207.32.32:8000/home/data',
  params:{
    type:'sell',
    page:5
  }
})]).then(axios.spread((res1,res2) => {//有一个方法可以展开数组,这里写了数组的解构
  console.log(res1);
  console.log(res2);
})) */

/* 数组的解构
const arr = ['han','miao']
const [arr1,arr2] = arr;//也可以在数组中拿到元素 */

//封装request函数
import {request} from './network/request'

//方法三和最终
request({
  url:'/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err =>{
  console.log(err);
})

/* 方法二
request({
  baseconfig:{

  },
  success:function(res){

  },
  failure:function(err){

  }
}) */

/* 方法一
request({
  url:'/home/multidata'
},res =>{
  console.log(res);
},err =>{
  console.log(err);
}) */