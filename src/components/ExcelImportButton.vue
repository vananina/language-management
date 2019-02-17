<template>
  <span>
    <input id="file-excel-import" type="file" :accept="SheetJSFT" @change="_change" style="display: none;">
    <button type="button" class="btn btn-primary" @click="onExcelImport()">excel 업로드</button>
  </span>
</template>

<script>

  import {db} from '../utils/firebase';
  import XLSX from 'xlsx';

  const make_cols = refstr => Array(XLSX.utils.decode_range(refstr).e.c + 1).fill(0).map((x,i) => ({name:XLSX.utils.encode_col(i), key:i}));
  const _SheetJSFT = [
    "xlsx", "xlsb", "xlsm", "xls", "xml", "csv", "txt", "ods", "fods", "uos", "sylk", "dif", "dbf", "prn", "qpw", "123", "wb*", "wq*", "html", "htm"
  ].map(function(x) { return "." + x; }).join(",");
  
  export default {
    name: "ExcelImportButton",
    props : {
      serviceId: String,
      langList: Array
    },
    data() {
      return {
        data: {},
			  SheetJSFT: _SheetJSFT
      }
    },
    methods: {
      _change(evt) {
        const files = evt.target.files;
        if(files && files[0]) {
          this._file(files[0]);
        }
      },
      _file(file) {
        /* Boilerplate to set up FileReader */
        const reader = new FileReader();
        reader.onload = (e) => {
          /* Parse data */
          const bstr = e.target.result;
          const wb = XLSX.read(bstr, {type:'binary'});
          /* Get first worksheet */
          const wsname = wb.SheetNames[0];
          const ws = wb.Sheets[wsname];
          /* Convert array of arrays */
          const data = XLSX.utils.sheet_to_json(ws, {header:1});
          /* Update state */
          this.data = data;
          this.cols = make_cols(ws['!ref']);

          this.addRowsByExcel(this.data);
        };
        reader.readAsBinaryString(file);
      },
      addRowsByExcel(data) {
        console.log('data', data);

        // db.language.deleteAllRows(this.serviceId, this.langList);
        db.language.addRowsByExcel(this.serviceId, data);
      },
      onExcelImport() {
        document.getElementById('file-excel-import').click();
      }
    },
    beforeMount(){
    }
  }
</script>

<style scoped>

</style>
