  <template>
  <div>

    <b-navbar class="nav1" toggleable="lg" type="dark" variant="dark">
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
            <b-input-group prepend="Nome Completo">
              <b-form-input v-model="usuario"></b-form-input>
            </b-input-group>
            <b-input-group prepend="Username" class="mt-3">
              <b-form-input v-model="nick"></b-form-input>
            </b-input-group>
            <b-input-group prepend="E-mail" class="mt-3">
              <b-form-input v-model="email"></b-form-input>
            </b-input-group>
            <b-input-group prepend="Password" class="mt-3">
              <b-form-input v-model="senha"></b-form-input>
            </b-input-group>
            <b-input-group prepend="Idade" class="mt-3">
              <b-form-input v-model="idade"></b-form-input>
            </b-input-group>
            <b-input-group prepend="Sexo" class="mt-3">
              <b-form-input v-model="sexo"></b-form-input>
            </b-input-group>
          
            <b-button variant="light" @click="registrarUser" class="mt-3 mx-auto w-50">Cadastrar</b-button>
          </b-row>
          <b-col class="login1">
          <b-row>
           <a class="link3"  @click="redirect1" href="#"> Já possui um perfil? Logue agora! </a>
          </b-row>
        </b-col>
        </b-col>
      </b-card>

    </center>


    <footer >
      <p class="footer-text"> ARTSHOWCASE - <b>SkyHorse.Inc</b> </p>
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

    async registrarUser() {
      await axios
        axios.post('http://localhost:3035/user/register', {
          usuario: this.usuario,
          nick: this.nick,
          email: this.email,
          senha: this.senha,
          idade: this.idade,
          sexo: this.sexo,
        })
        .then(response => {
          if (response.status == 200) {
            alert("Usuário cadastrado com sucesso!")
            this.$router.push("Confirm")
          } else {
            alert("Ocorreu um erro no cadastro.")
          }
        });


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
  background-color:gray;
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
  font-family: "Mansalva", cursive;
  font-size: 25px;
}

.text1 {
  font-family: "Mansalva", cursive;
  font-size: 18px;
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

.login1 {
  top: 20px;
}

.link3{
font-family: "Mansalva", cursive;
font-size: 20px;
color: aliceblue;
text-decoration:none;
}
.link3:hover{
color: black;
text-decoration:none;
}

</style>