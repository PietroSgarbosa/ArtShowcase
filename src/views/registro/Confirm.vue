<template>
  <div class="corpo">
    <div class="corpo-over">
    <div class="fixed-top">
    <b-navbar class="nav1" toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand class="title" @click="redirect" href="#">
        <img src="/img/whiteeagle.png" class="d-inline-block align-top" id="eagle" alt="eagle" />
        Art Showcase</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="text1">
          
        
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>Usuário</em>
            </template>
            <b-dropdown-item @click="redirect1" href="#">Perfil</b-dropdown-item>
            <b-dropdown-item  href="#">Deslogar</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    </div>


  


    <center>
        <div class="sessionConfirm">
          <div class="topConfirm">
            <h1 class="welcome">Está tudo pronto!</h1>
            <img src="/img/whiteeagle.png" class="logo" id="eagle2" alt="eagle">
          </div>

          <br />
          <br />
            <p class="alias">O seu cadastro foi efetuado com suceso!</p>
          
          
          <br />

          <a class="link3" @click="redirect1" href="#">Ir ao seu perfil</a>

        </div>
        <br />
        <br />
      </center>

    
   


    </div>

    <div class="footer">
      <footer id="suport">
        <ul>
          <li>
            <a href>SkyHorse</a>
          </li>
          <li>
            <a href>Sobre Nós</a>
          </li>
          <a class="right">2019, Projetado por Pietro.S. Codificado por SkyHorse.Labs</a>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script>
import * as config from "@/config.json";
import axios from "axios";

export default {
  component: {},
  data: _ => {
    return {
      usuario: null,
      nick: null,
      email: null,
      senha: null,
      idade: null,
      sexo: null,
    };
  },

  methods: {

    redirect() {
      this.$router.push("/");
    },
    redirect1() {
      this.$router.push("profile");
    }
   
  

  }
};
</script>

<style>

#eagle2 {
  width: 80x;
  height: 80px;
}

.alias {
  font-family: "Fjalla One", sans-serif;
  font-size: 15px;
  color: black;
}


.button1 {
  font-family: "Fjalla One", sans-serif;
  font-size: 20px;
  width: 70%;
  border: solid 1px;
  border-radius: 0px 20px 0px 20px;
  margin-top: 20px;
}

.link3 {
  font-family: "Fjalla One", sans-serif;
  font-size: 30px;
  color: gray;
  text-decoration: none;
  margin-top: 25px;
}
.link3:hover {
  color: #0074d9;
  text-decoration: none;
}

.sessionConfirm {
  justify-content: center !important;
  width: 500px;
  margin-top: 10rem !important;
  background-color: #f0efef;
  border-radius: 3px;
  top: -40px;
  box-shadow: 3px 3px 3px 3px lightgray;
  height: 300px;
}

.topConfirm {
  width: 100%;
  background-color: #0074d9;
  height: 90px;
  box-shadow: 3px 3px 3px 3px lightgray;
}

.welcome {
  font-family: "Fjalla One", sans-serif;
  font-size: 32px;
  color: white;
  position: relative;
  float: left;
  margin-left: 10px;
  top: 25px;
}

.logo {
  position: relative;
  float: right;
  margin-left: 25px;
  top: 5px;
}




#eagle {
  width: 35x;
  height: 35px;
}

.corpo {
  background-image: url("/img/wppmini.jpg");
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  background-size: cover;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: auto;
}

.corpo-over {
  width: 100%;
  height: 100%;
  bottom: 0;
  position: relative;
}

h4 {
  color: white !important;
}
.size-img {
  max-width: 80px !important;
  max-height: 80px !important;
}

.nav1 {
  padding: 10px;
}

.title {
  font-family: "Fjalla One", sans-serif;
  font-size: 25px;
}

.text1 {
  font-family: "Fjalla One", sans-serif;
  font-size: 18px;
  color: aliceblue;
}


.cardCenter {
  justify-content: center !important;
  width: 100%;
  margin-top: 10rem !important;
  max-width: 300px;
  background-color: darkgray;
  top: -90px;
  border-radius: 10px;
  
}

.footer-text {
  text-align: center;
  font-family:  "Andale Mono", monospace;
  font-size: 20px;
  color: white;

}

/* --- FOOTER --- */

.footer {
  position: relative;
  width: 100%;
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  letter-spacing: 1px;
  bottom: 0;
  height: 60px;
  color: white;
  background-color: #333;
  float: right;
}

* {
  margin: 0;
  padding: 0;
}

#suport ul {
  background-color: #333;
  list-style: none;
  float: left;
  width: 100%;
}

#suport ul li {
  display: inline;
}

#suport ul li a {
  display: inline-block;
  margin: 20px;
  width: 100px;
  height: 50px;
  color: white;
  text-decoration: none;
}

#suport ul li a:hover {
  color: red;
}

.right {
  float: right;
  width: 550px;
  margin: 20px;
  display: inline-block;
}

</style>