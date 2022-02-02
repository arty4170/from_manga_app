<template>
	<div class="info">
		<div class="left-column">
			<manga-title>{{post.title}}</manga-title>
			<div class="orig-title">{{post.origtitle}}</div>
			<div class="genre">{{post.genre}}</div>
			<description>{{post.description}}</description>
			<div class="title-status">{{post.title_status}}</div>
			<div class="translation-status">{{post.translation_status}}</div>
		</div>
		<div class="right-column">
			<div class="cover"><img :src="post.cover"></div>
			<div class="author">{{post.authors}}</div>
			<div class="publishing">{{post.publishing}}</div>
			<div class="translator">{{post.translators}}</div>
		</div>
	</div>
</template>
<script>
	import {mapGetters} from 'vuex'

	export default {
		name: 'PPInfo',
		computed: {
			...mapGetters({
				getPostById: 'posts/getPostById'
			}),
			post() {
				return this.getPostById(this.$route.params.id)
			}
		}
	}
</script>
<style scoped>
	.info {
		border-radius: 10px;
		border: 3px solid blue;
		display: flex;
		flex-direction: row;
		gap: 25px;
		justify-content: space-between;
		width: 80%;
	}
</style>
