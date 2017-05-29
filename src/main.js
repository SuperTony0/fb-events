import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import FBSignInButton from 'vue-facebook-signin-button'

Vue.use(FBSignInButton)
Vue.use(VueMaterial)

new Vue({
  el: '#app',
  render: h => h(App)
})
