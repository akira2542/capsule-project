<template lang="html">
  <div class="h-screen animate__animated animate__fadeIn">
    <section>
      <div class="bg-primary h-20 flex flex-col justify-end pb-2">
        <div class="w-full grid grid-cols-3 text-2xl">
          <div>
            <i
              class="arrow left w-5 h-5 border-gray-500"
              @click="$router.push('/symtom/menu')"
            ></i>
          </div>
          <div class="col-span-2 text-left font-bold">อธิบายอาการป่วย</div>
        </div>
      </div>
    </section>
    <section>
      <div>
        <div class="text-left font-bold text-gray-400 text-sm m-5">
          อธิบายอาการป่วยของคุณ รวมถึงรายละเอียดต่างๆ เช่น ป่วยมากี่วันแล้ว
          เหตุการณ์ล่วงหน้า เพื่อที่เภสัช สามารถนำ
          ข้อมูลนี้ไปวิเคราะห์เบื้องต้นให้คุณได้
        </div>
        <div class="text-left ml-8 font-bold text-xl">อธิบายอาการของคุณ</div>
        <input
          class="border border-black border-t-0 border-l-0 border-r-0 mt-3 w-80"
          v-model="symtom"
          type="text"
        />
        <select
          name="cars"
          id="cars"
          class="
            border border-black border-t-0 border-l-0 border-r-0
            mt-3
            w-80
            mt-5
          "
          :value="select"
        >
          <option value="อาการป่วยช่วงท้อง">อาการป่วยช่วงท้อง</option>
          <option value="อาการป่วยช่วงแขน">อาการป่วยช่วงแขน</option>
          <option value="อาการป่วยช่วงขา">อาการป่วยช่วงขา</option>
        </select>
      </div>
      <div class="absolute bottom-10 w-screen">
        <button
          class="bg-primary p-2 text-2xl font-bold w-10/12 rounded-xl"
          @click="$router.push('/map')"
        >
          บันทึกข้อมูล
        </button>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      symtom: '',
      select: '',
    };
  },
  mounted() {
    this.delayInput();
  },
  methods: {
    delayInput() {
      setTimeout(() => {
        this.symtom = 'กินอาหารได้น้อย อึดอัดรู้สึกอยากอ๊วกเป็นมา 3 วัน';
        setTimeout(() => {
          this.select = 'อาการป่วยช่วงท้อง';
        }, 500);
      }, 1000);
    },
  },
};
</script>
<style lang=""></style>
