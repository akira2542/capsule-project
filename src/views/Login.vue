<template lang="">
  <div
    class="
      flex flex-col
      justify-center
      w-screen
      h-screen
      bg-primary
      animate__animated animate__fadeIn
    "
  >
    <div>
      <logo
        class="animate__animated animate__fadeInDown animate__delay-05s"
      ></logo>
      <router-link to="/menu">
        <button
          class="
            btn
            p-2
            m-4
            rounded-xl
            bg-white
            border border-gray-200
            animate__animated animate__fadeInUp animate__delay-1s
          "
        >
          เข้าใช้งาน
        </button>
      </router-link>
    </div>
  </div>
</template>
<script>
import Logo from '@/components/Logo.vue';
export default {
  components: {
    Logo,
  },
};
</script>
<style lang="css" scoped></style>
