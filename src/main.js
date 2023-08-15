import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
//import VueRouter from 'vue-router'
import router from './router/index'
import store from './store/index'
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
