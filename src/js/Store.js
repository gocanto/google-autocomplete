import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const Store = new Vuex.Store({
  state: {
    sharedAddress: {}
  },
  mutations: {
    setAddress (state, address) {
      state.sharedAddress = address;
    }
  }
});

export default Store