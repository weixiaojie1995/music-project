import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/fonts/iconfont.css'
import './style/common.css'
import './config/vant.config.js'

import Rem from './tools/Rem.js'

Rem.init()

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
