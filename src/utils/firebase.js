
import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
Vue.use(VueFire)

var fbConfig = {
  apiKey: "AIzaSyDs-Iuuh0gh0FlpiKawN-EW_SkKSo_Za04",
  authDomain: "imez-language-web.firebaseapp.com",
  databaseURL: "https://imez-language-web.firebaseio.com",
  projectId: "imez-language-web",
  storageBucket: "imez-language-web.appspot.com",
  messagingSenderId: "331475222832"
};

firebase.initializeApp(fbConfig)
export const db = firebase.firestore()