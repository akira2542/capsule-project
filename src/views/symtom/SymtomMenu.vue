<template lang="html">
  <div class="h-screen animate__animated animate__fadeIn">
    <section>
      <div class="bg-primary h-20 flex flex-col justify-end pb-2">
        <div class="w-full grid grid-cols-3 text-2xl">
          <div>
            <i
              class="arrow left w-5 h-5 border-gray-500"
              @click="this.$router.push('/menu')"
            ></i>
          </div>
          <div class="col-span-2 text-left font-bold">บริเวณที่เกิดอาการ</div>
        </div>
      </div>
    </section>
    <section class="pt-2">
      <div
        class="w-full flex justify-start hover:bg-gray-100"
        v-for="item in items"
        :key="item"
        @click="$router.push(item.route)"
      >
        <div>
          <img class="w-12 h-12 m-1 mx-3" :src="this.getImgUrl(item.img)" />
        </div>
        <div
          class="flex border border-gray-400 border-t-0 border-l-0 border-r-0"
        >
          <div class="w-72">
            <div class="text-left font-black text-gray-400 mt-6">
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          img: '1.png',
          title: 'ผิว , ผม และ เล็บ',
          route: '/symtom/explain',
        },
        {
          img: '2.png',
          title: 'ฮอร์โมนเพศ หญิง',
          route: '/symtom/explain',
        },
        {
          img: '3.png',
          title: 'ฮอร์โมนเพศ ชาย',
          route: '/symtom/explain',
        },
        {
          img: '4.png',
          title: 'กระดูก และ ข้อต่อ',
          route: '/symtom/explain',
        },
        {
          img: '5.png',
          title: 'ปวดเมื่อยกล้ามเนื้อ',
          route: '/symtom/explain',
        },
        {
          img: '6.png',
          title: 'สภาพจิตใจ',
          route: '/symtom/explain',
        },
        {
          img: '7.png',
          title: 'อาการป่วยช่วงท้อง',
          route: '/symtom/explain',
        },
        {
          img: '8.png',
          title: 'กระเพาะปัสวะ และ ไต',
          route: '/symtom/explain',
        },
        {
          img: '9.png',
          title: 'ฟัน และ ปาก',
          route: '/symtom/explain',
        },
        {
          img: '10.png',
          title: 'หู ตา และ จมูก',
          route: '/symtom/explain',
        },
      ],
    };
  },
  methods: {
    getImgUrl(pic) {
      return require('@/assets/symtoms/' + pic);
    },
  },
};
</script>
<style lang=""></style>
