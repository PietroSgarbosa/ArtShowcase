<template>
  <div>

    <b-navbar class="nav1" toggleable="lg" type="dark" variant="danger">
      <b-navbar-brand class="title" @click="redirect" href="#">Art Showcase</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="text1">
          <b-nav-item @click="redirect1" href="#">Informação</b-nav-item>
          <b-nav-item @click="redirect2" href="#">Contato</b-nav-item>
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
            <b-input-group prepend="Username" v-model="usuario">
              <b-form-input></b-form-input>
            </b-input-group>
          </b-row>
          <b-row>
            <b-input-group prepend="Password" v-model="senha" class="mt-3">
              <b-form-input></b-form-input>
            </b-input-group>
          </b-row>
          <b-row>
            <b-button variant="light" class="mt-3 mx-auto w-50" @click="autentificacao">Login</b-button>
          </b-row>
        </b-col>
      </b-card>
    </center>



    <b-card-footer >
      <p class="footer-text"> ARTSHOWCASE - Pietro.S </p>
      <p class="footer-text"> COPYRIGHT© </p>
    </b-card-footer>


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


    verificaCampos() {
      if (usuario == null || usuario == "") return false;
      if (senha == null || senha == "") return false;
      return true;
    },
    async autentificacao() {
      if (this.verificaCampos()) {
        await axios
          .get(`${config.default.servidor}/authentification/`)
          .then(response => {
            if (response.status == 200) {
              if(this.usuario == response.data.usuario) return true;
              if(this.senha == response.data.senha)return true;
            }
          });
      }
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
  background-color: #f06464;
  border-radius: 10px;
  top: -40px;
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

.footer-text {
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  
}

</style>