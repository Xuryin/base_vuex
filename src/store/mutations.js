import * as types from './mutation-types'
import state from './state'

const mutations = {
  [types.SET_NAME] (state, name) {
    state.name = name
  },
  [types.SET_AGE] (state, age) {
    state.age = age
  },
  [types.SET_TITLE] (state, title) {
    state.title = title
  }
}
export default mutations
