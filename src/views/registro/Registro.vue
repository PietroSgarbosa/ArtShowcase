<template>
  <div class="corpo">
    <div class="corpo-over">
    <div class="fixed-top">
      <b-navbar class="nav1" toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand class="title" @click="redirect" href="#">
        <img src="/img/whiteeagle.png" class="d-inline-block align-top" id="eagle" alt="eagle">
        ArtShowCase 
      </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="text1">
            <b-nav-item @click="redirect3" href="#">Campeonatos</b-nav-item>
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
        <div class="sessionRegister">
          <div class="topLoginRegister">
            <h1 class="welcome">É um iniciante?</h1>
            <img src="/img/whiteeagle.png" class="logo" id="eagle2" alt="eagle">
          </div>

          <b-form-input class="elemento10" v-model="usuario" placeholder="Nome Completo"></b-form-input>

          <b-form-input class="elemento20" v-model="nick" placeholder="Username"></b-form-input>

          <b-form-input class="elemento20" v-model="email" placeholder="E-mail"></b-form-input>

          <b-form-input class="elemento20" v-model="senha" placeholder="Senha"></b-form-input>

          <b-form-input class="elemento20" v-model="idade" placeholder="Idade"></b-form-input>

          <br />
          <br />

          <p class="alias">Escolha o seu Sexo</p>

          <select v-model="sexo">
                <option disabled value>Selecione um:</option>
                <option>Masculino</option>
                <option>Feminino</option>
              </select>

          <br />
          <br />

          <b-button variant="primary" class="button1" @click="registrarUser">Cadastrar</b-button>

          <br />
          <br />

          <a class="link2" @click="redirect1" href="#">Ainda não possui um perfil? Cadastre agora!</a>
        </div>
        <br />
        <br />
      </center>



    <!-- FOOTER AVANÇADO -->
      
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
      sexo: null
    };
  },

  methods: {
    redirect() {
      this.$router.push("/");
    },
    redirect1() {
      this.$router.push("login");
    },
    redirect2() {
      this.$router.push("register");
    },
    redirect3() {
      this.$router.push("AbaCamp");
    },
    redirect4() {
      this.$router.push("contact");
    },

    async registrarUser() {
      await axios;
      axios
        .post("http://localhost:3035/user/register", {
          usuario: this.usuario,
          nick: this.nick,
          email: this.email,
          senha: this.senha,
          idade: this.idade,
          sexo: this.sexo
        })
        .then(response => {
          if (response.status == 200) {
            alert("Usuário cadastrado com sucesso!");
            this.$router.push("Confirm");
          } else {
            alert("Ocorreu um erro no cadastro.");
          }
        });

        await axios;

      /* ROTA DO SERVIDOR BACK */
    axios
      .post("http://localhost:3035/user/login", {
        nick: this.nick,
        senha: this.senha,
        user_data: []
      })


      /* ROTA DO SERVIDOR BACK */

      .then(response => {
        if (response.status == 200) {
          this.user_data = (response.data.user);
          localStorage.setItem('user_data', JSON.stringify(this.user_data));
          var welcome = JSON.parse(localStorage.getItem("user_data"));
          alert("Bem vindo " + welcome.nick + "!")
          welcome = null;
          this.$router.push("/confirm");
        } else {
            alert("Erro no cadastro!")
        }
      });

    }
  }
};
</script>

<style>

/* -------- CSS PTOTÓTIPO -------- */

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

.alias {
  font-family: "Fjalla One", sans-serif;
  font-size: 15px;
  color: black;
}


.elemento10 {
  font-family: "Fjalla One", sans-serif;
  font-size: 15px;
  width: 70%;
  border: solid 1px;
  border-radius: 0px 20px 0px 20px;
  margin-top: 20px;
}

.elemento20 {
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

.sessionRegister {
  justify-content: center !important;
  width: 500px;
  margin-top: 10rem !important;
  background-color: #f0efef;
  border-radius: 3px;
  top: -40px;
  box-shadow: 3px 3px 3px 3px lightgray;
  height: 650px;
}

.topLoginRegister {
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





#eagle {
  width: 35px;
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


.register {
  justify-content: center !important;
  width: 100%;
  margin-top: 10rem !important;
  max-width: 300px;
  background-color: gray;
  top: -90px;
  border-radius: 10px;
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
  font-family: 'Fjalla One', sans-serif;
  font-size: 25px;
}

.text1 {
  font-family: 'Fjalla One', sans-serif;
  font-size: 18px;
}

.login1 {
  top: 20px;
}

.link3 {
  font-family: 'Fjalla One', sans-serif;
  font-size: 20px;
  color: aliceblue;
  text-decoration: none;
}
.link3:hover {
  color: black;
  text-decoration: none;
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
