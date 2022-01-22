<template>
  <div class="post">
    <div>
      <div class="title">{{post.title}}</div>
      <div class="description">{{post.description}}</div>
      <div class="author">{{post.author}}</div>
    </div>
    <div>
      <div class="image"><img :src="post.coverSrc"></div>
      <div class="date">{{post.date}}</div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Post',
  props: {
    post: Object,
  }
}
</script>

<style>
.post{
  display: flex;
  flex-direction: row;
  gap: 40px;
  border-radius: 10px;
  border: 3px solid blue;
  padding: 25px;
  cursor: pointer;

}
.title{
  font-size: 28px;
}
.description{
  font-size: 18px;
}
.author{
  font-size: 14px;
}
</style>
