<template>
  <h3>{{ message }}</h3>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      message: 'Demo vue webpack'
    }
  }
}
</script>

<style scoped>
h3 {
  background: red;
  color: aliceblue;
}
</style>