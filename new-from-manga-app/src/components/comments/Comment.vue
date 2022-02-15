<template>
  <div class="comment">
    <div class="img"></div>
    <div class="info">
      <div class="user-name">{{userEmail}}</div>
      <div class="comment-body">{{comment.text}}</div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Comment',
  props: {
    comment: Object,
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters({
      userEmail: 'users/getUserEmail'
    })
  }
}
</script>

<style lang="css" scoped>
</style>