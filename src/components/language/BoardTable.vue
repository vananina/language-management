<template>
  <div>{{test}}
    <table border="1">
      <tr>
        <th>대분류</th>
        <th>중분류</th>
        <th>코드</th>
        <th>한국어</th>
        <th>영어</th>
        <th>일본어</th>
        <th>중국어</th>
      </tr>
      <tr v-for="row in langList">
        <td>{{ row.firstDiv }}</td>
        <td>{{ row.secondDiv }}</td>
        <td>{{ row.thirdDiv }}</td>
        <td>{{ row.korLang }}</td>
        <td>{{ row.engLang }}</td>
        <td>{{ row.jpLang }}</td>
        <td>{{ row.cnLang }}</td>
      </tr>
    </table>
  </div>
</template>

<script>

  import data from "../../data/data";

  export default {
    name: "BoardTable",
    props: {
      menuName: String // 문자열 데이터만 허용한다.
    },
    data(){
      return {
        langList: data.langList
      }
  },
    mounted() {
      // props으로 받으면 자신의 데이터와 마찬가지로 this로 사용할 수 있게 된다.
      console.log(this.menuName)
    }
  }
</script>

<style scoped>
  table {
    border: 1px solid;
  }
</style>