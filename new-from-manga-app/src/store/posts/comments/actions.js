import {getDatabase, ref, onValue, set} from 'firebase/database'

function getId() {
	return new Date().getTime()
}

export default {
	uploadCommentsByPostId(context, postId) {
		const database = getDatabase()

		onValue(ref(database, '/comments'), (snapshot) => {
			context.commit('clearCommentsList')

			const commentsList = snapshot.val()
			for (const [key, comment] of Object.entries(commentsList)) {
				if (comment.post_id === postId) {
					context.commit('addComment', comment)
				}
			}
		})
	},

	addComment(context, comment) {
		const database = getDatabase()
		set(ref(database, `/comments/${getId()}`), comment)
	}
}