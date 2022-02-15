export default {
	clearCommentsList(state) {
		state.chapters = []
	},
	addComment(state, chapter) {
		state.chapters.push(chapter)
	}
}