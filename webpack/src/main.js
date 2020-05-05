// import * as info from './js/math.js'  
// console.log(info);  

const info = require('./js/math');
console.log(info);
require("./css/index.css")



import Vue from 'vue'  

// const App = {
//   template:`<h1>{{message}}</h1>`,
//   data(){
//     return {
//       message : "hello"
//     }
//   }
// }
// new Vue({
//   el : "#div1" ,
//   template:`<App/>`,
//   components: {
//     App
//   }
// })
import App from "./Vue/App.Vue"
new Vue({
  el : "#div1",
  template: `<App/>`,
  components: {
    App
  }
})




