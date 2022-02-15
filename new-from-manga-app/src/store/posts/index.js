import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import comments from './comments'
import chapters from './chapters'

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions,
	modules: {
		comments: comments,
		chapters: chapters,
	}
}