<template>
	<div class="new-user-form">
		<form action="post">
			<div class="user-name">
				<div>Имя пользователя:</div>
				<input type="text">
			</div>
			<div class="pasword">
				<div>Пароль:</div>
				<input type="text">
				<div>Повторите пароль:</div>
				<input type="text">
			</div>
			<button type="submit" @click="$router.push('/')">Зарегистрироваться</button>
		</form>
	</div>
</template>
<script>
	export default {
		name: 'NewUserForm'
	}
</script>
<style scoped>
	.new-user-form {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}
</style>
