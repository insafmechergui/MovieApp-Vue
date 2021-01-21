import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Home from "../views/Home.vue";
import AllMovies from "../components/movies/AllMovies.vue";
import AddMovie from "../components/movies/AddMovie.vue";
import SignUp from "../components/authentication/SignUp.vue";
import SignIn from "../components/authentication/SignIn.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/allMovies",
    name: "allMovies",
    component: AllMovies,
  },
  {
    path: "/addMovie",
    name: "addMovie",
    component: AddMovie,
  },
  {
    path: "/signUp",
    name: "signUp",
    component: SignUp,
  },
  {
    path: "/signIn",
    name: "signIn",
    component: SignIn,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
