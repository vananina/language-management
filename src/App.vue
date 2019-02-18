<template>
  <div class="container-fluid">
    <div class="main-container">
      <top-layout/>
      <div class="content-container">
        <menu-layout/>
        <router-view :key="$route.fullPath"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import TopLayout from '@/layout/TopLayout'  
  import MenuLayout from '@/layout/MenuLayout'

  export default {
    name: 'App',
    components: {TopLayout, MenuLayout}
  }
</script>
<style>
  .container-fluid {
   height: 100%; 
  }
  .main-container {
    height: 100%;
  }
  .content-container {
    display: flex;
    height: 100%;
  }
</style>