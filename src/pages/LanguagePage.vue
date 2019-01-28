<template>
  <div class="content-area">
    <div class="content-header">
      <h3>{{serviceId}} web</h3>
      <div class="button-area"> 
        <excel-export-button class="btn-util"></excel-export-button>
        <excel-import-button class="btn-util"></excel-import-button>
        <json-export-button class="btn-util"></json-export-button>
      </div>
    </div>
    <language-table class="lang-table" :serviceId="serviceId"></language-table>
  </div>
</template>

<script>
  import ExcelExportButton from '@/components/ExcelExportButton'
  import ExcelImportButton from '@/components/ExcelImportButton'
  import JsonExportButton from '@/components/JsonExportButton'
  import LanguageTable from '@/components/LangTable'

  export default {
    name: "LanguagePage",
    components: {
      ExcelExportButton, 
      ExcelImportButton, 
      JsonExportButton,
      LanguageTable},
    props : {
      serviceId: String // 문자열 데이터만 허용한다.
    },
    data() {
      return {
        // serviceName: this.$route.query.serviceName
      }
    },
    beforeMount(){
      console.log('[LangPage] route:', this.$route);
    }
  }
</script>

<style scoped>
.content-area {
  width: 100%;
  height: 100%;
  padding: 20px 30px;
}
.content-header {
  display: flex;
  justify-content: space-between;
}
.button-area {
  display: flex;
  justify-content: flex-end;
}
.btn-util {
  margin-right: 4px;
}
.lang-table {
  margin-top: 40px;
}
</style>