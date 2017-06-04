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
        return_scopes: true,
        futureEvents: [],
        pastEvents: []
      }
    }
  },
  methods: {
    getMyEvents () {
      FB.api(
        "/me/events?limit=100000&type=not_replied",
        function (response) {
          var futureEvents = [];
          var pastEvents = []
          if (response && !response.error) {
              response.data.forEach(function(event) {
                var eventDate = new Date(event.start_time)
                var today = new Date();

                if (eventDate > today) {
                  futureEvents.push(event)
                } else {
                  pastEvents.push(event)
                }
              })
              // router.push({ name: 'Events'})
              console.log('future', futureEvents)
              console.log('past', pastEvents)
          }
        }
      )
    }
    onSignInSuccess (response) {
      getMyEvents();
    },
    onSignInError (error) {
      console.log('OH NOES', error)
    }
  }
}
</script>

<style>
</style>