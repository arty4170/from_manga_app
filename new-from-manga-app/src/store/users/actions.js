import {getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword} from 'firebase/auth'

export default {
	signIn(context, user) {
		const auth = getAuth()
		createUserWithEmailAndPassword(auth, user.login, user.password)
	},
	logOut(context, state) {
		const auth = getAuth()
		signOut(auth)
	},
	logIn(context, user) {
		const auth = getAuth();

		signInWithEmailAndPassword(auth, user.login, user.password)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user
				context.commit('logIn', user)
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.warn(errorCode, errorMessage)
			});
	},
	setUser(context, user) {
		context.commit('setUser', user || {})
	}
}