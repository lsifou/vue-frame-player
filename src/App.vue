<template>
  <div id="app">
    <frame-player class="player" ref="starts" :img-arr="imgArr" :fps="8" :loop="-1" yoyo />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      imgArr: Array.from({ length: 21 }).map((item, index) => {
        return require(`@/assets/${index + 1}.png`);
      }),
    };
  },
  mounted() {
    const player = this.$refs.starts.player;

    player.play();
  },
};
</script>

<style lang="stylus">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.player {
  width: 300px;
  height: 300px;
  background #000;
}
</style>
