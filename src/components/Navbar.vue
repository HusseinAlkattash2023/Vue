<script>
import { RouterLink } from "vue-router";
export default {};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="../assets/images/logo.png" alt="" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              active-class="active_"
              class="nav-link"
              aria-current="page"
              to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link active-class="active_" class="nav-link" to="/UserEvents"
              >Veranstaltungen</router-link
            >
          </li>
          <li class="nav-item">
            <router-link active-class="active_" class="nav-link" to="/UserCoursesView"
              >Kurse und Camps</router-link
            >
          </li>
          <li class="nav-item">
            <router-link active-class="active_" class="nav-link" to="/UserGiftsView"
              >Gutscheine</router-link
            >
          </li>
          <li class="nav-item">
            <router-link active-class="active_" class="nav-link" to="/AboutUs"
              >Über uns</router-link
            >
          </li>
          <li class="nav-item">
            <router-link active-class="active_" class="nav-link" to="/Faq"
              >FAQ</router-link
            >
          </li>
        </ul>
        <div>
          <button class="auth">Anmelden/Registrieren</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-nav {
}
/* .active{
    background: red;
} */
.navbar-brand {
  margin-left: 50px;
}
img {
  width: 60px;
}
.auth {
  border: none;
  padding: 10px 15px;
  background: #dd3333;
  color: white;
  border-radius: 5px;
}
.collapse ul li a:hover{
    background: #dd3333;
    color: white;
    border-radius: 4px;
}
.active_{
    color: #dd3333;
}
</style>
