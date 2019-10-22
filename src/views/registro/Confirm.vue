<template>
  <div>

    <div class="fixed-top">
    <b-navbar class="nav1" toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand class="title" @click="redirect" href="#">Art Showcase</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="text1">
          <b-nav-item @click="redirect3" href="#">Informação</b-nav-item>
          <b-nav-item @click="redirect4" href="#">Contato</b-nav-item>
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
    <b-card
     title="bem Vindo"
     img-src="https://picsum.photos/600/300/?image=25"
     img-alt="Image"
     img-top
     tag="article"
     style="max-width: 20rem;"
     class="cardCenter"
    
     >
        <b-card-text>
            <p class="text1"><b>O seu cadastro foi efetuado com sucesso!</b></p>
        </b-card-text>

        <b-button href="#" @click="redirectProfile" variant="light" class="mt-3 mx-auto w-50">Ir para Perfil</b-button>
    </b-card>
    </center>

    
    <footer>
      <p class="footer-text" > ARTSHOWCASE - <b>SkyHorse.Inc</b> </p>
      <p class="footer-text"> COPYRIGHT© </p>
    </footer>



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
    },
    redirectProfile() {
      this.$router.push("profile");
    },

    async registrarUser() {
      await axios
        axios.post('http://localhost:3035/user/register', {
          usuario: this.usuario,
          nick: this.nick,
          email: this.email,
          senha: this.senha,
          idade: this.idade,
          sexo: this.sexo
        })
        .then(response => {
          if (response.status == 200) {
            alert("Usuário cadastrado com sucesso!")
          } else {
            alert("Ocorreu um erro no cadastro.")
          }
        });


    }    

  }
};
</script>

<style>

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

footer {
  margin: 20px;
  position: relative;
  padding: 10px;
  
}

</style>