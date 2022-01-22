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

<style>
.btn{
  cursor: pointer;
  border-radius: 10px;
  border: 3px solid blue;
  max-height: 100px;
}
.btn img{
  height: 100%;
}
</style>
