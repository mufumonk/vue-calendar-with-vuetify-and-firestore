import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from 'firebase/app';
import 'firebase/firestore';
import VueTextareaAutosize from 'vue-textarea-autosize'; 

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyAsmLG1i2zOcc6YyyCSftNpXV5uSbJEOJg",
  authDomain: "calendar-42e94.firebaseapp.com",
  projectId: "calendar-42e94",
  storageBucket: "calendar-42e94.appspot.com",
  messagingSenderId: "381854345462",
  appId: "1:381854345462:web:2be87d46c8d07bf4ea64d7"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
