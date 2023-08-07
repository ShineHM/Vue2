<template>
  <div id="app">
    <div>{{result}}</div>
    <h2>------------------</h2>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  components: { 
  },
  data(){
    return{
      result:''
    }
  },
  created(){
    axios({
      url:'http://123.207.32.32:8000/home/multidata'
    }).then(res =>{
      //console.log(res);
      this.result = res;
    })
  }
}
</script>


<style>

</style>
