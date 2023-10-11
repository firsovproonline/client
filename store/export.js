import axios from 'axios'

export const state = () => ({
  items:[],
  report:{}
})
export const actions = {
  items ({ commit }, val) {
    commit('items', val)
  },
  reportAvito ({ commit }, val) {
    commit('reportAvito', val)
  },
  async load (state) {
    try {
      const spr = await axios.get("/api/rent21/report/avito")
      state.commit('reportAvito', spr.data)
    } catch (err) {

    }
    try {
      const spr = await axios.get("/api/rent21/report/cian")
      state.commit('reportCian', spr.data)
    } catch (err) {

    }
    try {
      const spr = await axios.get("/api/rent21/report/cian1")
      state.commit('reportCian1', spr.data)
    } catch (err) {

    }

  },
}
export const mutations = {
  items (state, val) {
    state.items = val
  },
  reportAvito (state, val) {
    state.report.avito = val
  },
  reportCian (state, val) {
    state.report.Cian = val
  },
  reportCian1 (state, val) {
    state.report.Cian1 = val
  },
}
export const getters = {
  items: (state) => {
    return state.items
  },
  report: (state) => {
    return state.report
  }
}
