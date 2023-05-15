<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default{
  components:{Navbar , Footer}
}

</script>

<template>
  <header>
    <Navbar/>
  </header>
  <RouterView />
  <Footer/>
</template>

<style scoped>

</style>
