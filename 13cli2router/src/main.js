import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
  /* runtime=compile方式:template--解析为-->ast(抽象语法树)-->render函数-->vdom(虚拟dom)-->UI
  components: { App },
  template: '<App/>' */

  /* runtime-only方式:render-->vdom-->UI (1.性能更高，2.代码量更少)*/
  //render:h => h(App) //箭头函数

  //runtime-only方式:箭头函数相当于下面函数表达式
  /* render:function (h){
    return h(App)
  } */

  //render演变过程
 // render:function(createElement){
    //1.普通用法：createElement('标签',{标签的属性}，[''])
    /* return createElement ('h2',{class:'box'},['Hello World'])//Hello World */
    /* return createElement('h2',
      {class:'box'},
      ['Hello World',createElement('button',['按钮'])]) */

    //2.传入组件对象，这时就是从render-->vdom-->UI
    /* return createElement(App)//不会再经过template--解析为-->ast(抽象语法树)过程
    //为什么他组件中的template是由是处理的，这时dom元素中不在含有template，因为他由vue-template-compiler处理了 */
 // }
})
