<template>
  <div class="post">
    <div class="left-col">
      <div class="title">{{post.title}}</div>
      <div class="description">{{post.description}}</div>
      <div class="author">{{post.author}}</div>
    </div>
    <div class="right-col">
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
  justify-content: space-between;
  min-width: 1000px;
  border-radius: 10px;
  border: 3px solid blue;
  padding: 25px;
  cursor: pointer;

}
.left-col{
  max-width: 400px;
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
.date{
  font-size: 14px;
  text-align: center;
  margin: 25px;
}
.image{
  max-width: 500px;
}
.image img {
  width: 100%;
}
</style>
