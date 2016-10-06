
/**
 * File on charge of tracking the component events.
 * @author Gustavo Ocanto <gustavoocanto@gmail.com>
 * @license https://github.com/gocanto/google-autocomplete/blob/master/LICENSE.md
 */

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