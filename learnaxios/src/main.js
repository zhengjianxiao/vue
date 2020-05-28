import Vue from 'vue'
import App from './App'
// import axios from 'axios'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }).then(res => {
//   console.log(res)
// })

// axios.defaults.baseURL = "http://123.207.32.32:8000";
// axios.defaults.timeout = 5000;

// axios.all([
//   {
//     url: 'home/multidata'
//   },
//   {
//     url:'home/data', 
//     params: {
//       type: 'sell',
//       page: 3
//     }
//   }
// ]).then(res => {
//   console.log(res);
// })

// axios.all([
//   {
//     url: 'home/multidata'
//   },
//   {
//     url:'home/data', 
//     params: {
//       type: 'sell',
//       page: 3
//     }
//   }
// ]).then(axios.spread((res1 , res2) => {
//   console.log(res1);
//   console.log(res2)
// }))

// const inter1 = axios.create({
//   baseURL : 'http://123.207.32.32:8000',
//   timeout : 5000
// })

// inter1({
//   url : "home/multidata"
// }).then(res => {
//   console.log(res);
// })


import {inter1} from "./network/index.js"
// inter1({
//   url : "home/multidata"
// },
// success => console.log(success),
// error => console.log(error));

inter1({
  url : "home/multidata"
}).then(res => console.log(res)).catch(err => console.log(err))
