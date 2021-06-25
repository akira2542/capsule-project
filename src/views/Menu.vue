<template lang="html">
  <div class="h-screen animate__animated animate__fadeIn">
    <section>
      <div class="bg-primary h-20 flex flex-col justify-end pb-2">
        <div class="w-full grid grid-cols-3">
          <div class="col-span-2 text-left font-bold pl-10 text-2xl">
            Capsule
          </div>
          <div class="text-md font-bold">location</div>
        </div>
      </div>
    </section>
    <section class="pt-2">
      <div
        class="w-full flex justify-start pt-2"
        v-for="item in items"
        :key="item"
        @click="$router.push(item.route)"
      >
        <div>
          <img class="w-14 h-14 m-1 mx-3 p-2" :src="getImgUrl(item.img)" />
        </div>
        <div
          class="flex border border-gray-400 border-t-0 border-l-0 border-r-0"
        >
          <div class="w-64">
            <div class="font-black text-lg text-left">{{ item.title }}</div>
            <div class="text-left text-sm font-black text-gray-400">
              {{ item.subtitle }}
            </div>
          </div>
          <div>
            <i class="arrow right w-5 h-5 mt-6 border-gray-500"></i>
          </div>
        </div>
      </div>
    </section>
    <section class="absolute bottom-0 w-screen">
      <div class="w-full bg-primary flex justify-around pb-2">
        <div @click="this.$router.push('/')">
          <span class="material-icons text-3xl mx-1 relative top-2">
            home
          </span>
          <div>Home</div>
        </div>
        <div>
          <span class="material-icons text-3xl mx-1 relative top-2">
            notifications
          </span>
          <div>Notifications</div>
        </div>
        <div>
          <span class="material-icons text-3xl mx-1 relative top-2">
            account_circle
          </span>
          <div>Profile</div>
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
          title: 'ปรึกษาเภสัชกร ใกล้บ้านคุณ',
          subtitle: 'ค้นหาเภสัช , ร้านขายยา',
          route: '/symtom/menu',
        },
        {
          img: '2.png',
          title: 'สั่งซื้อยาออนไลน์',
          subtitle: 'สามารถสั่งซื้อยา โดยใช้บริการขนส่ง',
          route: '/menu',
        },
        {
          img: '3.png',
          title: 'รายการแพทย์ นัดพบ!',
          subtitle: 'เภสัชขอนัดพยผู้ป่วย เพื่ออัพเดทอาการ',
          route: '/menu',
        },
        {
          img: '4.png',
          title: 'หุ่นยนต์ วินิฉัยโรค',
          subtitle: 'วิเคราะห์อาการของผู้ป่วยในเบื้องต้น',
          route: '/bot/register',
        },
        {
          img: '5.png',
          title: 'บทความให้ความรู้',
          subtitle: 'ข้อมูลข่าวสารต่างๆ ความงาม หรือสุขภาพ',
          route: '/menu',
        },
        {
          img: '6.png',
          title: 'ถามได้ แพทย์ตอบ',
          subtitle: 'โพสคำถามเกี่ยวกับ อาการหรือโรค ของผู้ใช้อื่นๆ',
          route: '/menu',
        },
        {
          img: '7.png',
          title: 'ประวัติการใช้งาน',
          subtitle: 'ข้อมูลการสั่งซื้อยา และ ใบสั่งยาของเภสัช',
          route: '/menu',
        },
      ],
    };
  },
  methods: {
    getImgUrl(pic) {
      return require('../assets/menu/' + pic);
    },
  },
};
</script>
<style lang=""></style>
