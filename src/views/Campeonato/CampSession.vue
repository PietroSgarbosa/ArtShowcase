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
                <!-- CORRIGIR LOGIN -->
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>

      <br />
      <br />

      <div class="painel">
        <div class="painelLeft">
          <h2>Título:</h2>
          <h2>{{ this.dados_campeonato.titulo }}</h2>
          <!-- CHAMAR DADOS DE CAMPEONATO, variaveis de e xemplo -->
        </div>
        <div class="painelRight">
          <h2>Criador:</h2>
          <h2>{{ this.dados_campeonato.criador }}</h2>
          <img
            src="/img/whiteeagle.png"
            class="d-inline-block align-top eagleClass"
            id="eagle3"
            alt="eagle"
          />
        </div>
      </div>

      <center>
        <div class="tab">
          <div>
            <b-card no-body>
              <b-tabs pills card vertical end>
                <!-- INFORMAÇÕES DO CAMPEONATO -->

                <b-tab active>
                  <template v-slot:title>
                    <b-spinner type="grow" small></b-spinner
                    ><strong> Informações </strong>
                  </template>
                  <div class="content1">
                    {{ this.dados_campeonato.descricao }}
                  </div>
                  <div class="content2"></div>
                </b-tab>

                <!-- ENTRAR E INSIRIR IMAGEM -->
                
                <b-tab active>
                  <template v-slot:title>
                    <b-spinner type="grow" small></b-spinner
                    ><strong> Inscrição </strong>
                  </template>
                  <div class="content1">
                    <p class="elementoTema">Tema:</p>
                    <p class="elementoTema">
                      {{ this.dados_campeonato.tema }}
                    </p>

                    <!-- variaveis de exemplo -->
                  </div>
                  <div class="content2" v-bind:style="HideParticipar">
                    <!-- COMBOBOX -->

                    <p class="elementoChoose">Selecionar Trabalho</p>
                    <br />
                    <select
                      split
                      split-variant="outline-primary"
                      variant="primary"
                      text="Artes Publicadas"
                      class="m-2"
                      v-model="choosenOne"
                    >
                      <option
                        v-for="index in user_images"
                        :key="index"
                        href="#"
                        :value="index.cod_image"
                      >
                        {{ index.titulo_image }}
                      </option>
                    </select>

                    <b-button
                      variant="success"
                      @click="inserirImgCamp"
                      class="elementoEnter"
                      >Participar!</b-button
                    >
                  </div>
                </b-tab>
               
                <!-- LISTAGEM E VOTAÇÃO -->
    
                <b-tab active>
                  <template v-slot:title>
                    <b-spinner type="grow" small ></b-spinner
                    ><strong @click="carregarImagens" > Votação </strong>
                  </template>

                  <div class="align">
                    <gallery
                      :images="images"
                      :index="index"
                      @close="index = null"
                    ></gallery>

                    <sequential-entrance fromRight>
                      <div
                        class="image"
                        v-for="(image, imageIndex) in images"
                        :key="imageIndex"
                        @click="index = imageIndex"
                        :style="{
                          backgroundImage: 'url(' + image.img_concorrente + ')',
                          width: '300px',
                          height: '200px'
                        }"
                      >
                        <div class="capsule">
                          <b-form-checkbox 
                            v-bind:style="chkVoteHide"
                            class="check"
                            size="lg"
                            @change="vote(image.id_img)"
                          ></b-form-checkbox>
                        </div>
                      </div>
                    </sequential-entrance>
                  </div>
                </b-tab>
                

                <!-- RESULTADOS FINAIS, ESSA SEÇAÕ DEVE SER BLOQUEADA ATÉ O FIM DO CAMPEONATO -->

                <b-tab active>
                  <template v-slot:title>
                    <b-spinner type="grow" small></b-spinner
                    ><strong> Resultado </strong>
                  </template>

                  <div class="content1">
                    <p class="elementoTema"></p>
                    <p class="elementoTema">
                      {{ this.dados_vencedor.nome_vencedor }}
                      <!-- VARIAVEIL DO VENCEDOR -->
                    </p>

                    <!-- variaveis de exemplo -->
                  </div>
                  <div class="trophy">
                    <img
                      :src="this.dados_vencedor.imagem_vencedor"
                      class="d-inline-block align-top"
                      id="gold"
                      alt="trophy"
                    />
                  </div>
                </b-tab>
              </b-tabs>
            </b-card>
          </div>
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

import SequentialEntrance from "vue-sequential-entrance";
import "vue-sequential-entrance/vue-sequential-entrance.css";
import VueGallery from "vue-gallery";

export default {
  component: {
    gallery: VueGallery
  },

  data: _ => {
    return {
      dados_campeonato: null,
      chkVoteHide: "",
      HideEntrada: "",
      HideVotacao: "",
      HideParticipar: "",
      user_data: null,
      user_images: null,
      images: [],
      index: null,
      choosenOne: null, //IMAGEM ESCOLHIDA
      voto: null,
      dados_vencedor: {
        nome_vencedor:'',
        imagem_vencedor:''
      }
    };
  },

  mounted() {

    if (localStorage.getItem("dados_campeonato")) {
      this.dados_campeonato = localStorage.getItem("dados_campeonato");
      // localStorage.removeItem("dados_campeonato");
      this.dados_campeonato = JSON.parse(this.dados_campeonato);
      //  console.log(this.dados_campeonato);
      this.user_data = JSON.parse(localStorage.getItem("user_data"));
      if(this.user_data === null){
        this.chkVoteHide= "display:none;";
        this.HideParticipar= "display:none;";
      }
    } 

    if(this.dados_campeonato.situacao == 0){
      this.HideParticipar = "";
      this.chkVoteHide = "display:none;";
    }else if(this.dados_campeonato.situacao == 1){
      this.HideParticipar = "display:none;";
      this.chkVoteHide = "";
    }else{
      this.HideParticipar= "display:none;"
      this.chkVoteHide = "";
    }
    
   axios
      .get("http://localhost:3035/championship/user_participating", {
        params: { 
          id_campeonato: this.dados_campeonato.codi_campe,
          id_usuario: this.user_data.id 
          }
      })
      .then(res => {
        if (res.status == 200) {
          if(res.data.results[0].participando == 1){
            this.HideParticipar = "display:none;";
          }
        } else if (res.status == 400) {
          this.HideParticipar = "display:none;";
        }
      });

   axios
      .get("http://localhost:3035/championship/user_voted", {
        params: { 
          id_campeonato: this.dados_campeonato.codi_campe,
          id_usuario: this.user_data.id 
          }
      })
      .then(res => {
        if (res.status == 200) {
          if(res.data.results[0].votou_sn == 1){
            this.chkVoteHide = "display:none;";
          }
        } else if (res.status == 400) {
          this.chkVoteHide = "display:none;";
        }
      });

    axios
      .get("http://localhost:3035/user/search_image_title", {
        params: { id: this.user_data.id }
      })
      .then(res => {
        if (res.status == 200) {
          this.user_images = res.data.results;
        } else if (res.status == 400) {
          this.user_images = "Não foi possível carregar as imagens";
        }
      });

    axios
      .get("http://localhost:3035/championship/get_championship_images", {
        params: { id_campeonato: this.dados_campeonato.codi_campe }
      })
      .then(res => {
        if (res.status == 200) {
          this.images = res.data.results;
        } else if (res.status == 400) {
          this.images = "Não foi possível carregar as imagens";
        }
      });

    axios
      .get("http://localhost:3035/championship/winner", {
        params: { id_campeonato: this.dados_campeonato.codi_campe }
      })
      .then(res => {
        if (res.status == 200) {
          if(this.dados_campeonato.situacao == 0){
          this.dados_vencedor.nome_vencedor = 'Fase de Inscrição... Participe você também!!!'
          this.dados_vencedor.imagem_vencedor = "/img/winner2.png";
          }else if(this.dados_campeonato.situacao == 1){
          this.dados_vencedor.nome_vencedor = 'Fase de Votação! Escolha sua arte preferida!'
          this.dados_vencedor.imagem_vencedor = "/img/winner2.png";
          }else{
          this.dados_vencedor.nome_vencedor = 'TEMOS UM VENCEDOR! Parabéns ' + res.data.results[0].nome_vencedor + '!!!';
          this.dados_vencedor.imagem_vencedor = res.data.results[0].imagem_vencedor;
          }
        } else if (res.status == 400) {
          this.dados_vencedor = "Não foi possível carregar o vencedor";
        }
      });
    
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
    logOut() {
      if (localStorage) {
        localStorage.clear();
      }
      this.$router.push("/");
    },

    async inserirImgCamp() {
      if(this.choosenOne === null){

        alert("Selecione um trabalho para participar!")
        
      }else{
      await axios;
      axios
        .post("http://localhost:3035/championship/participate_championship", {
          id_campeonato: this.dados_campeonato.codi_campe,
          id_usuario: this.user_data.id,
          id_imagem: this.choosenOne
        })
        .then(res => {
          if (res.status == 200) {
            if (localStorage.getItem("reloaded")) {
                    localStorage.removeItem("reloaded");
                  } else {
                    localStorage.setItem("reloaded", "1");
                    location.reload();
                  }
            alert("Boa sorte na competição!");
          } else if (res.status == 400) {
            alert("Não foi possível carregar os campeonatos");
          }
        });
      }
    },

    async vote(idImg){
      this.chkVoteHide = "display:none;";
      await axios;
      axios
      .post("http://localhost:3035/championship/vote_on_image",
      {
        id_campeonato : this.dados_campeonato.codi_campe,
        id_usuario : this.user_data.id,
        id_imagem : idImg
      })
      .then(res => {
                if(res.status == 200){
                 if (localStorage.getItem("reloaded")) {
                    localStorage.removeItem("reloaded");
                  } else {
                    localStorage.setItem("reloaded", "1");
                    location.reload();
                  }
                  alert("Voto computado!");
                }
                else if(res.status == 400){
                  alert("Não foi possível votar");
                }
              });
    },

    async carregarImagens(){
      await axios
      axios
        .get("http://localhost:3035/championship/get_championship_images", { params : { id_campeonato : this.dados_campeonato.codi_campe } })
        .then(res => {
          if(res.status == 200){
            this.images = res.data.results;
          }
          else if(res.status == 400){
            this.images = "Não foi possível carregar as imagens";
          }
      });

    }
  }
};
</script>

<style>
/* -------- CSS PTOTÓTIPO -------- */

@import url("https://fonts.googleapis.com/css?family=Fjalla+One&display=swap");

/* ANIMAÇÃO DA LISTAGEM */


.check {
  position: absolute;
  float: right;
  margin: 5px;
}

.align {
  position: relative;
  height: auto;
  width: 100%;
  justify-content: center;
  margin-left: 100px;
  padding-bottom: 20px;
  justify-content: left;
}

.capsule {
  position: absolute;
  width: 100%;
  height: 18%;
  bottom: 0;
  background-color: deepskyblue;
  padding-bottom: 20px;
  align-content: left;
}

.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
  background-color: aqua;
  margin-bottom: 30px;
}

.elementoVote {
  float: right;
  font-family: "Fjalla One", sans-serif;
  font-size: 20px;
  border: solid 1px;
  border-radius: 0px 20px 0px 20px;
  background-color: dodgerblue;
  color: white;
}

.elementoSession {
  font-family: "Fjalla One", sans-serif;
  font-size: 15px;
}

.elementoTema {
  font-family: "Fjalla One", sans-serif;
  font-size: 25px;
  float: left;
  margin-top: 10px;
  margin-left: 10px;
}

.elementoChoose {
  font-family: "Fjalla One", sans-serif;
  font-size: 25px;
  float: left;
  margin-top: 10px;
  margin-left: 10px;
}

.elementoEnter {
  position: relative;
  margin-top: -45px;
  margin-right: 10px;
  float: right;
  font-family: "Fjalla One", sans-serif;
  font-size: 20px;
  border: solid 1px;
  border-radius: 0px 20px 0px 20px;
  background-color: dodgerblue;
  color: white;
  left: 225px;
}

.content1 {
  position: relative;
  float: left;
  border: solid 1px;
  border-color: white;
  width: 50%;
  height: 120px;
  background-color: dodgerblue;
  border-radius: 5px 5px 5px 5px;
  padding: 5px;
}

.content2 {
  position: relative;
  width: 50%;
  height: 50%;
  border-radius: 5px 5px 5px 5px;
  padding: 5px;
  color: dodgerblue;
}

.painel {
  position: absolute;
  margin-top: 70px;
  margin-left: 130px;
  width: 650px;
  height: auto;
  background-color: dodgerblue;
  border: solid 1px;
  border-radius: 0px 20px 0px 20px;
  font-family: "Fjalla One", sans-serif;
  color: white;
  padding: 10px;
}

.painelLeft {
  position: relative;
  float: left;
  padding: 5px;
}

.painelRight {
  position: relative;
  left: 50px;
  padding: 5px;
}

.trophy {
  position: relative;
  float: right;
}

#gold {
  width: 80px;
  height: 110px;
  margin-left: -30px;
  margin-top: 10px;
}

.tab {
  position: relative;
  width: 80%;
  height: auto;
  top: 200px;
  margin: 10px;
  background-color: deepskyblue;
  color: black;
  color: white;
  border-radius: 0px 20px 0px 20px;
  padding-bottom: 30px;
  margin-bottom: 20px;
}

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
  width: 35px;
  height: 35px;
}

#eagle3 {
  width: 80px;
  height: 80px;
}

.eagleClass {
  position: absolute;
  float: right;
  right: 80px;
  top: 5px;
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
