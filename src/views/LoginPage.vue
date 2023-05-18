<template>
  <main>
    <div class="login">
      <router-link to="/" class="close">
        <i class="bi bi-x-lg"></i>
      </router-link>
      <div class="body">
        <h3>Anmelden</h3>
        <form @submit.prevent="handleSubmit" novalidate="true">
          <div class="field">
            <label>E-Mail</label>
            <input
              v-model="email"
              type="email"
              placeholder="E-Mail/Benutzername"
            />
            <span class="error" v-if="emailError">{{emailError}}</span>
          </div>
          <div class="field">
            <label>Passwort</label>
            <input
              v-model="password"
              type="password"
              placeholder="Passwort"
            />
            <span class="error" v-if="passwordError">{{passwordError}}</span>
            <p>{{ errorMessage2 }}</p>
          </div>
          <router-link to="/" class="forget_pass">
            Passwort vergessen?
          </router-link>
          <div class="done">
            <router-link to="/registerpage">
              Neuen Account erstellen
            </router-link>
            <button>Anmelden</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
// import {RouterLink} from "vue-router"
import { ref } from "vue";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const emailError = ref("");
    const passwordError = ref("");

    const handleSubmit = () => {
      emailError.value = email.value ? "" : "E-Mail/Benutzername ist erforderlich"
      passwordError.value = password.value ? "" : "Passwort ist erforderlich"
      console.log(email.value , password.value)
    };
    
    return {
      email,
      password,
      handleSubmit,
      emailError,
      passwordError,
    };
  },
};
</script>

<style scoped>
main {
  background-image: url("../assets/images/Club.jpg");
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  margin-bottom: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
}
main .login {
  width: 450px;
  height: 400px;
  background: white;
  border-radius: 10px;
  position: relative;
  padding: 20px;
}
main .login .close {
  position: absolute;
  right: 20px;
  top: 10px;
}
main .login .close i {
  font-size: 30px;
  color: #dd3333;
  font-weight: bold;
}
main .login .body {
  margin-top: 40px;
}
main .login .body h3 {
  text-align: center;
  color: #dd3333;
  font-size: 40px;
  margin-bottom: 20px;
}
main .login .body .field {
  display: flex;
  flex-direction: column;
  margin: 15px 0px;
}
main .login .body .field label {
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 15px;
}
main .login .body .forget_pass {
  color: gray;
  text-decoration: none;
  transition: all 0.5s ease;
  position: relative;
  top: -20px;
}

main .login .body .forget_pass:hover {
  text-decoration: underline;
}
main .login .body .done {
  margin-top: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
main .login .body .done button {
  background: #dd3333;
  border: none;
  padding: 7px 10px;
  color: white;
  border-radius: 5px;
}
main .login .body .done a {
  color: gray;
  transition: all 0.5s ease;
  text-decoration: none;
}
main .login .body .done a:hover {
  text-decoration: underline;
}
.error{
  font-size: 13px;
  color: red;
}

@media only screen and (max-width:520px){
  main .login {
  width: 350px;
  height: 400px;
  background: white;
  border-radius: 10px;
  position: relative;
  padding: 20px;
}
}
</style>
