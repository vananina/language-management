<template>
  <div class="content-area">
    <div class="content-header">
      <h3>{{menuId}} web</h3>
      <div class="button-area"> 
        <excel-export-button class="btn-util" :serviceId="menuId"></excel-export-button>
        <excel-import-button class="btn-util" :serviceId="menuId"></excel-import-button>
        <json-export-button class="btn-util" :serviceId="menuId" :langList="langList"></json-export-button>
      </div>
    </div>
    <test-component></test-component>
    <language-table class="lang-table" :serviceId="menuId" :langList="langList"></language-table>
  </div>
</template>

<script>

  import ExcelExportButton from '@/components/ExcelExportButton'
  import ExcelImportButton from '@/components/ExcelImportButton'
  import JsonExportButton from '@/components/JsonExportButton'
  import TestComponent from '@/components/TestComponent'
  import LanguageTable from '@/components/LangTable'

  import {db} from '../utils/firebase';

  export default {
    name: "LanguagePage",
    components: {
      ExcelExportButton, 
      ExcelImportButton, 
      JsonExportButton,
      TestComponent,
      LanguageTable
    },

    props: [
      'menuId'
    ],

    data() {
      return {
        langList: []
      }
    },
    created() {
      db.language.getRows(this.menuId, function (list) {
        this.langList = list;
      }.bind(this));
      console.log('props: ', this.menuId);
      console.log('created : ', this.$route);
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
  height: 38px;
}
.lang-table {
  margin-top: 40px;
}
</style>