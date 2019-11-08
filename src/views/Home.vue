<template variant="dark">
  <div>
   
    <div class="fixed-top">
    <b-navbar class="nav1" toggleable="lg" type="dark" variant="dark">

      <b-navbar-brand class="title" @click="redirect" href="#">
        <img src="/img/whiteeagle.png" class="d-inline-block align-top" id="eagle" alt="eagle">
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
            <b-dropdown-item @click="redirect1" href="#">Logar Perfil</b-dropdown-item>
            <b-dropdown-item @click="redirect2" href="#">Cadastrar Perfil</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    </div>



<!-- CARROSSEL -->

    <div>
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
    </div>

    
      <div class="position-relative">
      <div class="fundo1">
        <img src="/img/whiteeagle.png" class="size-img"  style="display:inline" alt="Bird">
        <h3>O local perfeito para expandir a sua ideia</h3>
        <a class="link1"  @click="redirect1" href="#"> Vamos começar? </a>
      </div>
      </div>



  <!-- FOOTER AVANÇADO -->
  <div class="position-relative"> 
  <div class="footer">
    <footer id="suport">
      <ul>
        <li>
          <a href="">SkyHorse</a>
        </li>
        <li>
          <a href="">Sobre Nós</a>
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


export default {
  component: {},
  data: _ => {
    return {

      slide: 0,
      sliding: null

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

/* -------- CSS PTOTÓTIPO -------- */


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


.img {
  width: 100%;
  height: 480px;
  background: no-repeat;
}

.carousel {
  position: relative;
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
  background-color: darkgray;
  text-align: center;
  font-family: "Mansalva", cursive;
  padding: 10px;
  float:left;
  height: 350px;
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

}
.link1:hover{
color: black;
text-decoration:none;
}

#eagle {
  width: 35px;
  height: 35px;
}


/* --- FOOTER --- */

.footer {
  position: relative;
  width: 100%;
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  letter-spacing: 1px;
  bottom: 0;
  height: 60px;
  color: white;
  background-color: #333;
  float:right;
}

* {
  margin: 0;
  padding: 0;
}

#suport ul {
  background-color:#333;
  list-style:none;
  float: left;
  width: 100%;
}

#suport ul li {
  display: inline;
}

#suport ul li a {
    
    display: inline-block;
    margin:20px;
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
  margin:20px; 
  display: inline-block;
}


</style>