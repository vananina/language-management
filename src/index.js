import Vue from 'vue'
import VueMaterial from 'vue-material'
import Router from 'vue-router'
import App from './App'
import routes from './router'
import firebase from 'firebase';

var fbConfig = {
  apiKey: "AIzaSyDs-Iuuh0gh0FlpiKawN-EW_SkKSo_Za04",
  authDomain: "imez-language-web.firebaseapp.com",
  databaseURL: "https://imez-language-web.firebaseio.com",
  projectId: "imez-language-web",
  storageBucket: "imez-language-web.appspot.com",
  messagingSenderId: "331475222832"
};

firebase.initializeApp(fbConfig);

// Vue 전역설정 : false로 설정하면 배포에 대한 팁을 출력하지 않습니다.
Vue.config.productionTip = true
Vue.use(VueMaterial)
Vue.use(Router)
const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

new Vue({
  router,
  ...App
}).$mount('#app')