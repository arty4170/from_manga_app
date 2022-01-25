<template>
  <div class="btn">
    <img :src="ImgSrc">
  </div>
</template>

<script>


export default {
  name: 'Button',
  props: {
    src1: String,
  },
  data() {
    return {
      ImgSrc: ~(this.src1)
    }
  }
}
</script>

<style scoped>
.btn{
  cursor: pointer;
  border-radius: 50%;
  border: 3px solid blue;
  max-width: 25px;
  padding: 20px;
}
.btn img{
  width: 100%;
}
</style>
