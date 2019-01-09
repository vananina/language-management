<template>
  <div>
    dashboard
    <control-panel></control-panel>
    <board-table :menuName="menuName"></board-table>
  </div>
</template>

<script>
  import ControlPanel from './ControlPanel'
  import BoardTable from './BoardTable'
  export default {
    name: "LanguageManageDashBoard",
    components: {ControlPanel, BoardTable},
    props : {
      menuName: String // 문자열 데이터만 허용한다.
    },
    data() {
      return {
      }
    }
  }
</script>

<style scoped>

</style>