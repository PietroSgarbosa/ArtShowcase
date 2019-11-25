<template>
  <div class="corpo">
    <div class="corpo-over">
      <div class="fixed-top">
        <b-navbar class="nav1" toggleable="lg" type="dark" variant="dark">
          <b-navbar-brand class="title" @click="redirect" href="#">
            <img
              src="/img/whiteeagle.png"
              class="d-inline-block align-top"
              id="eagle"
              alt="eagle"
            />
            ArtShowCase
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="text1">
              <b-nav-item @click="redirect6" href="#">Galeria</b-nav-item>
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
                <b-dropdown-item @click="redirect1" href="#"
                  >Perfil</b-dropdown-item
                >
                <b-dropdown-item @click="logOut" href="#"
                  >Deslogar</b-dropdown-item
                >
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>

      <br />
      <br />

      <div class="conteudo">
        <div id="app2">
          <h1>Campeonatos Disponivéis</h1>

          <sequential-entrance fromRight>
            <div class="box2" v-for="index in campeonatos" :key="index">
              <div class="leftbox">
                <p class="alias2">Titulo: {{ index.titulo }}</p>
              </div>
              <div class="rightbox">
                <p class="alias3">Criador: {{ index.criador }}</p>
                <b-button
                  variant="success"
                  @click="redirectCamp"
                  class="elementoCamp"
                  >Ver</b-button
                >
              </div>
            </div>
          </sequential-entrance>
        </div>
      </div>
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
          <a class="right"
            >2019, Projetado por Pietro.S. Codificado por SkyHorse.Labs</a
          >
        </ul>
      </footer>
    </div>
  </div>
</template>

<script>
import * as config from "@/config.json";
import axios from "axios";

import SequentialEntrance from "vue-sequential-entrance";
import "vue-sequential-entrance/vue-sequential-entrance.css";

export default {
  component: {},

  data: _ => {
    return {
      campeonatos : []
    };
  },

  mounted() {
    axios.get("http://localhost:3035/championship/get_championship")
             .then(res => {
                if(res.status == 200){
                  this.campeonatos = res.data.results;
                }
                else if(res.status == 404){
                  this.campeonatos = "Não foi possível carregar os campeonatos";
                }
              })
  },

  methods: {
    redirect() {
      this.$router.push("/");
    },
    redirect1() {
      this.$router.push("profile");
    },
    redirect6() {
      this.$router.push("showcase");
    },
    redirectCamp() {
      this.$router.push("CampSession");
    }
  }
};
</script>

<style>
/* -------- CSS PTOTÓTIPO -------- */

@import url("https://fonts.googleapis.com/css?family=Fjalla+One&display=swap");

/* ANIMAÇÃO DA LISTAGEM */

.elementoCamp {
  font-family: "Fjalla One", sans-serif;
  font-size: 20px;
  border: solid 1px;
  border-radius: 0px 20px 0px 20px;
  float: right;
  background-color: dodgerblue;
  color: white;
  position: relative;
  margin-top: -30px;
  margin-right: 10px;
}

.leftbox {
  position: relative;
  float: left;
}

.rightbox {
  position: relative;
}

.alias2 {
  margin-top: 10px;
  margin-left: 10px;
  font-family: "Fjalla One", sans-serif;
  font-size: 20px;
  color: white;
}

.alias3 {
  margin-top: 10px;
  margin-left: 10px;
  font-family: "Fjalla One", sans-serif;
  font-size: 20px;
  color: white;
}

.conteudo {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  float: left;
  left: 0;
}

#app2 {
  font-family: "Fjalla One", sans-serif;
  font-size: 15px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app2 > span {
  display: grid;
  justify-content: center;
  bottom: 0;
}
.box2 {
  border-radius: 3px;
  background-color: #0074d9;
  width: 800px;
  height: 80px;
  margin: 1rem;
  box-shadow: 3px 3px 3px 3px lightgray;
  justify-content: left;
}

/* CSS PADRÃO */

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

.signin {
  justify-content: center !important;
  width: 100%;
  margin-top: 10rem !important;
  max-width: 300px;
  background-color: gray;
  border-radius: 10px;
  top: -40px;
  padding: 5px;
  border-color: gray;
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
}

.register1 {
  top: 20px;
}

.link2 {
  font-family: "Fjalla One", sans-serif;
  font-size: 20px;
  color: aliceblue;
  text-decoration: none;
}
.link2:hover {
  color: black;
  text-decoration: none;
}

#eagle {
  width: 35x;
  height: 35px;
}

/* --- FOOTER --- */

.footer {
  position: relative;
  width: 100%;
  font-family: "Fjalla One", sans-serif;
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

.body {
  height: 100%;
  width: 100%;
}
</style>
