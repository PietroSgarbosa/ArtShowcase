import Vue from "vue";
import Router from "vue-router";

//Cadastro
const Register = () => import("@/views/registro/Registro");

//Login
const Login = () => import("@/views/login/Login");

//Home
const Home = () => import("@/views/Home");

//
const Profile = () => import("@/views/profile/Profile");

Vue.use(Router);

let router = new Router({
  mode: "history", // https://router.vuejs.org/api/#mode
  linkActiveClass: "open active",
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Sign Up",
      component: Register,
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
    }
  ],
});
export default router;