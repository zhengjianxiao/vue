<template>
  <div>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.getters.powcounter}}</h2>
    <h2>{{$store.getters.fiterstu20}}</h2>
    <h2>{{$store.getters.fiterstu(10)}}</h2>
  </div>
</template>

<script>
  export default {
    name: "hellovuex",
    props: {
      message : String
    }
  }
</script>

<style >

</style>