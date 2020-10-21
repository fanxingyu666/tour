import Vue from 'vue'
import VueRouter from 'vue-router'
import Details from '../views/details.vue'
import Home from '../views/home.vue'
import Register from '../views/register.vue'
import Login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    component:Login
  },
  {
    path:'/register',
    component:Register
  },
  {
    path:'/',
    component:Home
  },
  {
    path:'/details',
    component:Details
  },
]

const router = new VueRouter({
  routes
})

export default router
