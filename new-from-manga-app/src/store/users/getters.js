export default {
	isAuth(state) {
		return state.user.accessToken !== undefined
	},
	getUser(state) {
		return state.user
	},
	getUserEmail(state) {
		return state.user.email
	}
}