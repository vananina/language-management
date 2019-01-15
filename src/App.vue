<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
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