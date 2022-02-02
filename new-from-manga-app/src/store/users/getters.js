export default {
	logIn(state) {
		return (user) => {
			for (let i = 0; i < state.users.length; ++i) {
				const el = state.users[i]
				if (el.login === user.login && 
					el.password === user.password) {
					el.loggedIn = true
					return true
				}
			}
			return false
		}
	},
}