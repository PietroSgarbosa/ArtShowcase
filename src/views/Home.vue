
<template variant="dark">
  <div>
   
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



<!-- CARROSSEL -->

  
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"

      img-width="1024"
      img-height="480"
      style="text-shadow: 3px 3px 3px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      
      <b-carousel-slide class="img" img-src="/img/tatoo.jpg">
        <h1 class="textCarousel"> Bem vindo ao ArtShowcase </h1>
        <p class="textCarousel1"> A sua plataforma de gerenciamento de competições e portfólios online. </p> 
      </b-carousel-slide>
    
      <b-carousel-slide class="img" img-src="/img/Sam.jpg">
        <h1 class="textCarousel">Este é o Carrossel, um mural sobre futuras notícias</h1>
      </b-carousel-slide>
      
      <b-carousel-slide class="img" img-src="/img/Klaus.jpg">
        <h1 class="textCarousel">Por favor professor nos ajude</h1>
      </b-carousel-slide>

      <b-carousel-slide class="img" img-src="/img/Ethel.jpg">
      </b-carousel-slide>

      <b-carousel-slide class="img" img-src="/img/Xenic.jpg">
      </b-carousel-slide>
      
    </b-carousel>


      <div class="fundo1">
        <img src="/img/whiteeagle.png" class="size-img"  style="display:inline" alt="Bird">
        <h3>O local perfeito para expandir a sua ideia</h3>
      </div>
      
      <div class="fundo2">
        <a class="link1"  @click="redirect1" href="#"> Vamos começar? </a>
      </div>



  <footer >
    <p class="footer-text"> ARTSHOWCASE - <b>SkyHorse.Inc</b> </p>
    <p class="footer-text"> COPYRIGHT© </p>
  </footer>

    
  </div>
</template>

<script>
import * as config from "@/config.json";
import Parallax from 'vue-parallaxy';

export default {
  component: {
    Parallax
  },
  data: _ => {
    return {

      slide: 0,
      sliding: null

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
    onSlideStart(slide) {
        this.sliding = true
      },
    onSlideEnd(slide) {
        this.sliding = false
      }

  }
};


</script>


<style>
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

.img {
  width: 100%;
  height: 480px;
  background: no-repeat;
}

.textCarousel {
  font-family: "Mansalva", cursive;
  font-size: 60px;
  -webkit-text-stroke-width: 1px; 
  -webkit-text-stroke-color:black;

}

.textCarousel1 {
  font-family:  "Andale Mono", monospace;
  font-size: 25px;
  text-shadow: 10px;
  -webkit-text-stroke-width: 0.5px; 
  -webkit-text-stroke-color:black;

}

.fundo1 {
  width: 100%;
  height: 200px;
  background-color: darkgray;
  text-align: center;
  font-family: "Mansalva", cursive;
  padding: 20px;
}

.fundo2 {
  width: 100%;
  height: 200px;
  background-color: darkgray;
  text-align: center;
  font-family: "Mansalva", cursive;
  padding: 30px;
}

h3 {
  font-size: 30px;
  text-shadow: 10px;
  color: white;
}

p {
  font-size: 25px;
  text-shadow: 10px;
  color: white;
}

.size-img {
  max-width: 140px !important;
  max-height: 140px !important;
}

.link1{
font-family: "Mansalva", cursive;
font-size: 40px;
color: aliceblue;
text-decoration:none;
top: 30px;
padding: 10px;
}
.link1:hover{
color: black;
text-decoration:none;
}
</style>