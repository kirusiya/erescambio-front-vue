import Vue from 'vue'
import VueRouter from 'vue-router'
import clientsConf from '../clients/index'

Vue.use(VueRouter)

const routes = [
  ...clientsConf[process.env.VUE_APP_CLIENT].router
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
