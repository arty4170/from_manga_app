<template>
	<div class="description">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name: 'Description'
	}
</script>
<style scoped>
	.description {
		font-size: 18px;
	}
</style>