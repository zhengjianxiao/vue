<template>
  <div>
<h2>user</h2>
<h2>{{$route.params.userId}}</h2>
<h3>{{userId}}</h3>
  </div>
</template>

<script>
  export default {
    name: "user",
    computed: {
      userId(){
        return this.$route.params.userId
      }
    }
  }
</script>

<style  scoped>

</style>