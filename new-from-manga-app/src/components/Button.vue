<template>
  <div class="btn">
    <img :src="src1">
  </div>
</template>

<script>


export default {
  name: 'Button',
  props: {
    src1: String,
  }
}
</script>

<style scoped>
.btn{
  cursor: pointer;
  border-radius: 50%;
  border: 3px solid blue;
  width: 90px;
  height: 90px;
  padding: 20px;
}
.btn img{
  width: 100%;
}
</style>
