<template lang="html">
  <div>
    <section class="flex justify-center">
      <div class="grid grid-cols-2">
        <div
          class="w-32 h-32 bg-gray-100 shadow m-2"
          v-for="item in currentFilter"
          :key="item"
          @click="nextFilter"
        >
          {{ item }}
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      filter: [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
      ],
      index: 0,
    };
  },
  computed: {
    currentFilter() {
      return this.filter[this.index];
    },
  },
  methods: {
    nextFilter() {
      if (this.index + 1 < this.filter.length) {
        this.index += 1;
      }
    },
  },
};
</script>
<style lang=""></style>
