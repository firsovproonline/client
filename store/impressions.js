import axios from 'axios';
export const state = () => ({
  item: null,
  items: [],
  count: 0,
  filter: {
    user: 'all',
    order: 'calldate',
    phone: '',
    id: '',
    offset: 0,
    limit: 50,
    scroll: 0,
    plin: '',
    plout: '',
    datein: { },
    dateout: { },
    createdatein: { },
    createdateout: { },
    title:'',
    src_number: ''
  }

})

export const actions = {
  items ({ commit }, comp) {
    commit('items', comp)
  },
  count ({ commit }, comp) {
    commit('count', comp)
  },
  filter ({ commit }, comp) {
    commit('filter', comp)
  },
  setitem ({ commit }, comp) {
    commit('setitem', comp)
  },
}

export const mutations = {
  setitem (state, comp1) {
    state.item = comp1
  },
  filter (state, comp1) {
    state.filter = comp1
  },
  count (state, comp1) {
    state.count = comp1
  },
  items (state, comp1) {
    state.items = comp1
  },
}
export const getters = {
  items:  (state) => { return state.items },
  item:  (state) => { return state.item },
  count:  (state) => { return state.count },
  filter:  (state) => { return state.filter },
}

