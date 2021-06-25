<template lang="">
  <div>
    <section
      id="home-header"
      class="w-screen h-44 bg-primary flex flex-col justify-end"
    >
      <div class="flex justify-center">
        <div class="">
          <div class="text-left font-bold">จัดส่งที่</div>
          <div class="text-left">บ้านเลขที่ 00/00, ถนน สามย่าน..</div>
        </div>
        <div class="m-2">
          <span class="material-icons bg-gray-400 p-1 m-1 rounded-full">
            edit
          </span>
          <span class="material-icons bg-gray-400 p-1 m-1 rounded-full">
            perm_identity
          </span>
        </div>
      </div>
      <div>
        <search-box></search-box>
      </div>
    </section>
    <section class="flex justify-center">
      <div class="w-11/12">
        <store-card
          v-for="store in stores"
          :key="store"
          :store="store"
          @click="$router.push('/store')"
        ></store-card>
      </div>
    </section>
  </div>
</template>
<script>
import SearchBox from '@/components/SearchBox.vue';
import StoreCard from '@/components/home/StoreCard.vue';
export default {
  components: {
    SearchBox,
    StoreCard,
  },
  data() {
    return {
      stores: [
        {
          name: 'บ้านนี้ขายยา',
          deliveryTime: '27',
          distance: '5.0',
          ratings: '4.7',
          price: 24,
          openAt: '6:00 - 21:00',
        },
        {
          name: 'ยาดีขายส่ง',
          deliveryTime: '27',
          distance: '5.0',
          ratings: '4.7',
          price: 24,
          openAt: '6:00 - 21:00',
        },
        {
          name: 'บ้านนี้ขายยา',
          deliveryTime: '27',
          distance: '5.0',
          ratings: '4.7',
          price: 24,
          openAt: '6:00 - 21:00',
        },
        {
          name: 'บ้านนี้ขายยา',
          deliveryTime: '27',
          distance: '5.0',
          ratings: '4.7',
          price: 24,
          openAt: '6:00 - 21:00',
        },
        {
          name: '',
          deliveryTime: '',
          distance: '',
          ratings: '',
          price: 24,
          openAt: '',
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
