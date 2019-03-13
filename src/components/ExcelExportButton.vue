<template>
  <button type="button" class="btn btn-primary" @click="onExcelExport()">excel 다운로드</button>
</template>

<script>

  import {db} from '../utils/firebase';
  import XLSX from 'xlsx';

  export default {
    name: "ExcelExportButton",
    props : {
      serviceId: String,
      langList: Array
    },
    data() {
      return {
        data: {}
      }
    },
    methods: {
      jsonToSheet() {

        console.log('jsonToSheet');

        /* Initial row */
        var header = ["category", "division", "code", "korLang", "engLang", "jpLang", "cnLang"]; 
        var ws = XLSX.utils.json_to_sheet([], { header: header, skipHeader: false });

        for(var i = 0; i < this.langList.length; i++) {
          var rowData = Object.assign({}, this.langList[i]);
          delete rowData.key;
          delete rowData.order;
          var rowArr = [rowData];
          XLSX.utils.sheet_add_json(ws, rowArr, {header: header, skipHeader: true, origin: -1});
        }

        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
        XLSX.writeFile(wb, this.serviceId + '-language.xlsx');
      },
      onExcelExport() {
        this.jsonToSheet();
      }
    },
    beforeMount(){
    }
  }
</script>

<style scoped>

</style>