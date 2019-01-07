import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Icon from './views/Icon.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/icon',
      name: 'icon',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Icon.vue')
    }
  ]
})
