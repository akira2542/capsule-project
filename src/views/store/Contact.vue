<template lang="html">
  <div class="animate__animated animate__fadeIn">
    <div class="h-36"></div>
    <div class="fixed top-0 w-screen z-10">
      <section>
        <div class="bg-primary h-20 flex flex-col justify-end pb-2">
          <div class="w-full grid grid-cols-3 text-2xl">
            <div>
              <i class="arrow left w-5 h-5" @click="$router.push('/store')"></i>
            </div>
            <div class="col-span-2 text-left">ปรึกษาคุณหมอ</div>
          </div>
        </div>
      </section>
      <section>
        <div class="p-2 w-full shadow-md flex justify-around bg-white">
          <div class="text-left">
            <div class="font-bold text-lg">
              คุณหมอนานา ยานบิน<span class="dot bg-green-400 ml-2"></span>
            </div>
            <div class="font-bold text-gray-400">บ้านนี้ขายยา</div>
          </div>
          <div>
            <span class="material-icons text-4xl mx-2"> videocam </span>
            <span class="material-icons text-4xl"> call </span>
          </div>
        </div>
      </section>
    </div>
    <section class="pb-20">
      <div class="p-5">
        <message class="animate__animated animate__fadeInUp">
          <div class="text-left">
            ข้อมูลผู้ป่วย<br />
            เพศ : หญิง<br />
            อายุ : 21 ปี<br />
            อาการป่วย : อาการป่วยช่วงท้อง<br />
            รายละเอียด : กินอาหารได้น้อย อึดอัดรู้สึกอยากอ๊วกเป็นมา 3 วัน<br />
          </div>
        </message>
        <message
          :isstore="true"
          time="10:01"
          class="animate__animated animate__fadeInUp animate__delay-1s"
        >
          สวัสดีครับ
        </message>
        <message
          :isstore="true"
          time="10:01"
          class="animate__animated animate__fadeInUp animate__delay-1s"
        >
          ตอนนี้ตั้งครรภ์อยู่ ไหมครับ?
        </message>
        <message
          class="animate__animated animate__fadeInUp animate__delay-2s"
          time="10:02"
        >
          ไม่ค่ะ
        </message>
        <message
          class="animate__animated animate__fadeInUp animate__delay-3s"
          :isstore="true"
          time="10:03"
        >
          น่าจะเป็นโรคกระเพราะครับ
        </message>
        <message
          class="animate__animated animate__fadeInUp animate__delay-4s"
          :isstore="true"
          time="10:05"
        >
          <div>
            <div class="text-left">
              รายการใบสั่งยา<br />
              - ดีออกไซน์ 1 แฝง<br />
              - ยาดูดซึมผิด 5 เม็ด<br />
              - ยาลดกรดลูมินา 1 ขวด<br />
            </div>
            <div class="flex justify-center py-2">
              <button class="bg-white px-3 rounded-lg mx-2">ดูเพิ่มเติม</button>
              <button class="bg-white px-3 rounded-lg mx-2">ชำระเงิน</button>
            </div>
          </div>
        </message>
        <message
          class="animate__animated animate__fadeInUp animate__delay-5s"
          :isstore="true"
          time="10:05"
        >
          <div class="text-left">
            รายละเอียดการทาน<br />
            จะระบุไว้หน้าซองนะครับ
          </div>
        </message>
      </div>
    </section>
    <section class="fixed bottom-0 w-screen z-10">
      <div class="bg-primary h-18 flex p-2">
        <div class="mx-2">
          <span class="material-icons text-3xl mx-1"> add </span>
          <span class="material-icons text-3xl mx-1"> photo_camera </span>
          <span class="material-icons text-3xl mx-1">
            add_photo_alternate
          </span>
        </div>
        <div>
          <input type="text" class="rounded-xl p-1" />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Message from '@/components/contact/Message.vue';
export default {
  components: {
    Message,
  },
};
</script>
<style lang="css">
.dot {
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 50%;
  display: inline-block;
}
</style>
