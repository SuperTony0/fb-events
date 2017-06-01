import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import FBSignInButton from 'vue-facebook-signin-button'
import router from './router'

Vue.use(FBSignInButton)
Vue.use(VueMaterial)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
