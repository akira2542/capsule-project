<template lang="html">
  <div class="animate__animated animate__fadeIn">
    <div class="h-20"></div>
    <div class="fixed top-0 w-screen">
      <section>
        <div class="bg-primary h-20 flex flex-col justify-end pb-2">
          <div class="w-full grid grid-cols-3 text-2xl">
            <div>
              <i class="arrow left w-5 h-5" @click="$router.push('/store')"></i>
            </div>
            <div class="col-span-2 text-left relative -left-6">
              เล่าอาการของคุณ
              <span class="material-icons text-3xl mx-2 relative -bottom-2">
                home
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section class="pb-20">
      <div class="p-5">
        <MessageBot :isstore="true" class="animate__animated animate__fadeInUp">
          <div class="text-left">
            ช่วยเล่าอาการ และ ลักษณะ<br />
            บริเวณรอบดวงตาหน่อยครับ
          </div>
        </MessageBot>
        <MessageBot
          class="animate__animated animate__fadeInUp animate__delay-1s"
        >
          <div class="text-left">ตาแดง บวม เวลาแตะจะรู้สึกเจ็บ</div>
        </MessageBot>
        <MessageBot
          class="animate__animated animate__fadeInUp animate__delay-2s"
        >
          <div class="text-left">มีอาการระคายเคืองร่วมด้วย</div>
        </MessageBot>
        <MessageBot
          class="animate__animated animate__fadeInUp animate__delay-3s"
        >
          <div class="text-left">
            <span class="material-icons text-2xl px-2 rounded-xl text-white">
              done
            </span>
          </div>
        </MessageBot>
        <MessageBot
          :isstore="true"
          class="animate__animated animate__fadeInUp animate__delay-4s"
        >
          <div class="text-left">
            คุณมีอาการเหล่านี้ มานานแค่ไหน<br />
            ประมาณกี่วันครับ?
          </div>
        </MessageBot>
        <MessageBot
          class="animate__animated animate__fadeInUp animate__delay-5s"
        >
          <div class="text-left">3 วัน</div>
        </MessageBot>
      </div>
    </section>
    <section class="fixed bottom-0 w-screen">
      <div class="bg-primary h-18 flex p-2">
        <div class="w-full">
          <input type="text" class="rounded-xl p-1 w-11/12" />
        </div>
        <div class="mx-2">
          <span
            class="
              material-icons
              text-3xl
              mx-1
              bg-secondary
              px-1
              rounded-xl
              text-white
            "
          >
            done
          </span>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import MessageBot from '@/components/contact/MessageBot.vue';
export default {
  components: {
    MessageBot,
  },
  mounted() {
    setTimeout(() => {
      this.$router.push('/bot/processing');
    }, 6500);
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
