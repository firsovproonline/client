import axios from 'axios';
export const state = () => ({
  users:[],
  user:{},
  globalevent: null,
  item: null,
  save_component: null,
  combo_users: [],
  globalMessage: null,
  items: [],
  spr: {},
  vcomponent: null,
  combospr: '',
  combofield: '',
  combofieldp: '',
  combovalue: '',
  multiItems: [],
})

export const actions = {
  setglobalevent ({ commit }, val) {
    commit('setglobalevent', val)
  },

  setVcomponent ({ commit }, comp) {
    commit('setVcomponent', comp)
  },

  async load (state) {
    try {
      const spr = await axios.get("/api/spr")
      state.commit('setSpr', spr.data)
    } catch (err) {

    }
  },

  setSpr ({ commit }, spr) {
    commit('setSpr', spr)
  },
  globalMessage ({ commit }, comp) {
    commit('globalMessage', comp)
  },
  save_component ({ commit }, comp) {
    commit('save_component', comp)
  },
  setusers ({ commit }, comp) {
    commit('setusers', comp)
  },
  setuser ({ commit }, comp) {
    commit('setuser', comp)
  },
  items ({ commit }, comp) {
    commit('items', comp)
  },
  setitem ({ commit }, comp) {
    commit('setitem', comp)
  },
  setmultiItems ({ commit }, comp) {
    commit('setmultiItems', comp)
  },
  setCombovalue ({ commit }, val) {
    commit('setCombovalue', val)
  },
}

export const mutations = {
  setglobalevent (state, val) {
    state.globalevent = {}
    state.globalevent = val
  },

  setVcomponent (state, vcomponent) {
    state.vcomponent = vcomponent.comp
    state.combospr = vcomponent.spr
    state.combofield = vcomponent.field
    state.combofieldp = vcomponent.pfield
    state.combovalue = vcomponent.value
  },


  setSpr (state, spr) {
    state.spr = spr
  },
  setuser (state, spr) {
    state.user = spr
  },
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
  },
  items (state, comp1) {
    state.items = comp1
  },
  setmultiItems (state, vcomponent) {
    state.multiItems = vcomponent
  },
  setCombovalue (state, vcomponent) {
    state.combovalue = vcomponent
  },

}
export const getters = {
  globalMessage: (state) => { return state.globalMessage },
  globalevent: (state) => { return state.globalevent },
  user:  (state) => { return state.user },
  users:  (state) => { return state.users },
  items:  (state) => { return state.items },
  item:  (state) => { return state.item },
  combo_users:  (state) => { return state.combo_users },
  save_component:  (state) => { return state.save_component },
  spr: (state) => { return state.spr },
  vcomponent: (state) => { return state.vcomponent },
  multiItems: (state) => { return state.multiItems },
  combospr: (state) => { return state.combospr },
  combofield: (state) => { return state.combofield },
  combofieldp: (state) => { return state.combofieldp },
  combovalue: (state) => { return state.combovalue },

}

