import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Vueaxios from 'vue-axios'
import Vuerouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(Vueaxios,axios,Vuerouter)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
