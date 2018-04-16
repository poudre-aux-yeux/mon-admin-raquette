// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'mdi/css/materialdesignicons.min.css'
import App from './App'
import router from './router'

Vue.use(Vuetify, {
  theme: {
    'orangeambre': '#FFA726',
    'jauneclair': '#FBC02D',
    'orangeclair': '#FFB74D',
    'orangefonce': '#EF6C00'
  }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
