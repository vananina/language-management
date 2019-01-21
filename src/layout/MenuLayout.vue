<template>
  <div class="menu-area">menu List
    <ul>
      <li v-for="menu in menuList" :key="menu.name">
        <!--<router-link :to="{name : menu.path, props: { menuName : menu.name }}">{{menu.name}}</router-link>-->
        <a href="" @click="goToMenu(menu)">{{menu.name}}</a>
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
    },
    methods: {
      goToMenu : function (menu) {
        this.$router.push({name : menu.name, path : menu.path, params: {menuName : menu.name}});
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