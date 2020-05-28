<template>
  <div id="app">
   <h2>{{$store.state.counter}}</h2>
   <!-- <button @click = "$store.state.counter++">+</button>
   <button @click = "$store.state.counter--">-</button> -->

   <button @click = "add">+</button>
   <button @click = "sub">-</button>

   <hellovuex :message = "message"></hellovuex>
  </div>
</template>

<script>
import hellovuex from "./components/hellovuex"
// import store from "./store/index.js"
export default {
  name: 'App',
  components: {
    hellovuex
  },
  data(){
    return {
      message : "Hello"
    }
  },
  methods: {
    add(){
      this.$store.commit("increament")
    },
    sub(){
       this.$store.commit("decrement")
    }
  }

}
</script>

<style>

</style>
