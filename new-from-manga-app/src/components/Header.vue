<template>
<header>
	<div class="logo" @click="$router.push('/posts')"><img src="@/assets/logo.png"></div>
	<div class="btns">
		<Button :src1="searchImg" @click="ifSearch = !ifSearch"/>
		<Button :src1="newPostImg" @click="$router.push('/add_post')" />
		<Button :src1="userImg" @click="$router.push('/user_form')"/>
	</div>
	<SearchForm v-if="ifSearch" @close="ifSearch=false"/>
</header>
</template>
<script>
import Button from '@/components/Button.vue'
import SearchForm from '@/components/SearchForm'


export default {
	name: 'Header',
	components: {
		Button,
		SearchForm,
	},
	data() {
		return {
			newPostImg: require('@/assets/pen.png'),
			searchImg: require('@/assets/search.jpg'),
			userImg: require('@/assets/user.png'),
			ifSearch: false,
		}
	},
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
