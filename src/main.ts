import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

//let app:object;
let config = {
  apiKey: "AIzaSyDFhnG2G8BXQLkfbc-0Cq5TuEHtMq66lZs",
  authDomain: "prode2018-dit.firebaseapp.com",
  databaseURL: "https://prode2018-dit.firebaseio.com",
  projectId: "prode2018-dit",
  storageBucket: "",
  messagingSenderId: "778579206188"
};

//firebase.initializeApp(config)

new Vue({
  router,
  store,

  created() {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if(user && user.emailVerified) {
        this.$router.push('/hello')
      } else {
        alert('Cuenta aun no verificada')
        this.$router.push('/login')
      }
     });
  },
 
  render: h => h(App)
}).$mount('#app')


/*
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
});
*/
