<template>
  <div>
    <img src="../assets/logo.png" @click="createPipette" style="cursor:pointer;">
  </div>
</template>

<script>
export default {
  name: "Pipette",
  methods: {
    createPipette() {
      const pipette = document.createElement("div");
      pipette.className = "pipette";
      document.body.appendChild(pipette);
      this.movePipette(pipette);
    },
    movePipette(pipette) {
      const imageElements = document.querySelectorAll("img");
      imageElements.forEach((img) => {
        img.addEventListener("mousemove", function (event) {
          const x = event.clientX;
          const y = event.clientY;
          pipette.style.left = `${x + 10}px`;
          pipette.style.top = `${y + 10}px`;
        });
      });
    },
  },
};
</script>

<style>
  .pipette {
    position: absolute;
    z-index: 9999;
    width: 20px;
    height: 20px;
    border: 2px solid black;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
</style>
