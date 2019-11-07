import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
Vue.use(Router);

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/login",
      name: "home",
      component: Home,
      children: [
        {
          path: "/sin",
          name: "sin",
          component: () => import("./views/sin.vue")
        },
        {
          path: "/Melliodas",
          name: "Melliodas",
          meta: {
            requireAuth: true
          },
          component: () => import("./views/Melliodas.vue")
        },
        {
          path: "/Elizabeth",
          name: "Elizabeth",
          component: () => import("./views/Elizabeth.vue")
        },
        {
          path: "/Diana",
          name: "Diana",
          component: () => import("./views/Diana.vue")
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/login.vue")
    }
  ]
});
