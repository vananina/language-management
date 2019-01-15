<template>
  <div class="menu-area">menu List
    <ul>
      <li v-for="menu in menuList">
        <router-link :to="{name : menu.path, params: { menuName : menu.name }}">{{menu.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "MenuLayout",
    data() {
      return {
        menuList: [
          {path: 'service', name: 'IMEZ Service'},
          {path: 'partner', name: 'IMEZ Partner'}
        ]
      }
    }
  }
</script>

<style scoped>
  .menu-area {
    border: 1px solid;
    height: 100%;
  }
</style>