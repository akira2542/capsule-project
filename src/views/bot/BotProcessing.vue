<template lang="html">
  <div
    class="
      flex flex-col
      justify-center
      h-screen
      animate__animated animate__zoomIn
    "
  >
    <div class="flex justify-center">
      <span
        class="dot bg-gray-400 ml-2 animate__animated animate__zoomIn"
      ></span>
      <span
        class="
          dot
          bg-gray-400
          ml-2
          animate__animated animate__zoomIn animate__delay-1s
        "
      ></span>
      <span
        class="
          dot
          bg-gray-400
          ml-2
          animate__animated animate__zoomIn animate__delay-2s
        "
      ></span>
    </div>
    <div>
      <div class="flex justify-center my-5">
        <img class="w-auto h-24" src="@/assets/bot.png" />
      </div>
      <div class="font-black text-3xl">capsule</div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.loader();
  },
  methods: {
    loader() {
      setTimeout(() => {
        this.$router.push('/bot/result');
      }, 3500);
    },
  },
};
</script>
<style lang=""></style>
