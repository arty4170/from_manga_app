<template>
	<div class="comments-list">
		<Comment v-for="comment in comments" :key="comment" :comment="comment"/>
	</div>
</template>

<script>
import Comment from './Comment'

export default {
  name: 'CommentsList',
  components: {
    Comment,
  },
  props: {
    comments: Array,
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>