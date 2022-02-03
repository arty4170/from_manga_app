export default {
	logIn(state, user) {
		state.user = user
	},
	logOut(state) {
		state.user = {
			token: '',
			login: ''
		}
	},
	setUser(state, user) {
		state.user = user
	}
}