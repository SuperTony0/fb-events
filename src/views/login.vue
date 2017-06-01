<template>
    <div>
        <div>
            Hi I am your login screen
        </div>
        <img src="../assets/logo.png">
        <h1></h1>
        <fb-signin-button
            :params="fbSignInParams"
            @success="onSignInSuccess"
            @error="onSignInError">
            Sign in with Facebook
        </fb-signin-button>
    </div>
</template>

<script>
import router from '../router/index.js'
export default {
    name: 'login',
    data () {
    return {
      fbSignInParams: {
        scope: 'email,user_likes,user_events',
        return_scopes: true
      }
    }
  },
  methods: {
    onSignInSuccess (response) {
      FB.api(
        "/me/events",
        function (response) {
          if (response && !response.error) {
              router.push({ name: 'Events'})
              console.log(response)
          }
        }
      )
    },
    onSignInError (error) {
      console.log('OH NOES', error)
    }
  }
}
</script>

<style>
</style>