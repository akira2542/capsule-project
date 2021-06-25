<template lang="html">
  <div class="flex my-2" :class="{ 'justify-end': !isstore }">
    <div v-if="isstore">
      <img class="w-auto h-12 rounded-full mx-2" src="@/assets/bot.png" />
    </div>
    <div class="flex flex-col justify-end mx-1" :class="{ 'order-3': isstore }">
      <div>{{ time }}</div>
    </div>
    <div class="flex flex-col justify-end">
      <div class="bg-gray-300 p-2 rounded-xl">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    time: {
      type: String,
      default() {
        return '10:00';
      },
    },
    msg: {
      type: String,
      default() {
        return 'Hello';
      },
    },
    isstore: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
};
</script>
<style lang=""></style>
