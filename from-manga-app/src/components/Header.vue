<template>
<header>
	<div class="logo"><img src="@/assets/logo.png"></div>
	<div class="btns">
		<Button src1="img/pen.png"/>
		<Button src1="@/assets/search.jpg"/>
		<Button src1="@/assets/user.png"/>
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
	margin: 15px;
	border-radius: 10px;
	border: 3px solid blue;
}
.logo{
	max-height: 100px;
	max-width: 200px;
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