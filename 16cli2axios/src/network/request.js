import axios from 'axios'

export function request(config){
  //1.创建axios实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',//baseURL的URL一定要大写，不然会报错
    timeout:5000
  })

  //2.axios的拦截器
  //2.1请求拦截的作用例子：eg1：config中的一些信息不符合服务器要求，可以在拦截的时候加上一些其他的
                        //eg2:每次发送网络请求时，希望在界面中显示一个请求的图标，请求时加动画，拦截住，请求成功时去动画
                        //eg3:某些网络请求比如登录携带token(令牌)，必须携带特殊信息，用户没登录时可以拦截，然后跳转到登录的地方
  instance.interceptors.request.use(config =>{
    console.log(config);
    return config//拦截后要把信息返回，要不然就那不到信息
  },err => {
    console.log(err);
  })

  //2.2响应拦截
  instance.interceptors.response.use(res =>{
    console.log(res);
    return res.data//不返回会undefined，data里的数据是我们想要的
  },err => {
    console.log(err);
  })

  //3.发送真正的网络请求
  return instance(config)//instance(config)他的1返回值就是promise，因为axios实例的返回值类型继承了promise
}

/* 方法三
export function request(config){
  
  return new Promise((resolve,reject) => {
    //创建axios实例
    const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',//baseURL的URL一定要大写，不然会报错
    timeout:5000
    })
    instance(config)
    .then(res =>{
      resolve(res)
    }).catch(err =>{
      reject(err)
    })
  })
} */
  


/* 方法二
export function request(config){
  //创建axios实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',//baseURL的URL一定要大写，不然会报错
    timeout:5000
  })
  //发送真正的网络请求
  instance (config.baseconfig)
  .then(res => {
   // console.log(res);
    config.success(res)
  }).catch(err => {
    //console.log(err);
    config.failure(err)
  })
} */


/* 方法一
export function request(config,success,failure){
  //创建axios实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',//baseURL的URL一定要大写，不然会报错
    timeout:5000
  })
  //发送真正的网络请求
  instance (config)
  .then(res => {
    console.log(res);
    success(res)
  }).catch(err => {
    console.log(err);
    failure(err)
  })
} */