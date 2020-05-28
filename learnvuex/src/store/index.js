import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 1000,
    students : [
      {id: 1, name: 'jon' , age: 22},
      {id: 2, name: 'mary' , age: 10},
      {id: 3, name: 'kk' , age: 18},
      {id: 4, name: 'koke' , age: 28}
    ]
  },
  mutations : {
    increament(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    }
  },
  getters : {
    powcounter(state){
      return state.counter * state.counter
    },
    fiterstu20(state){
      return state.students.filter(s => s.age > 20)
    }, 
    fiterstu(state){
      return age => state.students.filter(s => s.age > age)
    }
  }
})

export default store