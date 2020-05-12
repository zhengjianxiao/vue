<template>
  <div class="tabbaritem" @click="baritemclick">
      <div v-if="isactive">
        <slot name="tabbaractive"></slot>
      </div>
      <div v-else>
        <slot name="tabbarimg"></slot>
      </div>
      <div :style="activestyle">
        <slot name="tabbartext"></slot>
      </div>       
  </div>
</template>

<script>
export default {
  name: "tabbaritem",
  props : {
    path: String,
    activecolor : {
        type: String,
        default: "red"
      }
  },
  data() {
    return {
      
    }
  },
  methods : {
    baritemclick () {
      this.$router.push(this.path)
    }
     },
  computed: {
    isactive() {
      return this.$route.path == this.path
    },
    activestyle() {
      return this.isactive ? {color: this.activecolor} : {}
    }
  }
};
</script>

<style  scoped>
.tabbaritem{
  text-align: center;
  flex : 1;
}
.tabbaritem img{
  height: 24px;
  width: 24px;
  vertical-align: middle;
  margin: 2px 0;
}
</style>