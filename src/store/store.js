import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sTop:''
  },
  mutations: {
    getsTop(state,value){
      state.sTop = value
    }
  },
  actions: {

  }
})
