<template>
  <span>
    <button type="button" class="btn btn-primary" @click="onExcelImport()">json 생성</button>
    <div class="box-json" v-if="showJsonBox">
      <pre id="box-pre" class="box-pre">{{jsonStr}}</pre>
      <button class="btn-copy-json btn btn-secondary" @click="copyJson()">복사</button>
      <button class="btn-close-box-json btn btn-secondary" @click="closeJsonBox()">닫기</button>
    </div>
  </span>
</template>

<script>
  export default {
    name: "JsonExportButton",
    props: {
      serviceId: String, // 문자열 데이터만 허용한다.
      langList: Array
    },
    data() {
      return {
        jsonStr: '',
        showJsonBox: false
      }
    },
    methods: {
      onExcelImport() {
        this.exportJson();
        this.showJsonBox = true;
      },
      exportJson() {
        var resultObj;
        resultObj = this.makeList2Obj(this.langList);
        this.jsonStr = resultObj;
      },
      makeList2Obj(list) {
        var resultObj = {};
        var listLen = list.length;

        for (var i = 0; i < listLen; i++) {
          var data = list[i];
          resultObj[data.category] = resultObj[data.category] || {};
          resultObj[data.category][data.division] = resultObj[data.category][data.division] || {};
          resultObj[data.category][data.division][data.code] = data.korLang;
        }

        return resultObj;
      },
      copyJson() {

        const copyText = document.getElementById("box-pre").textContent;
        const textArea = document.createElement('textarea');
        textArea.textContent = copyText;
        document.body.append(textArea);
        textArea.select();
        document.execCommand("copy");

        alert('복사되었습니다.');
      },
      closeJsonBox() {
        this.showJsonBox = false;
      }
    }
  }
</script>

<style scoped>

.box-json {
  width: 600px;
  height: calc(100% - 200px);
  position: fixed;
  right: 26px;
  top: 100px;
  background: #f5f4f4;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 20px 30px;
  overflow: scroll;
  box-shadow: 3px 3px 3px 3px #d4d4d4;
}

.box-pre {
  height: 100%;
}

.btn-copy-json {
  position: absolute;
  top: 5px;
  right: 65px;
}

.btn-close-box-json {
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>