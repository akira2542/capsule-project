<template lang="html">
  <div v-if="!isMobile" class="flex flex-col justify-center h-screen w-screen">
    <h1 class="text-center w-screen">โปรดเปิดในโทรศัพท์</h1>
  </div>
  <section v-else>
    <router-view />
  </section>
</template>
<script>
export default {
  data() {
    return {
      isMobile: true,
    };
  },
  mounted() {
    this.checkViewPort();
    window.addEventListener('resize', this.checkViewPort);
  },
  methods: {
    checkViewPort() {
      this.isMobile = window.innerWidth < 550;
    },
  },
};
</script>
<style>
#app {
  font-family: Prompt, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px; /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
