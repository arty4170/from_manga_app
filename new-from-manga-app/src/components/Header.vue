<template>
<header>
	<div class="logo" @click="$router.push('/')"><img src="@/assets/logo.png"></div>
	<div class="btns">
		<Button :src1="newPostImg" @click="$router.push('/add_post')" />
		<Button :src1="searchImg"/>
		<Button :src1="userImg" @click="$router.push('/user_form')"/>
	</div>
</header>
</template>
<script>
import Button from '@/components/Button.vue'


export default {
	name: 'Header',
	components: {
		Button,
	},
	data() {
		return {
			newPostImg: Object,
			searchImg: Object,
			userImg: Object,
		}
	},
	created() {
		this.newPostImg = require('@/assets/pen.png')
		this.searchImg = require('@/assets/search.jpg')
		this.userImg = require('@/assets/user.png')
	}
}
</script>
<style scoped>
header{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
	border-radius: 10px;
	border: 3px solid blue;
	width: 100%;
}
.logo{
	max-height: 100px;
	max-width: 200px;
	cursor: pointer;
}
.logo img{
	height: 100%;
}
.btns{
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 15px;
}
</style>
