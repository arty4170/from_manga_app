<template>
<div class="post-page">
	<div class="post-nav">
		<div @click="$router.push({path: `/${$route.params.id}/info`})">Информация</div>
		<div @click="$router.push({path: `/${$route.params.id}/chapters`})">Главы</div>
		<div @click="$router.push({path: `/${$route.params.id}/comments`})">Комментарии</div>
	</div>
	<router-view/>
</div>
</template>
<script>
export default {
	name: 'PostPage'
}
</script>
<style>
	.post-page {
		border: 3px solid blue;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.post-nav{
		display: flex;
		flex-direction: row;
		width: 80%;
	}
	.post-nav div {
		cursor: pointer;
		border: 2px solid black;
		border-radius: 10px;
		padding: 5px;
	}
</style>
