import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/add'
      // component: Home
    },

    {
      path: '/add',
      name: 'person',
      component: () => import('./views/add.vue')
    }

  ]
})
