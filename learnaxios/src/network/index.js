import axios from 'axios'
//回调函数  
// export function inter1 (config , success , failure) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   instance(config).then((res) => {
//     success(res);
//   }).catch((err) => {
//     failure(err);
//   })
// }

//promise  

// export function inter1 (config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
  
//     instance(config).then((res) => {
//       resolve(res)
//     }).catch((err) => {
//       reject(err)
//     })
//   })
  
// }


//直接return instance就是返回一个promise
export function inter1 (config) {
  
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })
    
    //拦截请求
    instance.interceptors.request.use(res => {
      console.log(res)
      return res  //拦截之后要返回回去
    },err => console.log(err))

    //拦截响应
    instance.interceptors.response.use(res => {
      console.log(res)
      return res.data
    },err => console.log(err))
  
   return instance(config)
}