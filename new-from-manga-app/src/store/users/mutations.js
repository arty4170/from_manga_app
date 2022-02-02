export default {
	signIn(state, user) {
		state.users.push(user)
	},
	deleteUser(state, userId) {
		for (let i = 0; i < state.users.length; ++i) {
			const user = state.users[i];
			if (user.id === userId) {
				state.users.splice(i, i)
			}
		}
	}
}