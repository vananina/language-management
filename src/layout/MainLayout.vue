<template>
  <div>
    <top-layout></top-layout>
    <div class="main-container">
      <menu-layout></menu-layout>
      <router-view></router-view>
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

</style>