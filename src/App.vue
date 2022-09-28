<template>
  <router-view/>
</template>

<script>
  export default{
    name:"home",
    setup() {
    }
  }
</script>

<style>
  body, html{
    padding: 0;
    margin: 0;
    overflow: hidden;
    font-family: 'kangkang';
    cursor: url('./assets/mouse/Arrow.ico'), default;
  }
  .el-button, .el-menu-item, .el-sub-menu__title, .el-collapse-item__header, .el-link {
    cursor: url('./assets/mouse/Hand.ico'), default !important;
  }
</style>
