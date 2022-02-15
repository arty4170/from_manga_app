export default {
	clearCommentsList(state) {
		state.comments = []
	},
	addComment(state, comment) {
		state.comments.push(comment)
	}
}