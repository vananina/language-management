require('./css/main.css')

import Vue from 'vue'
import VueMaterial from 'vue-material'
import Router from 'vue-router'
import App from './App'
import routes from './router'

// Vue 전역설정 : false로 설정하면 배포에 대한 팁을 출력하지 않습니다.
Vue.config.productionTip = true
Vue.use(VueMaterial)
Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes
})

new Vue({
  router,
  ...App
}).$mount('#app')