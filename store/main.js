import axios from 'axios';
export const state = () => ({
  users:[],
  item: null,
  save_component: null,
  combo_users: [],
  globalMessage: null,

})

export const actions = {
  globalMessage ({ commit }, comp) {
    commit('globalMessage', comp)
  },
  save_component ({ commit }, comp) {
    commit('save_component', comp)
  },
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
  globalMessage (state, comp1) {
    state.globalMessage = comp1
  },
  save_component (state, comp1) {
    state.save_component = comp1
  },
  setitem (state, comp1) {
    state.item = comp1
  }
}
export const getters = {
  globalMessage: (state) => { return state.globalMessage },
  users:  (state) => { return state.users },
  item:  (state) => { return state.item },
  combo_users:  (state) => { return state.combo_users },
  save_component:  (state) => { return state.save_component },
}

