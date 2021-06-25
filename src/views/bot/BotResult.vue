<template lang="html">
  <div class="animate__animated animate__fadeIn">
    <section>
      <div class="flex m-8">
        <img class="w-auto h-16" src="@/assets/bot.png" />
        <div class="font-black text-3xl mt-6 ml-2">capsule</div>
      </div>
    </section>
    <section class="flex justify-center">
      <div class="border border-black text-sm text-left rounded-md w-9/12 p-3">
        ผู้ป่วย เพศ หญิง , อายุ 19 ปี , โรคประจำตัว ไม่มี ,
        เครือญาติที่มีประวัติ ไม่ทราบ อาการป่วย : บริเวณช่วงรอบดวงตา ตาแดง บวม
        เวลาแตะจะรู้สึกเจ็บ มีอาการระคายเคืองร่วมด้วย ระยะเวลา : 3 วัน
      </div>
    </section>
    <section>
      <div class="flex flex-col items-center">
        <div class="w-9/12 mt-5">
          <div class="text-left">วินิฉัยอาการเบื้องต้น</div>
          <div class="text-left">จากการวิเคราห์แบบสอบถาม</div>
        </div>
        <div
          class="border border-black shadow-md rounded-md w-9/12 p-3 mt-5"
          @click="$router.push('/bot/result/detail')"
        >
          <div class="text-left text-3xl font-black">ตากุ้งยิง</div>
          <div class="flex justify-between">
            65%
            <i
              class="arrow right w-1 h-1 border-gray-500 relative -bottom-2"
            ></i
            ><span class="">รายละเอียด</span>
          </div>
        </div>
        <div class="border border-black shadow-md rounded-md w-9/12 p-3 mt-5">
          <div class="text-left text-3xl font-black">ตาแห้ง</div>
          <div class="flex justify-between">
            รายละเอียด
            <i
              class="arrow right w-1 h-1 border-gray-500 relative -bottom-2"
            ></i
            ><span class="">65%</span>
          </div>
        </div>
        <div class="border border-black shadow-md rounded-md w-9/12 p-3 mt-5">
          <div class="text-left text-3xl font-black">อาการแพ้</div>
          <div class="flex justify-between">
            รายละเอียด
            <i
              class="arrow right w-1 h-1 border-gray-500 relative -bottom-2"
            ></i
            ><span class="">65%</span>
          </div>
        </div>
        <div class="text-left w-9/12 p-5">
          * ข้อมูลดังกล่าวเป็นเพียงการวินิฉัยเบื้องต้นเท่านั้น
          ผู้ใช้ควรปรึกษาแพทย์ หรือ เภสัชกร เพื่อรับการรักษา
        </div>
        <div>
          <button class="bg-primary py-2 px-6 rounded-lg mx-3">บันทึก</button>
          <button class="bg-primary py-2 px-6 rounded-lg mx-3">
            กลับหน้าหลัก
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
