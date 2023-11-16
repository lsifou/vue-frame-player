<template>
  <div :ref="elRef" style="position: relative"></div>
</template>

<script>
import vFramePlayer from "./vframeplayer.min.js";

export default {
  name: "FramePlayer",
  props: {
    imgArr: {
      type: Array,
      default: () => [],
      require: true,
    },
    fps: {
      type: Number,
      default: 25,
    },
    useCanvas: {
      type: Boolean,
      default: true,
    },
    loop: {
      type: Number,
      default: 0,
    },
    yoyo: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      elRef: Math.random().toString(36).slice(-6),
    };
  },
  mounted() {
    const { imgArr, fps, useCanvas, loop, yoyo } = this.$props;

    this.player = new vFramePlayer({
      dom: this.$refs[this.elRef],
      imgArr,
      fps,
      useCanvas,
      loop,
      yoyo,
    });
  }
};
</script>
