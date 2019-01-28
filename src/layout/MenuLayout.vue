<template>
  <div class="menu-area">
    <ul class="nav flex-column">
      <li class="nav-item" v-for="menu in menuList" :key="menu.name">
        <!--<router-link :to="{name : menu.path, props: { menuName : menu.name }}">{{menu.name}}</router-link>-->
        <a class="nav-link main-font-color" href="" @click="goToMenu(menu)">{{menu.name}}</a> <!--active-->
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
        var params = {
          menuName : menu.name,
          menuId: menu.id
        };
        console.log('menu:', params);
        this.$router.push({name : menu.name, path : menu.path, params: params});
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