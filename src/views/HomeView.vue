<script>
import { ref, computed } from "vue";
import Card from "../components/Card.vue";

export default {
  setup() {
    const data = ref([
      {
        title:"Der Club an der Alster",
        body:"Hallerstraße 91, 20149 Hamburg",
        icon:"bi bi-geo-alt-fill"
      },
      {
        title:"E-Mai",
        body:"eventkalender@dcada.de",
        icon:"bi bi-envelope-fill"
      },
      {
        title:"FAQ",
        icon:"bi bi-wechat"
      },
    ])
    return {data}
  },
  components: { Card },
};
</script>

<template>
  <div>
    <main>
      <div class="header">
        <h2>eventkalender</h2>
        <h3>der club an der alster</h3>
      </div>
      <div class="buttons">
        <button>
          <router-link to="/UserEvents">Events</router-link>
        </button>
        <button>
          <router-link to="/UserCoursesView">Camps & Kurse</router-link>
        </button>
      </div>
    </main>
    <div class="cards">
    <div v-for="card in data" :key="card">
      <Card
        :title='card.title'
        :body='card.body'
        :icon='card.icon'
      />
    </div>
    </div>
    <div class="zum">
      <button>
            Zurück zum DCadA
      </button>
    </div>
  </div>
</template>

<style scoped>
main {
  background-image: url("../assets/images/Club.jpg");
  background-repeat: no-repeat;
  background-position: calc(50%);
  height: 90vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
main::before {
  position: absolute;
  z-index: 1;
  content: "";
  display: block;
  background: black;
  width: 100%;
  height: 100%;
  opacity: 0.5;
}
.header {
  display: grid;
  place-items: center;
  z-index: 2;
  margin-bottom: 20px;
  position: relative;
  bottom: 50px;
}
h2 {
  font-size: 80px;
  text-transform: uppercase;
  color: white;
  font-weight: 800;
}
h3 {
  text-transform: capitalize;
  color: white;
  font-size: 40px;
  font-weight: 800;
}
.buttons {
  z-index: 2;
  padding: 0px;
}
.buttons button {
  width: 270px;
  margin: 0px 10px;
  padding: 15px 0px;
  font-size: 25px;
  background: #dd3333;
  border: none;
  font-weight: bold;
  font-style: italic;
  border-radius: 5px;
}
.buttons button a{
  text-decoration: none;
  color: white;
}
.cards {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0px;
}
.zum{
  text-align: center;
  position: relative;
  bottom: 30px;
  margin-bottom: 60px;
}
.zum button{
  border: none;
  background: #dd3333;
  padding: 20px;
  font-size: 25px;
  font-weight: 800;
  color: white;
  border-radius: 6px;
}
</style>
