import Vue from 'vue'

Vue.config.productionTip = false

import router from "./router"
import store from "./store"

import App from './App.vue'

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
