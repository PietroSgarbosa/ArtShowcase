<template>
  <div>
    <!--
    <b-button variant="success" @click="redirect"></b-button>
    -->

    <!-- NAV BAR -->

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
            <b-dropdown-item @click="redirect1" href="#">Logar Perfil</b-dropdown-item>
            <b-dropdown-item @click="redirect2" href="#">Cadastrar Perfil</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <h1>Insira a imagem</h1>
    <br />
    <br />
    <picture-input
      ref="pictureInput"
      @change="onChange"
      margin="16"
      width="600"
      height="600"
      accept="image/jpeg, image/png"
      size="10"
      :removable="true"
      :customStrings="{upload:'<h1>Bummer!</h1>',drag: 'Drag a GIF or GTFO'}"
    ></picture-input>
    <br />
    <br />

    <div class="file-upload-form">
      Upload an image file:
      <input type="file" @change="previewImage" accept="image/*" />
    </div>
    <div class="image-preview" v-if="imageData.length">
      <img class="preview" :src="imageData" />
    </div>

    <!-- CARROSSEL -->

    <footer>
      <p class="footer-text">
        ARTSHOWCASE -
        <b>SkyHorse.Inc</b>
      </p>
      <p class="footer-text">COPYRIGHT©</p>
    </footer>
  </div>
</template>

<script>
import * as config from "@/config.json";
import PictureInput from "vue-picture-input";

export default {
  component: {
    PictureInput
  },
  data: _ => {
    return {
      imageData: ""
    };
  },

  methods: {
    previewImage: function(event) {
      var input = event.target;

      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = e => {
          this.imageData = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
      }
    }
  }
};
</script>


<style>

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

footer {
  margin: 20px;
  position: relative;
  padding: 10px;
}
</style>