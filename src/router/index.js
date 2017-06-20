import Vue from 'vue'
import Router from 'vue-router'
import Calculator from '@/components/Calculator'
import Timer from '@/components/Timer'
import Diameter from '@/components/Diameter'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Calculator
    },
    {
      path: '/Calculator',
      name: 'Calculator',
      component: Calculator
    },
    {
      path: '/Timer',
      name: 'Timer',
      component: Timer
    },
    {
      path: '/Diameter',
      name: 'Diameter',
      component: Diameter
    }
  ]
})
