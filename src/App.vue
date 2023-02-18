<template>
  <div id="app">
    <img id="logo" :style="{ left: left + 'px', top: top + 'px' }" src="./assets/pipette.gif">
    <!--<button id="pipette-btn" @click="showPipette = !showPipette">Pipette</button>-->
    <pipette v-if="showPipette"></pipette>
    <button v-on:click="showPipette">Activer la pipette</button>
    <ColorPipetteTool v-if="pipetteActive"/>
  </div>
</template>


<script>

import ColorPipetteTool from "./components/ColorPipetteTool.vue";

export default {
  name: "ColorPipetteTool",
  components: {
    ColorPipetteTool
  },
  data() {
    return {
      pipetteActive: false,
      showPipette: false,
      pipetteX: 0,
      pipetteY: 0
    };
  },
  methods: {
    togglePipette() {
      this.pipetteActive = !this.pipetteActive;
    },
  /*  showPipette() {
      const PipetteComponent = Vue.extend(Pipette);
      const pipette = new PipetteComponent();
      pipette.$mount();
      document.body.appendChild(pipette.$el);
    },*/

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
