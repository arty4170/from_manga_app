<template>
	<div class="title">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name: 'Title'
	}
</script>
<style scoped>
	.title {
		font-size: 35px;
	}
</style>