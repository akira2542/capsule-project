<template lang="">
  <div class="animate__animated animate__fadeIn">
    <section>
      <div class="bg-primary h-20 flex flex-col justify-end pb-2">
        <div class="w-full grid grid-cols-3 text-2xl">
          <div>
            <i class="arrow left w-5 h-5" @click="$router.push('/menu')"></i>
          </div>
          <div>บ้านนี้ขายยา</div>
        </div>
      </div>
    </section>
    <section>
      <div
        class="
          grid grid-cols-3
          border border-b-1 border-t-0 border-l-0 border-r-0 border-primary
          py-3
        "
      >
        <div class="w-full flex justify-center">
          <img
            class="w-20 h-20"
            src="data:image/png;base64,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"
          />
        </div>
        <div class="col-span-2">
          <div class="flex flex-col text-left">
            <div>คุณหมอ นานา ยานบิน</div>
            <div>ออนไลน์ เมื่อ 43 นาที ที่ผ่านมา</div>
            <button
              class="p-1 rounded-md bg-primary btn w-10/12"
              @click="$router.push('/store/contact')"
            >
              ปรึกษาคุณหมอ
            </button>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div
        class="
          grid grid-cols-4
          py-3
          border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-200
        "
      >
        <div>ร้านค้า</div>
        <div>รายการ</div>
        <div>หมวดหมู่</div>
        <div>เพิ่มเติม</div>
      </div>
      <div class="grid grid-cols-4 py-3 shadow-md">
        <div>ยอดนิยม</div>
        <div>ล่าสุด</div>
        <div>สินค้าขายดี</div>
        <div>ราคา</div>
      </div>
    </section>
    <section>
      <div class="grid grid-cols-2">
        <div
          v-for="product in products"
          :key="product"
          class="my-3 flex justify-center"
        >
          <div class="shadow-md w-10/12 text-left">
            <div class="flex justify-center">
              <img
                class="w-28 h-28 mx-3"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"
              />
            </div>
            <div class="mx-3 my-2">
              <div>{{ product.name }}</div>
              <div>{{ product.priceRange }}</div>
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
      products: [
        {
          name: 'ยาแก้ปวดท้อง',
          priceRange: '฿ 20 - ฿ 100',
        },
        {
          name: 'ยาแก้ปเมารถ',
          priceRange: '฿ 66',
        },
        {
          name: 'ยาแก้ไข้',
          priceRange: '฿ 20 - ฿ 100',
        },
        {
          name: 'ผ้าผันแผล',
          priceRange: '฿ 20 - ฿ 100',
        },
      ],
    };
  },
};
</script>
<style lang="css">
.arrow {
  border: solid black;
  border-width: 0 5px 5px 0;
  display: inline-block;
  padding: 3px;
}
.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}
.right {
  transform: rotate(315deg);
  -webkit-transform: rotate(315deg);
}
</style>
