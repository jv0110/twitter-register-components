import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    subscribe: {
      name: '',
      contact: '',
      month: '',
      year: '',
      day: ''
    },
    accountOptions: {
      personsConnect: true,
      customAdds: true,
      location: false,
      identity: false,
      customByLocation: false,
      sharingInfo: true
    }
  },
  mutations: {
    pushData (state, payload) {
      state.subscribe = { ...state.subscribe, ...payload }
    },
    pushOptions (state, payload) {
      state.accountOptions = {...state.accountOptions, ...payload}
    },

    updateName (state, payload) {
      state.subscribe.name = payload
    },
    updateContact (state, payload) {
      state.subscribe.contact = payload
    },
    updateMonth (state, payload) {
      state.subscribe.month = payload
    },
    updateYear (state, payload) {
      state.subscribe.year = payload
    },
    updateDay (state, payload) {
      state.subscribe.day = payload
    },

    // -------------- accountOptions ----------------

    updatePersonsConnect (state, payload) {
      state.accountOptions.personsConnect = payload
    },
    updateCustomAdds (state, payload) {
      state.accountOptions.customAdds = payload
    },
    updateLocation (state, payload) {
      state.accountOptions.location = payload
    },
    updateIdentity (state, payload) {
      state.accountOptions.identity = payload
    },
    updateCustomByLocation (state, payload) {
      state.accountOptions.customByLocation = payload
    },
    updateSharingInfo (state, payload) {
      state.accountOptions.sharingInfo = payload
    }
  },
  actions: {
    pushData ({ commit }) {
      commit('pushData')
    }
  }
})
