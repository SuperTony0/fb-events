import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login.vue'
import events from '../views/events.vue'

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: login
        },
        {
            path: '/events',
            name: 'Events',
            component: events
        }
    ]
})