<template>
  <div class="main-container">
    <top-layout></top-layout>
    <div class="content-container">
      <menu-layout></menu-layout>
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>

<script>
  import TopLayout from '@/layout/TopLayout'
  import MenuLayout from '@/layout/MenuLayout'

  export default {
    name: "MainLayout",
    components: {TopLayout, MenuLayout}
  }
</script>

<style scoped>
.main-container {
  height: 100%;
}
.content-container {
  display: flex;
  height: 100%;
}
</style>