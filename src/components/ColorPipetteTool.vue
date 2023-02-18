<template>
  <div>
    <div class="pipette" :style="{ left: left + 'px', top: top + 'px' }"></div>
  </div>
</template>

<script>
/*
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
};
mise a jour de la position pipette*/


export default {
  name: "ColorPipetteTool",
  data() {
    return {
      x: 0,
      y: 0,
      color: "#fea000",
      visible: true,
    };
  },
  mounted() {
    window.addEventListener('mousemove', this.onMouseMove);
  },
  unmounted() {
    window.removeEventListener('mousemove', this.onMouseMove);
  },
  methods: {
    onMouseMove(event) {
      const pipette = this.$refs.pipette;
      if (!pipette) {
        return;
      }
      pipette.style.display = 'block';
      pipette.style.left = event.pageX + 'px';
      pipette.style.top = event.pageY + 'px';
    },
      captureColor(event) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = event.target.width;
        canvas.height = event.target.height;
        ctx.drawImage(event.target, 0, 0);
        const pixelData = ctx.getImageData(this.x, this.y, 1, 1).data;
        const color = `#${this.componentToHex(pixelData[0])}${this.componentToHex(
          pixelData[1],
        )}${this.componentToHex(pixelData[2])}`;
        this.color = color;
        this.$emit('color-picked', color);
        this.visible = false;
      } 
      
  
}}

</script>

<style scoped>
.pipette {
  position: absolute;
  z-index: 9999;
  display: none;
  width: 30px;
  height: 30px;
  border: 2px solid black;
  border-radius: 50%;
  pointer-events: none;
  top: 0;
  left: 0;
}

#pipette-btn {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
}

#logo {
  position: fixed;
  align-items: center;
  top: 0px;
  max-width: 50px;
  height: auto;
  align-items: center;
}
</style>
