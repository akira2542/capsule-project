<template lang="html">
  <div class="h-screen animate__animated animate__fadeIn">
    <section class="max-h-screen overflow-hidden">
      <section>
        <div
          class="w-20 h-20 absolute"
          @click="$router.push('/symtom/explain')"
        ></div>
      </section>
      <img
        v-if="clicked"
        class="w-screen animate__animated animate__fadeIn"
        src="@/assets/map2.png"
        @click="$router.push('/store')"
      />
      <img
        v-else
        class="w-screen"
        src="@/assets/map.png"
        @click="clicked = true"
      />
      <section class="absolute bottom-0 w-screen">
        <div
          class="
            bg-gray-500
            pt-5
            pb-5
            rounded-xl
            relative
            -bottom-3
            h-18
            flex
            justify-center
            p-2
          "
        >
          <SearchBox></SearchBox>
        </div>
      </section>
    </section>
  </div>
</template>
<script>
import SearchBox from '@/components/SearchBox.vue';
export default {
  components: {
    SearchBox,
  },
  data() {
    return {
      clicked: false,
    };
  },
};
</script>
<style lang=""></style>
