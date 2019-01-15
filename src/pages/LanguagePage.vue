<template>
  <div>
    다국어 페이지 입니다. {{menuName}}
    <import-export-buttons></import-export-buttons>
    <language-table :menuName="menuName"></language-table>
  </div>
</template>

<script>
  import ImportExportButtons from '@/components/ImportExportButtons'
  import LanguageTable from '@/components/LanguageTable'

  export default {
    name: "LanguagePage",
    components: {ImportExportButtons, LanguageTable},
    props : {
      menuName: String // 문자열 데이터만 허용한다.
    },
    data() {
      return {
      }
    },
    mounted() {
      // props으로 받으면 자신의 데이터와 마찬가지로 this로 사용할 수 있게 된다.
      console.log(this.menuName)
    }
  }
</script>

<style scoped>

</style>