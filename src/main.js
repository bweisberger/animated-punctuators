import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(VueRouter);

// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files
const About = { template: '<div>About</div>' }
const Home = { template: '<div>Home</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/about', component: About },
  { path: '/home', component: Home }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// Now the app has started!

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
  router,
  render: h => h(App),
}).$mount('#app')
