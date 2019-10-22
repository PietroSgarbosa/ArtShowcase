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
            <b-dropdown-item href="#">Deslogar</b-dropdown-item>
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
          style="max-width: 540px;"
        >


        <!-- SCRIPT PARA MUDAR A IMAGEM DO USUÁRIO EM CODIFICAÇÃO -->


          <b-row no-gutters class="bg-transparent">
            <b-col>
              <div class="imgBox rounded-circle" href="#"></div>
            </b-col>
            <b-col md="6">
              <b-card-body>
                <h1>Username</h1>
                <b-card-text>Descrição do usuario</b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </center>

    <!-- TABS: DIVIDIDAS EM PUBLICAÇÕES, SUBMIT E EDIÇÕES -->

    <center>
      <div class="tab">
        <b-tabs content-class="mt-3" align="center" pills card>
          <b-tab title="Artes Publicadas" active>
            <p>Seus trabalhos publicados</p>
            <!-- LISTAGEM DE IMAGENS -->

            <b-container>
              <b-card class="secoes">
                <img src="/img/reiLeaoCalvo.jpg" class="imgSecoes d-inline-block align-top" />
              </b-card>

              <b-card class="secoes">
                <img src="/img/Sam.jpg" class="imgSecoes d-inline-block align-top" />
              </b-card>
            </b-container>
          </b-tab>
          <b-tab title="Publicar" active>
            <p>Submeter um trabalho</p>

            <!-- FORMULARIO PARA UPAR IMAGEM COM PICTURE INPUT -->

            <b-container>
              <h1>Insira a imagem</h1>
              <br />
              <br />

              <!-- PICTURE INPUT 

               <b-form-group
                  id="fieldset-horizontal"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  description="De um titulo ao seu trabalho para enriquecer seus dados."
                  label="Titulo"
                  label-for="input-horizontal"
                >
                  <b-form-input v-model="titulo" id="input-horizontal"></b-form-input>
                </b-form-group>

                <b-form-group
                  id="fieldset-horizontal"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  description="Adicone uma breve descrição."
                  label="Descrição"
                  label-for="input-horizontal"
                >
                  <b-form-input v-model="descricao" id="input-horizontal"></b-form-input>
                </b-form-group>

                <br />


              <b-card header="Editar Imagem">
              <picture-input
                ref="pictureInput"
                :zIndex="10"
                style="width: 100%;"
                margin="16"
                accept="image/jpeg, image/png"
                size="10"
                buttonClass="btn"
                :custom-strings="{
                   upload: '<h1>Seu dispositivo não aceita este tipo!</h1>',
                   drag: 'Arraste uma imagem <br> (ou clique aqui)',
                   change: 'Mudar imagem'
                }"
                @change="onChange"
              ></picture-input>
              </b-card>
              
              <b-button variant="primary" @click="onUpload" class="mt-3 mx-auto">Submit</b-button>

              -->

              <!-- INSTANT PREVIEW 

              
                <div class="file-upload-form">
                  Upload an image file:
                  <input type="file" @change="previewImage" accept="image/*" />
                </div>

              -->

              

              <div>
                <b-form-group
                  id="fieldset-horizontal"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  description="De um titulo ao seu trabalho para enriquecer seus dados."
                  label="Titulo"
                  label-for="input-horizontal"
                >
                  <b-form-input v-model="titulo" id="input-horizontal"></b-form-input>
                </b-form-group>

                <b-form-group
                  id="fieldset-horizontal"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  description="Adicone uma breve descrição."
                  label="Descrição"
                  label-for="input-horizontal"
                >
                  <b-form-input v-model="descricao" id="input-horizontal"></b-form-input>
                </b-form-group>

                <input type="file" @change="onFileSelected" />

                <br />
                <br />


                <b-button variant="primary" @click="onUpload" class="mt-3 mx-auto">Submit</b-button>
              </div>

              

              <br />
              <br />
            </b-container>
          </b-tab>
          <b-tab title="Campeonatos" active>
            <p>Campeonatos que você está participando</p>
            <!-- LISTAGEM DE CAMPEONATOS ATIVOS -->
          </b-tab>

          <b-tab title="Editar Dados" active>
            <p>Atualizar dados do perfil</p>
            <!-- ATUALIZAÇÕES  -->
          </b-tab>
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
import PictureInput from "vue-picture-input";
import axios from "axios";

/* IMPORTS AINDA SEM USO */
import VueJwtDecode from 'vue-jwt-decode';


export default {
  name: "editarimagem",
  component: {
    PictureInput
  },
  data: _ => {
    return {
      titulo: null,
      descricao: null,
      selectedFile: null,
      file: null
    };
  },

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

    /*

     previewImage: function(event) {
            
            var input = event.target;
            
            if (input.files && input.files[0]) {
                
                var reader = new FileReader();
                
                reader.onload = (e) => {
                    
                    
                    this.imageData = e.target.result;
                }
                
                reader.readAsDataURL(input.files[0]);
            }

     },

    */

   
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },

    onUpload() {
      const fd = new FormData();
      fd.append("image", this.fileSelected, this.fileSelected.name);
     
      axios

      /* Aqui temos a variavel fd (imagem), descricao e titulo sendo postados */
  
        .post(
          "http://localhost:3035/user/register",
          fd, {titulo: this.titulo, descricao: this.descricao},
          {onUploadProgress: uploadEvent => {
              console.log(
                "Progresso do upload: " +
                  Math.round((uploadEvent.loaded / uploadEvent.total) * 100) +
                  "%"
              );
            }
          }
        )

        .then(response => {
          if (response.status == 200) {
            alert("Trabalho Inserido!");
            this.$router.push("Profile");
          } else {
            alert("Ocorreu um erro na inserção.");
          }
        });
    },
    

    /* ONCHANGE POR DOCUMENTAÇÃO E "FIORIN" 
      onChange(image) {
        
        if (image) {
          this.saveBtn = true;
          localStorage.setItem("image", image);
        } else {
          this.saveBtn = false;
        }
      }
      */
    }

    
  
};
</script>

<style>


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
  background-color: white;
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