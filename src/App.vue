<template>
  <div>
    <nav-layout></nav-layout>
    <menu-layout></menu-layout>
    <router-view></router-view>
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

</style>