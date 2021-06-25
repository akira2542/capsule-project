<template lang="html">
  <div class="flex flex-col items-center justify-center h-screen">
    <section class="animate__animated animate__fadeInLeft">
      <div class="flex justify-center p-5">
        <img class="w-24 h-24" src="@/assets/bot.png" />
        <div class="pl-5">
          <div class="bg-gray-200 rounded-lg p-2 my-2">
            ขอบคุณสำหรับข้อมูลนะครับ!
          </div>
          <div class="bg-gray-200 rounded-lg p-2 my-2">
            ตอนนี้ผม กำลังประมวลผลอยู่
          </div>
        </div>
      </div>
    </section>
    <section class="animate__animated animate__fadeInRight animate__delay-1s">
      <div class="flex justify-center p-5">
        <img class="w-24 h-24 order-2" src="@/assets/bot.png" />
        <div class="px-5 pt-5">
          <div class="bg-gray-200 rounded-lg p-2 my-2">
            ขอเวลาสัก 3 วินะครับ..
          </div>
          <div class="bg-gray-200 rounded-lg p-2 my-2">พร้อมแล้ว!!...</div>
        </div>
      </div>
    </section>
    <section class="mt-2">
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
    </section>
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
        this.$router.push('/bot/contact');
      }, 3500);
    },
  },
};
</script>
<style lang=""></style>
