<template>
  <div>
    <tabbar>
        <tabbaritem path = "/home" activecolor = "yellow">
           <img slot="tabbaractive" src="~assets/img/search.png" alt />
          <img slot="tabbarimg" src="~assets/img/book.png" alt />
          <div slot="tabbartext">首页</div>
        </tabbaritem>
        <tabbaritem path = "/catgrory">
          <img slot="tabbarimg" src="~assets/img/book.png" alt />
          <img slot="tabbaractive" src="~assets/img/search.png" alt />
          <div slot="tabbartext">分类</div>
        </tabbaritem>
        <tabbaritem path = "/shopcar">
          <img slot="tabbarimg" src="~assets/img/book.png" alt />
          <img slot="tabbaractive" src="~assets/img/search.png" alt />
          <div slot="tabbartext">购物车</div>
        </tabbaritem>
        <tabbaritem path = "/profile">
          <img slot="tabbarimg" src="~assets/img/book.png" alt />
          <img slot="tabbaractive" src="~assets/img/search.png" alt />
          <div slot="tabbartext">我的</div>
        </tabbaritem>
    </tabbar>
  </div>
</template>

<script>
import tabbar from "./tabbar/tabbar.vue"
import tabbaritem from "./tabbar/tabbaritem.vue"
  export default {
    name: "maintabbar",
    components : {
      tabbar,
      tabbaritem
    }
  }
</script>

<style  scoped>
</style>