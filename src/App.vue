<template>
  <div id="app">
    <img src="./assets/logo.png">
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
export default {
  name: 'app',
  data () {
    return {
      fbSignInParams: {
        scope: 'email,user_likes,user_events',
        return_scopes: true
      },
      userId: ''
    }
  },
  methods: {
    onSignInSuccess (response) {
      this.userId = response.authResponse.userID
      FB.api(
        "/" + this.userId + "/events",
        function (response) {
          if (response && !response.error) {
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

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.fb-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #4267b2;
  color: #fff;
}
</style>
