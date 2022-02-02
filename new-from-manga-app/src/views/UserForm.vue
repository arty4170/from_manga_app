<template>
	<div class="user-form">
		<form action="post">
			<my-input name="user-name" v-model="user.login">
				<div>Имя пользователя:</div>
			</my-input>
			<my-input name="password" v-model="user.password">
				<div>Пароль:</div>
			</my-input>
			<button @click.prevent="onSubmit">Войти</button>
		</form>
		<router-link to="/new_user_form">Зарегистрироваться</router-link>
	</div>
</template>
<script>
	import {mapGetters} from 'vuex'

	export default {
		name: 'UserForm',
		data() {
			return {
				user: {
					login: '',
					password: '',
					loggedIn: true
				}
			}
		},
		methods: {
			...mapGetters({
				logIn: 'users/logIn',
			}),
			onSubmit() {
				if (this.logIn(this.user)) {
					this.$router.push('/')
				} else {
					this.user.login = ''
					this.user.password = ''
					prompt('Неправильное имя пользователя или пароль')
				}
			}
		},
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
