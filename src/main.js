import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';

Vue.config.productionTip = false

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    firstSentence: "here is the first hero to the show about 6 ft in stature whose hair is that of a god"
  },
  getters: {
    sentence: state => state.firstSentence
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
