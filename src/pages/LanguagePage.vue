<template>
  <div>
    다국어 페이지 입니다. {{menuName}}
    <import-export-buttons></import-export-buttons>
    <language-table :menuName="menuName"></language-table>
  </div>
</template>

<script>
  import ImportExportButtons from '@/components/ExcelImportButton'
  import LanguageTable from '@/components/LangTable'

  export default {
    name: "LanguagePage",
    components: {ImportExportButtons, LanguageTable},
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