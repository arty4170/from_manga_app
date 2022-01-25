<template>
	<div class="info">
		<div class="left-column">
			<div class="title">title</div>
			<div class="orig-title">orig-title</div>
			<div class="genre">Жанр</div>
			<div class="description">description</div>
			<div class="title-status">title status</div>
			<div class="translation-status">translation status</div>
		</div>
		<div class="right-column">
			<div class="cover"><img src="#"></div>
			<div class="author">author</div>
			<div class="publishing">publishing house</div>
			<div class="translator">translator</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'PPInfo',
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
