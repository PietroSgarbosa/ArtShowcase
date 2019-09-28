<template>
  <div>

    <b-navbar class="nav1" toggleable="lg" type="dark" variant="danger">
      <b-navbar-brand class="title" @click="redirect" href="#">Art Showcase</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="text1">
          <b-nav-item href="#">Informação</b-nav-item>
          <b-nav-item href="#">Contato</b-nav-item>
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
            <b-dropdown-item href="#">Perfil</b-dropdown-item>
            <b-dropdown-item href="#">Deslogar</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>





    <center>
      <b-card class="register">
        <b-col>
          <b-col>
            <b-col>
              <img src="/img/whiteeagle.png" alt="Icon" class="size-img" />
            </b-col>
            <b-col>
              <h4 class="mt-3">Cadastrar</h4>
            </b-col>
          </b-col>
          <b-row>
            <b-input-group prepend="Nome" v-model="usuario" class="mt-3">
              <b-form-input></b-form-input>
            </b-input-group>
            <b-input-group prepend="Nick" v-model="nick" class="mt-3">
              <b-form-input></b-form-input>
            </b-input-group>
            <b-input-group prepend="Email" v-model="email" class="mt-3">
              <b-form-input></b-form-input>
            </b-input-group>
            <b-input-group prepend="Senha" v-model="senha" class="mt-3">
              <b-form-input></b-form-input>
            </b-input-group>
            <b-input-group prepend="Idade" v-model="idade" class="mt-3">
              <b-form-input></b-form-input>
            </b-input-group>
            <b-input-group prepend="Sexo" v-model="sexo" class="mt-3">
              <b-form-input></b-form-input>
            </b-input-group>
            <b-button variant="light" class="mt-3 mx-auto w-50">Cadastrar</b-button>
          </b-row>
        </b-col>
      </b-card>

    </center>


    <b-card-footer>
      <p class="footer-text" > ARTSHOWCASE - Pietro.S </p>
      <p class="footer-text"> COPYRIGHT© </p>
    </b-card-footer>



  </div>
</template>


<!-- ANTIGO REGISTRO

<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
       
        <b-col cols="6">
          <b-col class="d-flex align-items-center flex-column bd-highlight mb-3">
            <h4 class="mt-auto p-2 bd-highlight">Ingressão</h4>
            <p class="mt-auto p-2 bd-highlight">Apenas um passo para uma nova perspectiva</p>
          </b-col>
          <b-row>
            <b-input-group prepend="Username" v-model="usuario">
              <b-form-input></b-form-input>
            </b-input-group>
            <b-input-group prepend="Password" v-model="senha" class="mt-3">
              <b-form-input></b-form-input>
            </b-input-group>
            <b-input-group prepend="E-mail" v-model="email" class="mt-3">
              <b-form-input></b-form-input>
            </b-input-group>
            <b-input-group prepend="Confirmar E-mail" v-model="repetiremail" class="mt-3">
              <b-form-input></b-form-input>
            </b-input-group>
            <b-button variant="success" class="mt-3 w-25 botao">Sign Up</b-button>
          </b-row>
        </b-col>
        
      </div>
    </div>
  </div>
</template>
-->

<script>
import * as config from "@/config.json";

export default {
  component: {},
  data: _ => {
    return {
      usuario: null,
      nick: null,
      senha: null,
      email: null,
      idade: null,
    };
  },

  methods: {

    redirect() {
      this.$router.push("home");
    },
    redirect1() {
      this.$router.push("/");
    },
    redirect2() {
      this.$router.push("register");
    },
    redirect3() {
      this.$router.push("information");
    },
    redirect4() {
      this.$router.push("contact");
    }

  }
};
</script>

<style>
.register {
  justify-content: center !important;
  width: 100%;
  margin-top: 10rem !important;
  max-width: 300px;
  background-color: #f06464;
  top: -90px;
  border-radius: 10px;
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

b-card-footer {
  top: -30px;
  position: relative;
}

.footer-text {
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  
}

</style>