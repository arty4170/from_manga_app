<template>
  <div class="post-list">
    <Post v-for="post in posts" :key="post" :post="post" @click="$router.push(post.id)"></Post>
  </div>
  <div class="pages">
    
  </div>
</template>
<script>
import Post from '@/components/Post'
import {mapGetters} from 'vuex'

export default {
  name: 'PostList',
  components: {
    Post,
  },
  computed: {
    ...mapGetters({
      getShortPosts: 'posts/getShortPosts'
    }),
    posts() {
      return this.getShortPosts(0)
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
