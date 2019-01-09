<template>
  <div class="container">
    <nav-layout></nav-layout>
    <div class="main-container">
      <menu-layout></menu-layout>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import MenuLayout from './components/MenuLayout'
  import NavLayout from './components/NavLayout'
  export default {
    name: 'App',
    components: {MenuLayout, NavLayout},
    data () {
      return {
        foo: 'bar'
      }
    }
  }
</script>
<style>
  .container {
   height: 100%; 
  }
  
  .main-container {
    display: flex;
    height: 100%;
  }
</style>