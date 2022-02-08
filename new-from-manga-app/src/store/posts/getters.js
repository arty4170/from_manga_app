export default {
	getPostById(state) {
		return (postId) => {
			for (let i = 0; i < state.posts.length; ++i) {
				const el = state.posts[i]
				if (el.id === postId) {
					return el
				}
			}
		}
	},
	getShortPosts(state) {
		const DESCLENGTH = 200
		return (startNumber, endNumber = state.posts.length) => {
			const shortPosts = []
			for (let i = startNumber; i < endNumber; ++i) {
				const el = state.posts[i]
				shortPosts[i] = {
					id: el.id,
					title: el.title,
					description: `${el.description.slice(0, DESCLENGTH)}...`,
					authors: el.authors,
					cover: el.cover,
					date: el.date,
				}
			}
			return shortPosts
		}
	}
}