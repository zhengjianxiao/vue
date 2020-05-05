<template>
<div>
  <h1 class="title">{{message}}</h1>
  <Child></Child>
</div>
</template>


<script>
import Child from "./Child.Vue"
  export default {
    name: "App",
    components: {
      Child
    },
    data() {
      return {
        message : "hello"
      }
    }
  }
</script>


<style scoped>
  .title {
    color: red;
  }
</style>