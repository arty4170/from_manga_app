<template>
	<div class="new-user-form">
		<form action="post">
			<my-input name="login" v-model="user.login">
				<div>Имя пользователя:</div>
			</my-input>
			<my-input name="password" v-model="user.password">
				<div>Пароль:</div>
			</my-input>
			<my-input name="repeat-password" v-model="repeat_password">
				<div>Повторите пароль:</div>
			</my-input>
			<button @click.prevent="onSubmit">Зарегистрироваться</button>
		</form>
	</div>
</template>
<script>
	import {mapMutations} from 'vuex'

	export default {
		name: 'NewUserForm',
		data() {
			return {
				user: {
					login: '',
					password: '',
					loggedIn: true
				},
				repeat_password: ''
			}
		},
		methods: {
			...mapMutations({
				signIn: 'users/signIn'
			}),
			onSubmit() {
				if (this.user.password !== this.repeat_password) {
					prompt('Пароль должен совпадать в двух строках')
				} else {
					this.signIn(this.user)
					this.$router.push('/')
				}
			}
		}
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
