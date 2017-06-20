// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fraction from 'fraction.js'
// import ElMoment from 'el-moment'
import VueTimepicker from 'vue2-timepicker'

Vue.use(VueTimepicker)
// Vue.use(ElMoment)
Vue.prototype.$fraction = fraction
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
