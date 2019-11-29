import Vue from "vue";
import Router from "vue-router";

//Cadastro
const Register = () => import("@/views/registro/Registro");

//Login
const Login = () => import("@/views/login/Login");

//Home
const Home = () => import("@/views/Home");

//Perfil
const Profile = () => import("@/views/profile/Profile");

//Contato
const Contact = () => import("@/views/Contact");

//Informações
const Information = () => import("@/views/Information");

//Confirmação de Cadastro
const Confirm = () => import("@/views/registro/Confirm");

//Listagem de campeonatos
const AbaCamp = () => import("@/views/Campeonato/AbaCamp");

//Sessão do campeonato
const CampSession = () => import("@/views/Campeonato/CampSession");

//Showcase
const Showcase = () => import("@/views/Showcase");

Vue.use(Router);

let router = new Router({
  mode: "history", // https://router.vuejs.org/api/#mode
  linkActiveClass: "open active",
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/register",
      name: "Sign Up",
      component: Register,
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      /*
      meta: {
        requiresAuth: true
      },
      */
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
    {
      path: "/information",
      name: "Information",
      component: Information,
    },
    {
      path: "/Confirm",
      name: "Confirm",
      component: Confirm,
    },
    {
      path: "/abaCamp",
      name: "AbaCamp",
      component: AbaCamp,
    },
    {
      path: "/campSession",
      name: "CampSession",
      component: CampSession,
    },
    {
      path: "/Showcase",
      name: "Showcase",
      component: Showcase,
    }
  ],
});

/* AUTENTICADOR DE LOGIN PROTOTIPO NÃO FUNCIONAL */
/*

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next({
        path: "/",
        params: {
          nextUrl: to.fullPath
        }
      });
    } else {
      if (to.matched.some(record => record.meta.is_admin)) {
        next({
          name: "Relatórios"
        });
      } else {
        next();
      }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem("jwt") == null) {
      next();
    } else {
      next({
        name: "Relatórios"
      });
    }
  } else {
    next();
  }
});
*/
export default router;