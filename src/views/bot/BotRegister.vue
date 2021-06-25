<template lang="html">
  <div class="animate__animated animate__fadeIn">
    <section>
      <div class="bg-primary h-20 flex flex-col justify-end pb-2">
        <div class="w-full grid grid-cols-3 text-2xl">
          <div>
            <i
              class="arrow left w-5 h-5 border-gray-500"
              @click="$router.push('/menu')"
            ></i>
          </div>
          <div class="col-span-2 text-left font-bold">หุ่นยนต์วินิจฉัยโรค</div>
        </div>
      </div>
    </section>
    <section>
      <div class="flex justify-start p-5">
        <img class="h-24" src="@/assets/bot.png" />
        <div class="pl-5">
          <div class="text-left">
            สวัสดี ผมแจ็คนีส หุ่นยนต์เภสัชของคุณ
            ผมสามารถวินิฉัยเบื้องต้นได้เท่านั้น
            ผู้ใช้ควรปรึกษากับเภสัชใกล้บ้านคุณ
            เพื่อได้รับการรักษาที่ถูกต้องด้วยนะครับ
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="text-left ml-5">บอกข้อมูลของคุณให้ แจ๊คนีสทราบสิ!!</div>
      <section>
        <div class="flex justify-center">
          <div class="w-11/12">
            <div class="text-left m-5 text-gray-500">
              บอกข้อมูลเกี่ยวกับตัวคุณกับเภสัช
            </div>
            <div class="text-left ml-5">เพศ</div>
            <div class="m-5 mt-2 mb-0 flex">
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
            <div class="text-left ml-5">โรคประจำตัว</div>
            <div class="flex justify-start">
              <input
                class="
                  border border-black border-t-0 border-l-0 border-r-0
                  m-2
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
            <div class="text-left ml-5">เครือญาติที่เป็นโรคประจำตัว</div>
            <div class="flex justify-start">
              <input
                class="
                  border border-black border-t-0 border-l-0 border-r-0
                  m-2
                  ml-5
                "
                type="text"
              />
            </div>
            <div>
              <button
                class="
                  mt-5
                  bg-primary
                  p-2
                  text-2xl
                  font-bold
                  w-10/12
                  rounded-xl
                "
                @click="$router.push('/bot/loading')"
              >
                ยืนยัน
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
