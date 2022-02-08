import {getDatabase, ref, onValue}

export default {
	getCommentsByPostId(context, postId) {
		const database = getDatabase()
		
		onValue(ref(database, 'comments'), (snapshot) => {
			const commentsList = snapshot.val()
			for (const [key, value] of Object.entries(commentsList)) {

			}
		})
	}
}