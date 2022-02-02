<template>
  <Header />
  <router-view/>
</template>
<script>
  import Header from '@/components/Header.vue'

  export default {
    name: 'App',
    components: {
      Header,
    }
  }
</script>
<style>
  @font-face {
    font-family: "CCMeanwhileUncial";
    src: url('~@/assets/CCMeanwhileUncial-Regular.ttf') format('truetype')
  }
  * {
    font-family: CCMeanwhileUncial;
  }
</style>
