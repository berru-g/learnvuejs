<template>
  <div>
    <div class="pipette" :style="{ left: left + 'px', top: top + 'px' }"></div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      left: 0,
      top: 0,
      color: '',
      visible: false,
    };
  },
  methods: {
    captureColor(event) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = event.target.width;
      canvas.height = event.target.height;
      ctx.drawImage(event.target, 0, 0);
      const pixelData = ctx.getImageData(this.left, this.top, 1, 1).data;
      const color = `#${this.componentToHex(pixelData[0])}${this.componentToHex(
        pixelData[1],
      )}${this.componentToHex(pixelData[2])}`;
      this.color = color;
      this.$emit('color-picked', color);
      this.visible = false;
    },
    componentToHex(c) {
      const hex = c.toString(16);
      return hex.length == 1 ? '0' + hex : hex;
    },
  },
};/*
export default {
  name: "ColorPipetteTool",
  data() {
    return {
      x: 0,
      y: 0,
      color: "#000000",
      visible: true,
    };
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },//destroyed est obsolete 
  unmounted() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    handleClickOutside(event) {
      if (this.$el && !this.$el.contains(event.target)) {
        this.visible = false;
      }
    },
  },
};
*/
</script>

<style scoped>
.pipette {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  transform: translate(-8px, -8px);
  pointer-events: none;
  border: 2px solid white;
}
#pipette-btn {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
}
#logo {
  position: absolute;
  align-items: center;
  margin-top:0%;
  max-width: 50px;
  height: auto;
  align-items: center;
}

</style>
