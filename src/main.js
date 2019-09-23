import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false
import "./style/main.scss"
import 'element-ui/lib/theme-chalk/display.css';


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
