<template>
  <div class="sign-up">
    <p>Let's create a new account !</p>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button v-on:click="signUp">Sign Up</button>
    <span>or go back to <router-link to="/login">login</router-link>.</span>
    <pre>{{ currentUser }}</pre>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import firebase from 'firebase'

@Component
export default class SignUp extends Vue {

      currentUser = {}

      email = ''
      password = ''

      signUp() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {

            var currUser = firebase.auth().currentUser;
            if (currUser){
              currUser.sendEmailVerification().then(function() {
                alert('Se envio un email de verificacion')
              }).catch(function(err) {
                alert('Hubo un error al enviar el mail: ' + err.message)
              });

            }


            this.$router.replace('login');
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
      }
}
  
</script>

<style scoped>
  .signUp {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
  }
  span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
  }
</style>
