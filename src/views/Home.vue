<template>
  <div>
    <!--
    <b-button variant="success" @click="redirect"></b-button>
    -->


<!-- NAV BAR -->


    <b-navbar class="nav1" toggleable="lg" type="dark" variant="danger">

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
      img-width=""
      img-height=""
      style="text-shadow: 3px 3px 3px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52">
        <h1> Bem vindo ao ArtShowcase </h1>
        <p> A sua plataforma de gerenciamento de competições e portfólios online. </p> 
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Este é o Carrossel, um mural sobre futuras notícias</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>

    

<!-- CONTADOR CARROSSEL
    <p class="mt-4">
      Slide #: {{ slide }}
      <br />
      Sliding: {{ sliding }}
    </p>
-->

  <b-card-footer >
    <p class="footer-text"> ARTSHOWCASE - <b>SkyHorse.Inc</b> </p>
    <p class="footer-text"> COPYRIGHT© </p>
  </b-card-footer>




    
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
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  
}


</style>