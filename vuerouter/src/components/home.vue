<template>
  <div>
    <h2>home</h2>
    <router-link to="/home/news">news</router-link>
    <router-link to="/home/message">message</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "home",
    data(){
      return {
        path: "/home/news"
      }
    },
    //  created(){
    //   document.title = "home"
    // }
      activated(){
         //console.log(this.path)
      this.$router.push(this.path)
    },
    beforeRouteLeave(to , from , next){
      this.path = this.$route.path
       //console.log(this.path)
      next()
    }
  }
</script>

<style scope></style>