<template>
  <div class="post">
    <div class="left-col">
      <manga-title>{{post.title}}</manga-title>
      <description>{{post.description}}</description>
      <div class="author">{{post.authors}}</div>
    </div>
    <div class="right-col">
      <cover :coverSrc="post.cover"></cover>
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

<style scoped>
.post{
  /* layout*/
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  width: 80%;
  max-height: 300px;
  /* layout*/
  /* view*/
  background: #000;
  color: #fff;
  padding: 25px;
  cursor: pointer;

}
.left-col{
  max-width: 400px;
}
.date{
  font-size: 14px;
  text-align: center;
  margin: 25px;
}
.right-col {
  max-width: 300px;
}
.author {
  margin-top: 15px;
  font-size: 10px;
}
</style>
