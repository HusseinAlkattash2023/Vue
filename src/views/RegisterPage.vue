<template>
  <main>
    <div class="register">
      <router-link to="/" class="close">
        <i class="bi bi-x-lg"></i>
      </router-link>
      <div class="body">
        <h3>Konto erstellen</h3>
        <form>
          <div class="field">
            <div>
              <label>Vorname *</label>
              <input type="text" placeholder="Vorname" />
            </div>
            <div>
              <label> Nachname *</label>
              <input type="text" placeholder="Nachname" />
            </div>
          </div>

          <div class="field">
            <div>
              <label>Geschlecht (optional)</label>
              <select v-model="selected">
                <option disabled value="">Please select one</option>
                <option>Männlich</option>
                <option>Weiblich</option>
                <option>Andere</option>
              </select>
            </div>
            <div>
              <label>Geburtstag (optional)</label>
              <input type="date" />
            </div>
          </div>

          <div class="field">
            <div>
              <label>E-Mail *</label>
              <input type="email" placeholder="email" required />
            </div>
            <div>
              <label>Passwort *</label>
              <input type="password" placeholder="Passwort" required />
            </div>
          </div>

          <div class="field">
            <div>
              <label>Telefonnummer (optional)</label>
              <input type="text" placeholder="Telefonnummer" />
            </div>
            <div>
              <label>Land (optional)</label>
              <input type="text" placeholder="Land" />
            </div>
          </div>

          <div class="field">
            <div>
              <label>PLZ (optional)</label>
              <input type="text" placeholder="PLZ" />
            </div>
            <div>
              <label>Stadt (optional)</label>
              <input type="text" placeholder="Stadt" />
            </div>
          </div>

          <div class="field">
            <div>
              <label>Straße (optional)</label>
              <input type="text" placeholder="Straße" />
            </div>
            <div>
              <label>Haus. Nr. (optional)</label>
              <input type="text" placeholder="Haus. Nr." />
            </div>
          </div>

          <div>
            <div class="field_">
              <div class="checkbox">
                <input type="checkbox" v-model="checkbox" />
                <label
                  >Mitglied in Der Club an der Alster e.V. (optional)</label
                >
              </div>
              <div class="snummer" v-if="checkbox">
                <label>Mitgliedsnummer *</label>
                <input type="text" placeholder="Mitgliedsnummer" />
              </div>
            </div>
            <p v-if="checkbox" class="text">
              Benutzerkonto dauert ca. 24 Stunden um die Mitgliedschaft zu
              verifizieren
            </p>
            <div class="checkbox">
              <input type="checkbox" />
              <label>Datenschutz akzeptieren</label>
            </div>
            <div class="checkbox">
              <input type="checkbox" />
              <label>AGB akzeptieren</label>
            </div>
          </div>
          <div class="footer">
            <router-link to="loginPage">Anmelden</router-link>
            <button>Konto erstellen</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const checkbox = ref("");
    return { checkbox };
  },
};
</script>

<style scoped>
main {
  background-image: url("../assets/images/Club.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  margin-bottom: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 50px;
}
main .register {
  width: 700px;
  height: 800px;
  background: white;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: relative;
  padding: 20px;
  margin-top: 50px;
}
main .register .close {
  position: absolute;
  right: 20px;
  top: 10px;
  color: #dd3333;
  font-size: 30px;
}
main .register .body {
  margin-top: 20px;
}
main .register .body h3 {
  text-align: center;
  color: #dd3333;
  font-size: 40px;
  margin-bottom: 20px;
}
main .register .body form {
  /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
  margin-top: 30px;
}
main .register .body form .field {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0px;
}
main .register .body form .field div {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 48%;
}
main .register .body form .field div input {
  border-radius: 4px;
  border: none;
  border: 1px solid rgb(195, 195, 195);
  padding: 3px 5px;
}
main .register .body form .field div select {
  border-radius: 4px;
  border: none;
  border: 1px solid rgb(195, 195, 195);
  padding: 5px;
  background: none;
}
main .register .body form .field div label {
  font-size: 14px;
  font-weight: 900;
  margin-bottom: 5px;
}
.checkbox {
  display: flex;
  align-items: center;
  margin: 10px 0px;
}
.checkbox label {
  margin-left: 10px;
}
main .register .body form .field_ {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0px;
}
main .register .body form .field_ div {
  width: 48%;
}

main .register .body form .field_ .snummer input {
  border-radius: 4px;
  border: none;
  border: 1px solid rgb(195, 195, 195);
  padding: 3px 5px;
  width: 100%;
}

main .register .body form .field_ .snummer label {
  font-size: 14px;
  font-weight: 900;
  margin-bottom: 5px;
}
main .register .body form .text{
  font-size: 15px;
  color: #8a6b0d;
  position: relative;
  top: -10px;
  background: #ffe69d;
}
main .register .body form .footer{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}
main .register .body form .footer a{
  color: gray;
  text-decoration: none;
}
main .register .body form .footer a:hover{
  text-decoration: underline;
}
main .register .body form .footer button{
  background: #dd3333;
  border: none;
  color: white;
  padding: 8px 10px;
  border-radius: 6px;
}
</style>
