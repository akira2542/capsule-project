<template lang="html">
  <div class="animate__animated animate__fadeIn">
    <section>
      <div class="h-20"></div>
      <div class="flex justify-between w-screen shadow-md fixed top-0 bg-white">
        <div>
          <i class="arrow left w-5 h-5 m-10" @click="$router.push('/menu')"></i>
        </div>
        <div class="flex m-5">
          <div class="font-black text-3xl mt-6 ml-2">capsule</div>
          <img class="w-auto h-16" src="@/assets/bot.png" />
        </div>
      </div>
    </section>
    <section>
      <div class="w-screen flex justify-center">
        <div class="w-10/12 pt-10">
          <div class="text-left font-black text-xl">วินิฉัยอาการเบื้องต้น</div>
          <div class="text-left">จากการวิเคราห์แบบสอบถาม</div>
          <div class="w-full flex justify-center">
            <div
              class="
                rounded-lg
                shadow-md
                border border-black
                w-11/12
                flex
                justify-between
                p-3
                py-5
                font-black
                text-xl
                mt-5
              "
            >
              <div>ตากุ้งยิง</div>
              <div>65%</div>
            </div>
          </div>
          <div class="flex justify-center mt-5">
            <img src="@/assets/symtom.jpg" />
          </div>
          <div>
            <div class="text-left font-black text-xl">อาการ</div>
            <div class="text-left">
              อาการของตากุ้งยิงส่วนใหญ่จะเริ่มจากมีอาการเคืองตาหรือ
              คันตาคล้ายมีผงอยู่ในตาในบริเวณใกล้เคียงจะเกิดตุ่มฝี อาจมีน้ำตาไหล
              ทำให้ผู้ป่วยต้องขยี้ตาเสมอ ต่อมาอีก 1-2 วันจะเริ่มบวมแดง
              เจ็บเล็กน้อย ถ้าไม่ได้รับการรักษา
              บริเวณที่ปวดนั้นจะขึ้นเป็นตุ่มแข็ง เ
            </div>
          </div>
          <div>
            <div class="text-left font-black text-xl">สาเหตุของตากุ้งยิง</div>
            <div class="text-left">
              1. ไม่รักษาความสะอาด เช่น ปล่อยให้มือ ใบหน้า ผิวหนัง
              หรือเสื้อผ้าสกปรก (มักพบโรคนี้ในคนที่ชอบขยี้ตา ผู้ที่ไม่ค่อย
              รักษาความสะอาดของใบหน้า ใช้เครื่องสำอางที่ใบหน้าและ ดวงตา
              สวมใส่คอนแทคเลนส์ร่วมกับผู้อื่น ใส่หรือถอด
              คอนแทคเลนส์ด้วยมือที่ไม่สะอาด หรือ
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
