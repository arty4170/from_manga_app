<template>
  <div class="post-list">
    <Post :post="post"></Post>
    <Post :post="post"></Post>
    <Post :post="post"></Post>
    <Post :post="post"></Post>
  </div>
</template>

<script>
import Post from '@/components/Post.vue'

export default {
  name: 'PostList',
  components: {
    Post,
  },
  data() {
    return {
      post: {
        title: 'Наруто',
        description: 'Тот самый сёнэн.',
        author: 'Масащи Кищимото',
        date: '1999',
        coverSrc: './Naruto-manga.jpg',
      }
    }
  }
}
</script>

<style>
.post-list{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  border-radius: 10px;
  border: 3px solid blue;
}
</style>
