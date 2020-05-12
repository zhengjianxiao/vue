<template>
  <div id="tabbar">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabbar"
};
</script>

<style  scoped>
#tabbar {
  display: flex;
  align-items: center;
  background-color: #ebe6e6;
  height: 49px;
  box-shadow: 0 -2px 2px rgba(0, 0, 0, 0.2);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
@media screen and (min-width: 780px){
#tabbar {
  top: 0;
}
}
</style>