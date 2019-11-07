import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";

Vue.config.productionTip = false;
import axios from "axios";
import "./style/main.scss";
import "element-ui/lib/theme-chalk/display.css";

Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
//重复点击出现的蓝色区域
document.onselectstart = new Function("return false");
//登录状态跳转
router.beforeEach((to, from, next) => {
  let user = sessionStorage.getItem("user");
  if (to.meta.requireAuth) {
    // 判断该路由是否需要登录权限
    if (user) {
      next();
    } else {
    }
  } else {
    next(); //如果跳转的路由无需登录验证，直接放行
  }
});
