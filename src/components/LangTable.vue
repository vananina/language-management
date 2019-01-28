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
      <tr v-for="row in langList" :key="row.id">
        <td><input type="text" class="form-control" v-model="row.category"/></td>
        <td><input type="text" class="form-control" v-model="row.division"/></td>
        <td><input type="text" class="form-control" v-model="row.code"/></td>
        <td><input type="text" class="form-control" v-model="row.korLang"/></td>
        <td><input type="text" class="form-control" v-model="row.engLang"/></td>
        <td><input type="text" class="form-control" v-model="row.jpLang"/></td>
        <td><input type="text" class="form-control" v-model="row.cnLang"/></td>
        <td>
          <div class="row-utils-area">
            <button class="btn btn-secondary btn-util" @click="updateRow(row.id, row)">저장</button>
            <button class="btn btn-success btn-util" @click="copyRow(row)">복사</button>
            <button class="btn btn-danger btn-util" @click="deleteRow(row.id)">삭제</button>
          </div>
        </td>
      </tr>
    </table>
  {{langList}}
  </div>
</template>

<script>

  // import data from "@/data/data";
  import {db} from '../utils/firebase';

  export default {
    name: "LanguageTable",
    props: {
      serviceId: String // 문자열 데이터만 허용한다.
    },
    data() {
      return {
        dbTableInfo: {
          'service': 'imez-srv-lang',
          'partner': 'imez-ptn-lang'
        },
        langList: [],
        initRowData: {
          category: '',
          division: '',
          code: '',
          korLang: '',
          engLang: '',
          jpLang: '',
          cnLang: '',
          
        }
      }
    },
    methods:{
      addRow(data) {
        const createdAt = new Date();
        data = data || this.initRowData;
        data.createdAt = createdAt;

        console.log('[LangTable] addRow: data', data);
        db.collection(this.dbTableInfo[this.serviceId]).add(data);
      },
      deleteRow (id) {
        console.log('[LangTable] deleteRow: id', id);
        var result = confirm('삭제하시겠습니까?');
        if (result) {
          console.log('deleted');
          db.collection(this.dbTableInfo[this.serviceId]).doc(id).delete();
        }
      },
      updateRow (id, data) {
        console.log('[LangTable] updateRow: id', id);
        console.log('[LangTable] updateRow: data', data);
        db.collection(this.dbTableInfo[this.serviceId]).doc(id).update(data)
          .then((result) => {
            alert('저장되었습니다.');
          });
      },
      copyRow (data) {
        console.log('[LangTable] copyRow: data', data);
        this.addRow(data);
      }
    },
    firestore() {
      return {
        langList: db.collection(this.dbTableInfo[this.serviceId])
          .orderBy('category')
          .orderBy('division')
          .orderBy('code')
          .orderBy('createdAt')
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