<template>
  <div>
    <table>
      <tr>
        <td>test {{this.menuName}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "BoardTable",
    props: {
      menuName: String // 문자열 데이터만 허용한다.
    },
    mounted() {
      // props으로 받으면 자신의 데이터와 마찬가지로 this로 사용할 수 있게 된다.
      console.log(this.menuName)
    }
  }
</script>

<style scoped>

</style>