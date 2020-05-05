<template>
   <div>
   <h2 class="child">{{message}}</h2>
   </div> 
</template>

<script>
  export default {
    name: "Child",
    data(){
      return {
        message: "child"
      }
    }
  }
</script>

<style scoped>
  .child{
    color: yellow;
  }
</style>