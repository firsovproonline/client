export const state = () => ({
  item:{}
})
export const actions = {
  item ({ commit }, val) {
    commit('item', val)
  }
}
export const mutations = {
  item (state, val) {
    state.item = val
  },
}
export const getters = {
  item: (state) => {
    return state.item
  }
}
