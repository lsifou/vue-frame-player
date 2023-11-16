import Vue from 'vue'
import App from './App.vue'
import FramePlayer from './frame-player'

Vue.config.productionTip = false

Vue.use(FramePlayer)

new Vue({
  render: h => h(App),
}).$mount('#app')
