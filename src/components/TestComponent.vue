<template>
  <span>{{ message }}</span>
</template>

<script>
  export default {
    name: "TestComponent",
    data () {
      return {
        message: 'hello!'
      }
    },
    created () {
      this.message = 'bye!'
    }
  }
</script>