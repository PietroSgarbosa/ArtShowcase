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
              <b-nav-item @click="redirect1" href="#">Campeonatos</b-nav-item>
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
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>

      <center class="centro">
        <gallery
          :images="images"
          :index="index"
          @close="index = null"
        ></gallery>

        <div
          class="image"
          v-for="(image, imageIndex) in images"
          :key="imageIndex"
          @click="index = imageIndex"
          :style="{
            backgroundImage: 'url(' + image + ')',
            width: '300px',
            height: '200px'
          }"
        >
        <p href="#">teste</p>
        </div>
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

import VueGallery from "vue-gallery";

export default {
  component: {
    gallery: VueGallery
  },

  data: _ => {
    return {
      images: [
        "/img/Ethel.jpg",
        "/img/reiLeaoCalvo.jpg",
        "https://dummyimage.com/1280/000000/ffffff",
        "https://dummyimage.com/400/000000/ffffff"
      ],
      index: null
    };
  },

  beforeMount() {},

  methods: {
    redirect() {
      this.$router.push("/");
    },
    redirect1() {
      this.$router.push("AbaCamp");
    },
    redirect2() {
      this.$router.push("contact");
    },
    redirect3() {
      this.$router.push("register");
    },
    redirect6() {
      this.$router.push("showcase");
    }
  }
};
</script>

<style scoped>
/* -------- CSS PTOTÓTIPO -------- */

.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}

.centro {
  position: relative;
  
  top: 300px;
  width: 95%;
  height: auto;
  margin-left: 40px; 
}

.logo {
  position: relative;
  float: right;
  margin-left: 25px;
  top: 5px;
}

#eagle2 {
  width: 80x;
  height: 80px;
}

.elemento1 {
  font-family: "Fjalla One", sans-serif;
  font-size: 15px;
  width: 70%;
  border: solid 1px;
  border-radius: 0px 20px 0px 20px;
  margin-top: 20px;
}

.elemento2 {
  font-family: "Fjalla One", sans-serif;
  font-size: 15px;
  width: 70%;
  border: solid 1px;
  border-radius: 0px 20px 0px 20px;
  margin-top: 20px;
}

.button1 {
  font-family: "Fjalla One", sans-serif;
  font-size: 20px;
  width: 70%;
  border: solid 1px;
  border-radius: 0px 20px 0px 20px;
  margin-top: 20px;
}

.link2 {
  font-family: "Fjalla One", sans-serif;
  font-size: 15px;
  color: gray;
  text-decoration: none;
  margin-top: 25px;
}
.link2:hover {
  color: #0074d9;
  text-decoration: none;
}

.session {
  justify-content: center !important;
  width: 500px;
  margin-top: 10rem !important;
  background-color: #f0efef;
  border-radius: 3px;
  top: -40px;
  box-shadow: 3px 3px 3px 3px lightgray;
  height: 350px;
}

.topLogin {
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

#eagle {
  width: 35x;
  height: 35px;
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

.body {
  height: 100%;
  width: 100%;
}
</style>
