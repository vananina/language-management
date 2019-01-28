<template>
  <div class="container-fluid">
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
  .container-fluid {
   height: 100%; 
  }
</style>