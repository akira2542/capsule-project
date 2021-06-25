<template lang="html">
  <div class="w-full bg-primary flex justify-start p-3 my-3 rounded-xl">
    <img
      class="w-28 h-28 mx-3"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"
    />
    <div class="flex flex-col content-start text-left text-sm">
      <div>ชื่อร้าน {{ store.name }}</div>
      <div>
        {{ store.deliveryTime }} นาที | {{ store.distance }} ก.ม.
        <span class="material-icons text-sm"> stars </span>
        {{ store.ratings }}
      </div>
      <div>
        <span class="material-icons text-sm"> moped </span>฿ {{ store.price }}
      </div>
      <div>เวลาทำการ {{ store.openAt }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    store: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang=""></style>
