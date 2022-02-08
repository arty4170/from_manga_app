<template>
  <div class="btn">
    <div class="img" :style='{backgroundImage: `url(.${src1})`}'></div>
  </div>
</template>

<script>


export default {
  name: 'Button',
  props: {
    src1: String,
  },
}
</script>

<style scoped>
.btn{
  cursor: pointer;
  width: 90px;
  height: 90px;
  background: #fff;
  border-radius: 50%;
  overflow: hidden;
}
.btn .img{
  width: 100%;
  height: 100%;
  background-size: contain;
}
</style>
