import {getDatabase, ref, onValue, set} from 'firebase/database'

function getId() {
	return new Date().getTime()
}

export default {
	getCommentsByPostId(context, postId) {
		const database = getDatabase()
		
		onValue(ref(database, '/chapters'), (snapshot) => {
			const chaptersList = snapshot.val()
			for (const [key, value] of Object.entries(chaptersList)) {}
		})
	},
	addComment(context, comment) {
		const database = getDatabase()
		set(ref(database, `/comments/${getId}`), comment)
	}
}