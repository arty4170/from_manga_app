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
		border-bottom: 2px solid #fff;
		font-size: 35px;
	}
</style>