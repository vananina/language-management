<template>
  <div class="menu-area">
    <ul class="nav flex-column">
      <li class="nav-item" v-for="menu in menuList" :key="menu.id">
        <router-link class="nav-link main-font-color" :to="menu.path">{{menu.menuName}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import data from "@/data/data";
  export default {
    name: "MenuLayout",
    data() {
      return {
        menuList: data.menuList
      }
    }
  }
</script>

<style scoped>
  .menu-area {
    width: 180px;
    height: 100%;
    border-right: 1px solid;
  }
  .menu-area ul {
    margin-top: 20px;
  }
</style>