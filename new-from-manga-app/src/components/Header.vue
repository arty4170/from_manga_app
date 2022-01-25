<template>
<header>
	<div class="logo" @click="$router.push('/')"><img src="@/assets/logo.png"></div>
	<div class="btns">
		<Button src1='@/assets/pen.png' @click="$router.push('/add_post')" />
		<Button src1="@/assets/search.jpg"/>
		<Button src1="@/assets/user.png" @click="$router.push('/user_form')"/>
	</div>
</header>
</template>
<script>
import Button from '@/components/Button.vue'


export default {
	name: 'Header',
	components: {
		Button,
	}
}
</script>
<style scoped>
header{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
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
