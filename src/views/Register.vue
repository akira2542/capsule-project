<template lang="html">
  <section>
    <div class="bg-primary h-20 flex flex-col justify-end pb-2">
      <div class="w-full grid grid-cols-3 text-2xl">
        <div class="col-span-3 text-left font-bold pl-10">ข้อมูลผู้ใช้</div>
      </div>
    </div>
  </section>
  <section>
    <div class="flex justify-center">
      <div class="w-11/12">
        <div class="text-left m-5 text-gray-500">
          บอกข้อมูลเกี่ยวกับตัวคุณกับเภสัช
        </div>
        <div class="text-left ml-5">ชื่อ-นามสกุล</div>
        <div class="flex justify-start">
          <input
            class="
              border border-black border-t-0 border-l-0 border-r-0
              m-3
              ml-5
            "
            type="text"
          />
        </div>
        <div class="text-left ml-5">โรคประจำตัว</div>
        <div class="flex justify-start">
          <input
            class="
              border border-black border-t-0 border-l-0 border-r-0
              m-3
              ml-5
            "
            type="text"
          />
        </div>
        <div class="flex justify-start">
          <input
            class="
              border border-black border-t-0 border-l-0 border-r-0
              m-3
              ml-5
              w-24
            "
            type="text"
            placeholder="อายุ"
          />
        </div>
        <div class="text-left m-5">เพศ</div>
        <div class="m-5 flex">
          <div class="flex items-center mr-4 mb-4">
            <input
              id="radio1"
              type="radio"
              name="radio"
              class="hidden"
              checked
            />
            <label
              for="radio1"
              class="flex items-center cursor-pointer text-md"
            >
              <span
                class="
                  w-6
                  h-6
                  inline-block
                  mr-2
                  rounded-full
                  border border-grey
                  flex-no-shrink
                "
              ></span>
              ชาย</label
            >
          </div>
          <div class="flex items-center mr-4 mb-4">
            <input
              id="radio1"
              type="radio"
              name="radio"
              class="hidden"
              checked
            />
            <label
              for="radio1"
              class="flex items-center cursor-pointer text-md"
            >
              <span
                class="
                  w-6
                  h-6
                  inline-block
                  mr-2
                  rounded-full
                  border border-grey
                  flex-no-shrink
                "
              ></span>
              หญิง</label
            >
          </div>
        </div>
        <div>
          <button
            class="mt-10 bg-primary p-2 text-2xl font-bold w-10/12 rounded-xl"
          >
            ยืนยัน
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style lang=""></style>
