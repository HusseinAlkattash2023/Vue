<template>
  <main class="events">
    <div class="header">
      <div class="part1">
        <h2>Veranstaltungen</h2>
        <div>
          <button><i class="bi bi-arrow-repeat"></i> 12</button>
          <button><i class="bi bi-calendar4-week"></i></button>
          <button><i class="bi bi-list-task"></i></button>
          <button><i class="bi bi-grid-3x3"></i></button>
          <button><i class="bi bi-table"></i></button>
        </div>
      </div>
      <form class="part2">
        <div class="top input-group">
          <div class="search me-3">
            <label>s</label>
            <input type="search" placeholder="Suchen..." />
          </div>
          <div class="date mx-4">
            <span>Von</span>
            <VueDatePicker
              v-model="date1"
              placeholder="Datum auswählen..."
            ></VueDatePicker>
          </div>
          <div class="date mx-4">
            <span>Bis</span>
            <VueDatePicker
              v-model="date2"
              placeholder="Datum auswählen..."
            ></VueDatePicker>
          </div>
        </div>
        <div class="bottom">
          <div class="me-3">
            <label>Ort</label>
            <select v-model="selected">
              <option disabled value="">Please select one</option>
              <option>Männlich</option>
              <option>Weiblich</option>
              <option>Andere</option>
            </select>
          </div>
          <div class="mx-4">
            <label>Sportart </label>
            <select v-model="selected">
              <option disabled value="">Please select one</option>
              <option>Männlich</option>
              <option>Weiblich</option>
              <option>Andere</option>
            </select>
          </div>
          <div class="mx-4">
            <label>Mannschaft</label>
            <select v-model="selected">
              <option disabled value="">Please select one</option>
              <option>Männlich</option>
              <option>Weiblich</option>
              <option>Andere</option>
            </select>
          </div>
        </div>
      </form>
    </div>
    <div class="body">
      <div>
        <h3>Morgen in meinem Club</h3>
        <div class="row">
          <div class="col" v-for="event in data" :key="event">
            <Event
              :image="event.image"
              :title="event.title"
              :text="event.text"
              :date="event.date"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import Event from "../components/Event.vue";

// import images
import image1 from "../assets/images/1a08616a-ee3b-459c-8f57-4ad7bce1c9d2.jpeg";
import image2 from "../assets/images/28741ea3-d48c-47b3-bb87-b392b25ae0b4.jpeg";
import image3 from "../assets/images/398828e3-82ee-416d-bc53-96c40c51246e.jpeg";
import image4 from "../assets/images/acd47b76-8afe-4a76-a5a6-863967e95062.jpeg";

export default {
  components: { VueDatePicker, Event },
  setup() {
    const date1 = ref();
    const date2 = ref();
    const data = ref([
      {
        image: image1,
        title: "1. BL Damen: DCadA vs. TEC Waldau",
        text: "Der Club an der Alster",
        date: "18.05.2023 | 11:00 h",
      },
      {
        image: image2,
        title: "RLNO Herren: TC 1899 Blau-Weiss Berlin II vs. DCadA",
        text: "Der Club an der Alster",
        date: "18.05.2023 | 11:00 h",
      },
      {
        image: image3,
        title: "1. BL Damen: DCadA vs. TEC Waldau",
        text: "Der Club an der Alster",
        date: "18.05.2023 | 11:00 h",
      },
      {
        image: image4,
        title: "1. BL Damen: DCadA vs. TC Bredeney e.V",
        text: "Der Club an der Alster",
        date: "18.05.2023 | 11:00 h",
      },
    ]);

    return {
      date1,
      date2,
      data,
    };
  },
};
</script>

<style>
.events {
  margin-bottom: 100px;
}
.events .header {
  background: black;
  padding: 20px;
}
.events .header .part1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.events .header .part1 h2 {
  font-size: 30px;
  color: white;
  font-weight: bold;
}
.events .header .part1 button {
  margin: 0px 3px;
  background: #5a6268;
  border: none;
  color: white;
  font-size: 20px;
  padding: 3px 10px;
  border-radius: 5px;
}
.events .header .part1 button:hover {
  opacity: 0.8;
}
.events .header .part2 {
  margin-top: 20px;
}

.events .header .part2 .top {
  display: flex;
  align-items: center;
  justify-content: start;
}
.events .header .part2 .bottom {
  display: flex;
  align-items: center;
  justify-content: start;
  margin-top: 20px;
}
.events .header .part2 .bottom div {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 23%;
}
.events .header .part2 .bottom div select {
  padding: 8px;
  background: white;
  border: none;
  border-radius: 4px;
}
.events .header .part2 .bottom div label {
  color: white;
}
.events .header .part2 .top .search {
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 23%;
}
.events .header .part2 .top .search input {
  padding: 8px;
  background: white;
  border: none;
  border-radius: 4px;
}
.events .header .part2 .top .date span {
  font-size: 15px;
  color: white;
}
.events .header .part2 .top .date {
  margin: 10px 0px;
  width: 23%;
}

.events .body {
  margin-top: 20px;
  padding: 20px;
}
.events .body h3 {
  text-align: center;
  position: relative;
  color: #5a6268;
}
.events .body h3::before {
  position: absolute;
  content: "";
  width: 36%;
  height: 1px;
  display: block;
  top: 15px;
  background: #b0b0b0;
}
.events .body h3::after {
  position: absolute;
  content: "";
  width: 36%;
  height: 1px;
  top: 15px;
  right: 0px;
  background: #b0b0b0;
}
.row {
  margin: 0px auto;
}
</style>
