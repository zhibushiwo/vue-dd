import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    LoginState:0
  },
  getters:{
    GetLoginState: state => {
      return state.LoginState
    }
  },
  mutations: {
    SetLoginState: (state, ls) => {
      state.LoginState = ls
    }
  },
  actions: {
    
  }
})
