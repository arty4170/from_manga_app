<template>
  <div class="post-list">
    <Post v-for="post in posts" :key="post" :post="post" @click="$router.push(post.id)"></Post>
  </div>
</template>
<script>
import Post from '@/components/Post'

export default {
  name: 'PostList',
  components: {
    Post,
  },
  computed: {
    posts() {
      return this.$store.state.posts
    }
  }
}
</script>

<style scoped>
.post-list{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  border-radius: 10px;
  border: 3px solid blue;
}
</style>
