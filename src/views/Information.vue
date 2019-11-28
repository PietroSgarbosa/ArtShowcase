<template>
  <div class="background">
  


<!-- NAV BAR -->

    <div class="fixed-top">
    <b-navbar class="nav1" toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand class="title" @click="redirect1" href="#">Art Showcase</b-navbar-brand>

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
    </div>


<div>
  
  <div class="mt-4">
    
    <b-card 
    img-src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6cc53036-8043-47ba-9f06-6bffd17c442c/d12th7r-da0af054-d2c5-4880-a4e0-405feea3cf70.jpg/v1/fill/w_800,h_533,q_75,strp/horse_by_ch3h_d12th7r-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTMzIiwicGF0aCI6IlwvZlwvNmNjNTMwMzYtODA0My00N2JhLTlmMDYtNmJmZmQxN2M0NDJjXC9kMTJ0aDdyLWRhMGFmMDU0LWQyYzUtNDg4MC1hNGUwLTQwNWZlZWEzY2Y3MC5qcGciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.hIHR0Yh6zMe0HXRaL05OYe3HWbAnL3lDZmAEvWH0UM0"
    img-alt="Card image" 
    img-left
    
    title="Titulo"
    img-width="300px"
    img-height="300px"
    class="cardOne"
    >
      <b-card-text >
        EXEMPLOS DE CARDS PARA INFORMAÇÕES
      </b-card-text>
    </b-card>

    <b-card img-src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b98b7ee2-f21a-4a79-85b7-8c1b69c30f5a/d7pkoy-a913e6fd-8e6c-4ce5-9860-41d08a6879fc.jpg/v1/fill/w_987,h_809,q_70,strp/horses_by_evilshenanigans9_d7pkoy-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTMyOCIsInBhdGgiOiJcL2ZcL2I5OGI3ZWUyLWYyMWEtNGE3OS04NWI3LThjMWI2OWMzMGY1YVwvZDdwa295LWE5MTNlNmZkLThlNmMtNGNlNS05ODYwLTQxZDA4YTY4NzlmYy5qcGciLCJ3aWR0aCI6Ijw9MTYyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.9Ficn9h0iSAx_kl_ffoX81qzaWBv-bILHPa63xQ8tyQ"
    img-alt="Card image"
    img-right

    title="Titulo"
    img-width="300px"
    img-height="300px"
    class="cardTwo"
    >
      <b-card-text>
        EXEMPLOS DE CARDS PARA INFORMAÇÕES
      </b-card-text>
    </b-card>
  </div>
</div>



  <div class="footer">
    <footer id="suport">
      <ul>
        <li>
          <a href="">SkyHorse</a>
        </li>
        <li>
          <a href="">Sobre Nós</a>
        </li>
          <p class="right">2019, Projetado por Pietro.S. Codificado por SkyHorse.Labs</p>
      </ul>
    </footer>
    </div>
  
    
  <!-- FOOTER ANTIGO
  <footer >
    <p class="footer-text"> ARTSHOWCASE - <b>SkyHorse.Inc</b> </p>
    <p class="footer-text"> COPYRIGHT© </p>
  </footer>
  -->



    
  </div>
</template>

<script>
import * as config from "@/config.json";

export default {
  component: {},
  data: _ => {
      return {

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

.cardOne {
  margin: 0px;
  text-align: right;
}


/* FOOTER */

.footer {
  width: 100%;
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  letter-spacing: 1px;
  color: white;
  background-color: #333;
}

* {
  margin: 0;
  padding: 0;
}

#suport {
  width: 100%;
  height: 150px;
  background-color: #333;
  position: relative;
  bottom: 0;
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

.body {
  height: 100%;
  width: 100%;
  
}

</style>