<template>
  <div class="body">
    <b-navbar class="nav1" toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand class="title" @click="redirect" href="#">
        <img src="/img/whiteeagle.png" class="d-inline-block align-top" id="eagle" alt="eagle" />
        ArtShowCase
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="text1">
          <b-nav-item @click="redirect3" href="#">Informação</b-nav-item>
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
            <b-dropdown-item @click="logOut" href="#">Deslogar</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- TOPO: IMAGEM DO USUÁRIO E NOME -->

    <center>
      <div class="profile">
        <b-card
          no-body
          class="topCard overflow-hidden border border-light bg-transparent"
          style="max-width: 540px;">

          <b-row no-gutters class="bg-transparent">
            <b-col>
              <div class="imgBox rounded-circle" href="#">
                <img class="img" v-bind:src="this.imagem" />
              </div>
            </b-col>
            <b-col md="6">
              <b-card-body>
                <h1>{{this.nome_usuario}}</h1>
                <b-card-text>{{this.nick}}</b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </center>

    <!-- TABS: DIVIDIDAS EM PUBLICAÇÕES, SUBMIT E EDIÇÕES -->

    <center>
      <div class="tab">
        <b-tabs content-class="mt-3" align="center" pills card >
          <div class="background">
          <b-tab title="Artes Publicadas" active>
            <h1>Seus trabalhos publicados</h1>
            <!-- LISTAGEM DE IMAGENS -->

            <!-- EXEMPLO DE COMO FICARÁ -->
            <b-container>
              <b-card class="secoes">
                <!-- TESTE PARA CHECAR O JSON -->
              </b-card>
            </b-container>
          </b-tab>
          <b-tab title="Publicar" active>
            <!-- FORMULARIO PARA UPAR IMAGEM COM PICTURE INPUT -->
            <h1>Insira a imagem</h1>
            <b-container>
              <div class="changeData">
                <br />
                <br />

                <div>
                  <b-form-group
                    class="elemento1"
                    id="fieldset-horizontal"
                    label-cols-sm="4"
                    label-cols-lg="3"
                    description="De um titulo ao seu trabalho para enriquecer seus dados."
                    label="Titulo"
                    label-for="input-horizontal"
                    :invalid-feedback="invalidFeedback3"
                    :valid-feedback="validFeedback"
                    :state="state3"
                  >
                    <b-form-input v-model="titulo" id="input-horizontal" :state="state3" trim></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="fieldset-horizontal"
                    label-cols-sm="4"
                    label-cols-lg="3"
                    description="Adicone uma breve descrição."
                    label="Descrição"
                    label-for="input-horizontal"
                    :invalid-feedback="invalidFeedback4"
                    :valid-feedback="validFeedback"
                    :state="state4"
                  >
                    <b-form-input v-model="descricaoImg" id="input-horizontal" :state="state4" trim></b-form-input>
                  </b-form-group>

                <input type="file" id="my_drawings" @change="onFileSelected('','my_drawings')" />
                  <br />
                    <b-button variant="primary" @click="onUpload" class="mt-3 mx-auto">Inserir no Portifólio</b-button>
                  <br />
                </div>
                <br />
                <br />
              </div>
            </b-container>
          </b-tab>
          <b-tab title="Campeonatos" active>
            <h1>Criação de Campeonatos</h1>
            <!-- LISTAGEM DE CAMPEONATOS ATIVOS -->

            <b-container>
              <div class="changeData">
                <br />
                <br />

                <div>
                  <b-form-group
                    class="elemento1"
                    id="fieldset-horizontal"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    description="Cada campeonato necessita de um titulo."
                    label="Nome do Campeonato"
                    label-for="input-horizontal"
                    :invalid-feedback="invalidFeedback5"
                    :valid-feedback="validFeedback"
                    :state="state5"
                  >
                    <b-form-input
                      v-model="nomeCampeonato"
                      id="input-horizontal"
                      :state="state5"
                      trim
                    ></b-form-input>
                  </b-form-group>

                  <br />

                  <b-row>
                    <b-col sm="2">
                      <label for="textarea-auto-height">Informações</label>
                    </b-col>
                    <b-col sm="10">
                      <b-form-textarea
                        placeholder="Explique as normas do seu campeonato."
                        rows="3"
                        max-rows="8"
                        description="É importante que todo campeonato possua um informativo para orientar os participantes."
                        v-model="info"
                        :invalid-feedback="invalidFeedback6"
                        :valid-feedback="validFeedback"
                        :state="state6"
                        trim
                      ></b-form-textarea>
                    </b-col>
                  </b-row>

                  <br />
                  <br />

                  <b-form-group
                    class="elemento1"
                    id="fieldset-horizontal"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    description="Defina um tema de desenho."
                    label="Tema"
                    label-for="input-horizontal"
                    :invalid-feedback="invalidFeedback7"
                    :valid-feedback="validFeedback"
                    :state="state7"
                  >
                    <b-form-input
                      v-model="tema"
                      id="input-horizontal"
                      :state="state7"
                      trim
                    ></b-form-input>
                  </b-form-group>

                  <br />
                  <br />

                  <label>Chaves</label>

                  <br />

                  <b-form-select
                    v-model="chave"
                    :options="options"
                    class="mb-3"
                    text-field="name"
                    disabled-field="notEnabled"
                    description="Escolha o número de chaves que você ira organizar."
                  ></b-form-select>

                  <br />
                  <br />

                  <b-button variant="primary" class="mt-3 mx-auto">Submit</b-button>
                </div>

                <br />
                <br />
              </div>
            </b-container>
          </b-tab>

          <b-tab title="Editar Dados" active>
            <!-- ATUALIZAÇÕES  -->
            <h1>Edite suas informações e troque sua imagem de perfil</h1>

            <br />
            <br />

            <div class="changeData" align="center">
              <b-form-group
                id="fieldset-1"
                description="Digite o seu novo nome de usuário."
                label="Usuário"
                label-for="input-1"
                :invalid-feedback="invalidFeedback1"
                :valid-feedback="validFeedback"
                :state="state1"
              >
                <b-form-input id="input-1" v-model="newUsername" :state="state1" trim></b-form-input>
              </b-form-group>

              <br />

              <b-row>
                <b-col sm="2">
                  <label for="textarea-auto-height">Descrição</label>
                </b-col>
                <b-col sm="10">
                  <b-form-textarea
                    placeholder="Digite sua descrição..."
                    rows="3"
                    max-rows="8"
                    description="Adicone uma breve descrição. do seu perfil e carreira"
                    v-model="descricaoUser"
                    :invalid-feedback="invalidFeedback2"
                    :valid-feedback="validFeedback"
                    :state="state2"
                    trim
                  ></b-form-textarea>
                </b-col>
              </b-row>

              <br />

              <b-input-group prepend="Sexo" class="mt-3" align="center">
                <select v-model="newGender">
                  <option disabled value>Selecione um:</option>
                  <option>Masculino</option>
                  <option>Feminino</option>
                </select>
              </b-input-group>

              <br />
              <br />

              <b-button variant="primary" @click="alteraDados" class="mt-3 mx-auto">Aceitar Edições</b-button>

              <br />
              <br />

              <input type="file" id="profile_pic" @change="onFileSelected('','profile_pic')" />
              <br />
              <br />
              <b-button variant="primary" @click="profilePic" class="mt-3 mx-auto">Definir imagem de perfil</b-button>
              <br />
            </div>
          </b-tab>
          </div>
        </b-tabs>
      </div>
    </center>

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
            <p class="right">2019, Projetado por Pietro.S. Codificado por SkyHorse.Labs</p>
          </ul>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import * as config from "@/config.json";
import axios from "axios";
/* variavel GLOBAL */
var image64;
export default {
  /* VALIDAÇÃO DOS CAMPOS DE CARACTERE */
  computed: {
    state1() {
      return this.newUsername.length >= 4 ? true : false;
    },
    invalidFeedback1() {
      if (this.newUsername.length > 4) {
        return "";
      } else if (this.newUsername.length > 1) {
        return "Digite pelo menos 4 caracteres.";
      } else {
        return "Por favor, digite algo.";
      }
    },
    state2() {
      return this.descricaoUser.length >= 10 ? true : false;
    },
    invalidFeedback2() {
      if (this.descricaoUser.length > 10) {
        return "";
      } else if (this.descricaoUser.length > 0) {
        return "Digite pelo menos 10 caracteres.";
      } else {
        return "Por favor, digite algo.";
      }
    },
    state3() {
      return this.titulo.length >= 4 ? true : false;
    },
    invalidFeedback3() {
      if (this.titulo.length > 4) {
        return "";
      } else if (this.titulo.length > 0) {
        return "Digite pelo menos 4 caracteres.";
      } else {
        return "Por favor, digite algo.";
      }
    },
    state4() {
      return this.descricaoImg.length >= 10 ? true : false;
    },
    invalidFeedback4() {
      if (this.descricaoImg.length > 10) {
        return "";
      } else if (this.descricaoImg.length > 0) {
        return "Digite pelo menos 10 caracteres.";
      } else {
        return "Por favor, digite algo.";
      }
    },
    state5() {
      return this.nomeCampeonato.length >= 5 ? true : false;
    },
    invalidFeedback5() {
      if (this.nomeCampeonato.length > 5) {
        return "";
      } else if (this.nomeCampeonato.length > 0) {
        return "Digite pelo menos 5 caracteres.";
      } else {
        return "Por favor, digite algo.";
      }
    },
    state6() {
      return this.info.length >= 10 ? true : false;
    },
    invalidFeedback6() {
      if (this.info.length > 10) {
        return "";
      } else if (this.info.length > 0) {
        return "Digite pelo menos 10 caracteres.";
      } else {
        return "Por favor, digite algo.";
      }
    },
    state7() {
      return this.tema.length >= 5 ? true : false;
    },
    invalidFeedback7() {
      if (this.tema.length > 5) {
        return "";
      } else if (this.tema.length > 0) {
        return "Digite pelo menos 5 caracteres.";
      } else {
        return "Por favor, digite algo.";
      }
    },
    validFeedback() {
      return this.state === true ? "Obrigado" : "";
    }
  },
  /*data() {
    return {
      //atributos definitivos
      newUsername: "",
      descricaoUser: "",
      titulo: "",
      descricaoImg: ""
      //atributos definitivos
    };
  },*/
  component: {},
  data: _ => {
    return {
      user_data: null,
      nome_usuario: null,
      nick: null,
      selectedFile: null,
      imagem: null,
      imageData: null,
      imgSrc: null,
      profile_pic: null,
      file: null,
      newGender: null,
      tema: "",
      newUsername: "",
      descricaoUser: "",
      titulo: "",
      descricaoImg: "",
      nomeCampeonato: "",
      info: "",

      /* AS VARIAVEIS DA CHAVE SERÃO DECLARADAS AQUI */
      selected: "2",
      options: [
        { item: "2", name: "2 Chaves" },
        { item: "4", name: "4 Chaves" },
        { item: "6", name: "6 Chaves" },
        { item: "8", name: "8 Chaves" }
      ]
    };
  },
  /* SCRIPT PARA RECEBER JSON DO LOCAL STORAGE */
  mounted() {
    if (localStorage.getItem("reloaded")) {
      localStorage.removeItem("reloaded");
    } else {
      localStorage.setItem("reloaded", "1");
      location.reload();
    }
    this.user_data = JSON.parse(localStorage.getItem("user_data"));
    this.nome_usuario = this.user_data.name;
    this.nick = this.user_data.nick;
    this.imagem = this.user_data.photo;
  },
  methods: {
    redirect() {
      this.$router.push("/");
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
    /* SCRIPT PARA DESLOGAR */
    logOut() {
      if (localStorage) {
        localStorage.removeItem("user_data");
      }
      this.$router.push("/");
    },
    /* SCRIPT PARA CAPTURAR A IMAGEM E USAR COMO URL */
    onFileSelected(event, id) {
      var file = document
      .querySelector('input[type=file][id='+id+']')
      .files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        this.imgSrc = event.target.result;
        image64 = this.imgSrc;
      }
      reader.readAsDataURL(file);
    },
    /* SCRIPT PARA SETAR IMAGEM DE PERFIL */
    async profilePic(){
      //this.user_data = JSON.parse(localStorage.getItem("user_data")); ---> NAO PRECISA USAR MAS NUNCA SE SABE
      await axios;

      axios
        //atualiza no banco de dados a imagem de perfil
        .put("http://localhost:3035/user/update_profile_pic", {
          imagem: image64,
          id: this.user_data.id
        })
        .then(response => {
          if (response.status == 200) {
            
            this.user_data.photo = image64;
            //atualiza no local storage a imagem de perfil
            localStorage.setItem("user_data", JSON.stringify(this.user_data));
            //muda a imagem de perfil logo após atualizar o local storage
            this.imagem = image64;
            alert("Imagem do Perfil alterada!");
          } else {
            alert("Ocorreu um erro na inserção.");
          }
        });
    },
    /* SCRIPT PARA UPAR IMAGEM DE TRABALHOS NA FUTURA GALERIA */
    async onUpload() {
      await axios;
      axios
        .post("http://localhost:3035/user/upload_image", {
          id: this.user_data.id,
          imagem: image64,
          titulo: this.titulo,
          descricao: this.descricaoImg
        })
        .then(response => {
          if (response.status == 200) {
            alert("Trabalho Inserido!");
            this.$router.push("Profile");
          } else {
            alert("Ocorreu um erro na inserção.");
          }
        });
    },
    /* PARA ATAULIZAR DADOS */
    async alteraDados() {
      await axios;
      axios
        /*altere aqui*/
        .put("http://localhost:3035//user/update_user_data", {
          id: this.user_data.id,
          newUsername: this.newUsername,
          descricaoUser: this.descricaoUser,
          newGender: this.newGender
        })
        .then(response => {
          if (response.status == 200) {
            alert("Alterações concluídas!");
            this.newUsername = null;
            this.descricaoUser = null;
            this.newGender = null;
            this.$router.push("Profile");
          } else {
            alert("Ocorreu um erro nas alterações.");
          }
        });
    }
  }
};
</script>

<style>
/* -------- CSS PTOTÓTIPO -------- */

.background {
  background-color: #f0efef
}

.elemento1 {
}

.changeData {
  width: 60% !important;
  padding: 5%;
  margin: 0;
}

.file-upload-form,
.image-preview {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding: 20px;
}
img.preview {
  width: 200px;
  background-color: white;
  border: 1px solid #ddd;
  padding: 5px;
}

/* SECÕES */

.secoes {
  width: 300px !important;
  height: 300px !important;
}

.imgSecoes {
  width: 80%;
  height: 80%;
}

.imgBox {
  width: 210px;
  height: 210px;
  border-color: black;
  border-width: 4px;
  border-style: solid;
}

.topCard {
  margin: 10px;
  padding: 10px;
  background-color: transparent !important;
  border-color: transparent !important;
}

.tab {
  width: 80%;
  height: auto;
  top: -90px;
  margin: 10px;
  background-color:deepskyblue;
}

.img {
  width: 100%;
  height: 100%;
  border-radius: 100px;
}

.profile {
  top: 30px;
  margin: 20px;
  position: relative;
  padding: 10px;
}

.card2 {
  width: 100%;
  height: 800px;
  position: fixed;
  background-color: cadetblue;
}

h4 {
  color: white !important;
}

#eagle {
  width: 35px;
  height: 35px;
}

.imgProfile {
  width: 210px;
  height: 210px;
  border-color: #333;
  border-width: 2px;
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
