<template>
	<div class="user-form">
		<form action="post">
			<div class="user-name">
				<div>Имя пользователя:</div>
				<input type="text">
			</div>
			<div class="pasword">
				<div>Пароль:</div>
				<input type="text">
			</div>
			<button type="submit" @click="$router.push('/')">Войти</button>
		</form>
		<router-link to="/new_user_form">Зарегистрироваться</router-link>
	</div>
</template>
<script>
	export default {
		name: 'UserForm'
	}
</script>
<style scoped>
	.user-form {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}
</style>
