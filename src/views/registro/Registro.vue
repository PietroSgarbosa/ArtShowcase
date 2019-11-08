  <template>
  <div>
    <div class="fixed-top">
      <b-navbar class="nav1" toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand class="title" @click="redirect" href="#">Art Showcase</b-navbar-brand>

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
              <select v-model="sexo">
                <option disabled value>Selecione um:</option>
                <option>Masculino</option>
                <option>Feminino</option>
              </select>
              
            </b-input-group>

            <b-button variant="light" @click="registrarUser" class="mt-3 mx-auto w-50">Cadastrar</b-button>
          </b-row>
          <b-col class="login1">
            <b-row>
              <a class="link3" @click="redirect1" href="#">Já possui um perfil? Logue agora!</a>
            </b-row>
          </b-col>
        </b-col>
      </b-card>
    </center>

    <!-- FOOTER AVANÇADO -->
    <div class="position-relative">
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
      this.$router.push("information");
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
  font-family: "Mansalva", cursive;
  font-size: 25px;
}

.text1 {
  font-family: "Mansalva", cursive;
  font-size: 18px;
}

.login1 {
  top: 20px;
}

.link3 {
  font-family: "Mansalva", cursive;
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
