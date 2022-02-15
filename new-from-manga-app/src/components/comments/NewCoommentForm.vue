<template>
  <div>
    <my-textarea v-model="comment.text"></my-textarea>
    <div class="btn" @click="submit">Отправить</div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: 'NewCoommentForm',
    data() {
      return {
        comment: {
          text: '',
          post_id: this.$route.params.id,
        }
      }
    },
    methods: {
      ...mapActions({
        addComment: 'posts/comments/addComment',
      }),
      submit() {
        this.addComment(this.comment)
      }
    }
  }
</script>

<style lang="css" scoped>
</style>