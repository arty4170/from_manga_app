<template>
	<div class="cover">
		<img :src="coverSrc">
	</div>
</template>
<script>
	export default {
		name: 'Cover',
		props: {
			coverSrc: String
		}
	}
</script>
<style scoped>
	.cover {
		max-width: 500px;
		max-height: 300px;
	}
	.cover img {
		width: 100%;
	}
</style>