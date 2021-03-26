<template>
  <div class="wholePage d-flex align-items-center justify-content-center">
    <div v-if="mobileCheck()">
      <div id="appDesktop">
        <Header />
        <router-view id="mainVue" />
        <Footer />
      </div>
    </div>
    <div v-if="!mobileCheck()">
      <div id="appDesktop">
        <Header />
        <router-view id="mainVue" />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "home",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      /* eslint-disable */
      slide: 0,
      sliding: null,
      mobile: false,
    };
  },
  created: {
    function() {
      this.mobileCheck();
    },
  },
  methods: {
    mobileCheck() {
      if (window.innerWidth <= 760) {
        this.mobile = true;
        console.log("yep, mobile");
      } else {
        this.mobile = false;
        console.log("nope, desktop");
      }
      return this.mobile;
    },
  },
};
</script> 

<style>
#appDesktop {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#appMobile {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#mainVue {
  height: 100vh;
  margin-top: 20px;
  width: 100%;
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
.wholePage {
  width: 100%;
}
</style>