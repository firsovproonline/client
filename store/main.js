import axios from 'axios';
export const state = () => ({
  users:[],
  item: null,
  combo_users: []
})

export const actions = {
  setusers ({ commit }, comp) {
    commit('setusers', comp)
  },
  setitem ({ commit }, comp) {
    commit('setitem', comp)
  }
}

export const mutations = {
  setusers (state, comp1) {
    state.users = comp1;
    state.combo_users = [];
    state.users.forEach(item=>{
      const l = Object.values(item);
      if(l[0] && l[0].trim()!='') state.combo_users.push({id:l[1], name:l[0]})
    })
  },
  setitem (state, comp1) {
    state.item = comp1
  }
}
export const getters = {
  users:  (state) => { return state.users },
  item:  (state) => { return state.item },
  combo_users:  (state) => { return state.combo_users },
}

