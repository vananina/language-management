<template>
  <button type="button" class="btn btn-primary">json 다운로드</button>
</template>

<script>
  export default {
    name: "JsonExportButton",
    methods: {
      exportJsonFile() {
        var jsonStr;
        jsonStr = makeJsonData(list)
        exportFile(jsonStr)
      },
      exportFile(jsonStr) {
        // file down
      },
      makeJsonData(list) {
        var resultObj;
        var jsonStr;
        resultObj = makeList2Obj(list);
        jsonStr = JSON.stringify(resultObj)
        return jsonStr
      },
      makeList2Obj(list) {
        var resultObj;
        return resultObj;
      },
    }
  }
</script>

<style scoped>
</style>