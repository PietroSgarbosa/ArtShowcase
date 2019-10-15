
<template >
  <div >

    <div class="fixed-top">
    <b-navbar class="nav1" toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand class="title" @click="redirect" href="#">
        <img src="/img/whiteeagle.png" class="d-inline-block align-top" id="eagle" alt="eagle">
        ArtShowCase 
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="text1">
          <b-nav-item @click="redirect1" href="#">Informação</b-nav-item>
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

    <center>
      <b-card class="signin">
        <b-col>
          <b-col>
            <b-col>
              <img src="/img/whiteeagle.png" alt="Icon" class="size-img" />
            </b-col>
            <b-col>
              <h4 class="mt-3">Entrar</h4>
            </b-col>
          </b-col>
          <b-row>
            <b-input-group prepend="Username">
              <b-form-input v-model="usuario"></b-form-input>
            </b-input-group>
          </b-row>
          <b-row>
            <b-input-group prepend="Password" class="mt-3">
              <b-form-input v-model="senha"></b-form-input>
            </b-input-group>
          </b-row>
          <b-row>
            <b-button variant="light" class="mt-3 mx-auto w-50" @click="autentificacao">Login</b-button>
          </b-row>
        </b-col>
        <b-col class="register1">
          <b-row>
           <a class="link2"  @click="redirect3" href="#"> Ainda não possui um perfil? Cadastre agora! </a>
          </b-row>
        </b-col>

      </b-card>
    </center>



    <!-- FOOTER AVANÇADO -->
  <div class="position-relative"> 
  <div class="footer">
    <footer id="suport">
      <ul>
        <li>
          <a href="">SkyHorse</a>
        </li>
        <li>
          <a href="">Sobre Nós</a>
        </li>
          <a class="right">2019, Projetado por Pietro.S. Codificado por SkyHorse.Labs</a>
      </ul>
    </footer>
  </div>
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
      senha: null
    };
  },

  beforeMount() {},

  methods: {

    redirect() {
      this.$router.push("home");
    },
    redirect1() {
      this.$router.push("information");
    },
    redirect2() {
      this.$router.push("contact");
    },
    redirect3() {
      this.$router.push("register");
    },


   
    async autentificacao() {
      
        await axios;

          /* ROTA DO SERVIDOR BACK */
        axios
          .post("http://localhost:3035/user/login", {
            usuario: this.usuario,
            senha: this.senha,
          })
    

          /* ROTA DO SERVIDOR BACK */

          .then(response => {
            if (response.status == 200) {
               alert("Usuário logado!")
              this.$router.push("/profile");
            } else {
                alert("Usuário ou senha incorretos!")
            }

          });

    }
  }
};
</script>

<style>
.signin {
  justify-content: center !important;
  width: 100%;
  margin-top: 10rem !important;
  max-width: 300px;
  background-color:gray;
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
  font-family: "Mansalva", cursive;
  font-size: 25px;
}

.text1 {
  font-family: "Mansalva", cursive;
  font-size: 18px;
}

.register1 {
  top: 20px;
}

.link2{
font-family: "Mansalva", cursive;
font-size: 20px;
color: aliceblue;
text-decoration:none;
}
.link2:hover{
color: black;
text-decoration:none;
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