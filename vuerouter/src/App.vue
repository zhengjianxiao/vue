<template>
  <div id="app">
    <!-- <router-link to="/home" replace tag="button">home</router-link>
    <router-link to="/test" replace>test</router-link> -->
    
    <button @click="homeclick">home</button>
    <button @click="testclick">test</button>
    <router-link v-bind:to="'/user/' + userId" replace>user</router-link>
    <button @click="aboutclick">about</button>
    <!-- <router-link :to="{path: '/about',query: {name: 'zjx',age:18}}" replace>about</router-link> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId: 'zhangsan'
    }
  },
  methods: {
    homeclick(){
      // this.$router.push("/home")
      this.$router.replace("/home")
    },
    testclick(){
      // this.$router.push("/test")
      this.$router.replace("/test")
    },
    aboutclick(){
      // this.$router.push("/test")
      this.$router.replace({
        path: "/about",
        query: {
          name: "mm",
          age: 30
        }
      })
    }
  }
}
</script>

<style>

</style>
