<template>
  <div>
    <div>
      <button class="btn btn-secondary btn-util" @click="addRow()">행추가</button>
    </div>
    <table class="table-lang" border="1">
      <tr>
        <th>대분류</th>
        <th>중분류</th>
        <th>코드</th>
        <th>한국어</th>
        <th>영어</th>
        <th>일본어</th>
        <th>중국어</th>
        <th>수정</th>
      </tr>
      <tr v-for="row in orderedList" :key="row.key">
        <td><input type="text" class="form-control" v-model="row.category"/></td>
        <td><input type="text" class="form-control" v-model="row.division"/></td>
        <td><input type="text" class="form-control" v-model="row.code"/></td>
        <td><input type="text" class="form-control" v-model="row.korLang"/></td>
        <td><input type="text" class="form-control" v-model="row.engLang"/></td>
        <td><input type="text" class="form-control" v-model="row.jpLang"/></td>
        <td><input type="text" class="form-control" v-model="row.cnLang"/></td>
        <td>
          <div class="row-utils-area">
            <button class="btn btn-secondary btn-util" @click="updateRow(row.key, row)">저장</button>
            <button class="btn btn-success btn-util" @click="copyRow(row)">복사</button>
            <button class="btn btn-danger btn-util" @click="deleteRow(row.key)">삭제</button>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

  import {db} from '../utils/firebase';
  import _ from 'lodash'

  export default {
    name: "LanguageTable",
    props: {
      serviceId: String, // 문자열 데이터만 허용한다.
      langList: Array
    },
    data() {
      return {
        dbTableInfo: {
          'service': 'imez-srv-lang',
          'partner': 'imez-ptn-lang'
        }
      }
    },
    methods:{
      addRow () {
        db.language.addRow(this.serviceId);
      },
      deleteRow (key) {
        db.language.deleteRowById(this.serviceId, key);
      },
      updateRow (key, data) {
        db.language.updateRowById(this.serviceId, key, data);
      },
      copyRow (data) {
        db.language.copyRow(this.serviceId, data);
      }
    },
    computed: {
      orderedList: function () {
        return _.orderBy(this.langList, 'order')
      }
    },
    beforeMount(){

    }
  }
</script>

<style scoped>
  .table-lang {
    width: 100%;
    margin-top: 10px; 
    border: 1px solid #c6cfe0;
  }

  .table-lang tr th {
    padding: 4px 16px;
  }
  .table-lang tr td {
    padding: 4px 4px;
  }
  .row-utils-area {
    width: 176px;
    display: flex;
    justify-content: space-between;
  }
</style>