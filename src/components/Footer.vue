<template>
    <main class="footer">
        <img class="logo" src="../assets/images/logo.png" alt=""/>
        <h3>#DCadA</h3>
        <div class="links">
            <router-link to="/">Impressum</router-link><span> | </span>
            <router-link to="/">Datenschutz</router-link><span> | </span>
            <router-link to="/">Nutzungsbedingungen</router-link>
        </div>
        <div class="under">
            <p>© 1919 - 2023 Der Club an der Alster e.V.</p>
            <p>Membr - Ein Service von Soft-Park</p>
        </div>
    </main>
</template>

<script>
import { RouterLink } from "vue-router";
export default {

}
</script>

<style scoped>
    .footer{
        background: #494949;
        margin-top: auto;
        height: 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .footer .logo{
        position: absolute;
        width: 100px;
        margin: 0px auto;
        top:-50px
    }
    .footer h3{
        font-size: 40px;
        color: white;
        font-weight: bold;
    }
    .footer .links{
        margin-top: 50px;
    }
     .footer .links a{
        color: #fff;
        text-decoration: none;
    }
    .footer .links a:hover{
        text-decoration:underline;
    }
    .footer .links span{
        color: #fff;
    }
    .footer .under{
        position: absolute;
        background: #1d1d1d;
        bottom: 0px;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content:space-around;
        padding: 15px;
    }
    .footer .under p{
        color: #fff;
    }
</style>