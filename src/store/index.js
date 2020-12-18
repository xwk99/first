import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let defaultcity = '重庆'
try {
  if (sessionStorage.city) {
    defaultcity = sessionStorage.city
  }
} catch (e) {}

export default new Vuex.Store({
  state: {
    city: defaultcity
  },
  mutations: {
    changcity (state, city) {
      state.city = city
      try {
        sessionStorage.city = city
      } catch (e) {}
    }
  },
  actions: {
    changcity (ctx, city) {
      ctx.commit('changcity', city)
    }
  },
  modules: {
  }
})
