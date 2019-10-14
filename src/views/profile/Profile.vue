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
          <b-row no-gutters class="bg-transparent">
            <b-col>
              <div class="imgBox rounded-circle" href="#" @click="changeImage"></div>
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
          <b-tab title="Editar" active>
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
            <!-- FORMULARIO PARA UPAR IMAGEM -->

            <b-container>
              <h1>Insira a imagem</h1>
              <br />
              <br />

              <!-- PICTURE INPUT -->

              <picture-input
                ref="pictureInput"
                margin="16"
                width="600"
                height="600"
                accept="image/jpeg, image/png"
                size="10"
                :customStrings="{upload:'<h1>Bummer!</h1>',drag: 'Drag a GIF or GTFO'}"
                @change="onChange"
              ></picture-input>
              

              <!-- INSTANT PREVIEW -->

              
                <div class="file-upload-form">
                  Upload an image file:
                  <input type="file" @change="previewImage" accept="image/*" />
                </div>

              
              <!-- Upload Academind -->

              <div>
                <input 
                  type="file" 
                  @change="onFileSelected"
                  style="display: none"
                  ref="fileInput"
                >
                <button @click="$refs.fileInput.click()">Pick File  </button>
                <button @click="onUpload">Upload</button>
              </div>
            

              <br />
              <br />
            </b-container>
          </b-tab>
          <b-tab title="Campeonatos" active>
            <p>Campeonatos que você está participando</p>
            <!-- LISTAGEM DE CAMPEONATOS ATIVOS -->
          </b-tab>
        </b-tabs>
      </div>
    </center>

    <!-- DATADO 
    <div class="card2">
      
        <center>
           <b-card class="cardCenter">
             <img src="/img/reiLeaoCalvo.jpg" class="img" alt="Responsive image">
           <b-card-text>
              <p class="text1"><b>Username</b></p>
           </b-card-text>
           </b-card>
          </center>
      
    </div>
    -->

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
import axios from 'axios'

export default {
  component: {
    PictureInput
  },
  data: _ => {
    return {
      selectedFile: null
    };
  },

  methods: {
    
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
       this.selectedFile = event.target.files[0]
     },

     onUpload () {

       const fd = new formDate();
       fd.append('image', this.fileSelected, this.fileSelected.name)
        /* ROTA PARA BACK */
        axios.post("" , fd)
          .then(res => {
            console.log(res)
          })

     },

    /*

    onChange() {
      console.log("New picture selected!");
      if (this.$refs.pictureInput.image) {
        console.log("Picture loaded.");
      } else {
        console.log("FileReader API not supported: use the <form>, Luke!");
      }
    }
    */
  }

  
};
</script>

<style>
/* INSERÇÃO */

.file-upload-form, .image-preview {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    padding: 20px;
}
img.preview {
    width: 200px;
    background-color: white;
    border: 1px solid #DDD;
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