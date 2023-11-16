import FramePlayer from './frame-player.vue'

export default {
  install(Vue, options) {
    Vue.component(FramePlayer.name, FramePlayer)
  }
}