<template>
  <div id="app">
    <img ref="image" src="./assets/image.jpg" @mousemove="movePipette" @click="clickPipette">
    <Pipette v-if="pipetteActive" :x="pipetteX" :y="pipetteY" />
    <button @click="togglePipette">Toggle Pipette</button>
  </div>
</template>

<script>
import Pipette from "./components/ColorPipetteTool.vue";

export default {
  name: "App",
  components: {
    ColorPipetteTool
  },
  data() {
    return {
      pipetteActive: false,
      pipetteX: 0,
      pipetteY: 0
    };
  },
  methods: {
    togglePipette() {
      this.pipetteActive = !this.pipetteActive;
    },
    movePipette(event) {
      if (this.pipetteActive) {
        this.pipetteX = event.clientX;
        this.pipetteY = event.clientY;
      }
    },
    clickPipette(event) {
      if (this.pipetteActive) {
        const image = this.$refs.image;
        const canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, image.width, image.height);
        const pixelData = context.getImageData(event.offsetX, event.offsetY, 1, 1).data;
        const hexColor = "#" + ((1 << 24) + (pixelData[0] << 16) + (pixelData[1] << 8) + pixelData[2]).toString(16).slice(1);
        console.log(hexColor);
      }
    }
  }
};
</script>
