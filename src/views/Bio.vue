<template>
  <div>
    <div v-if="mobileCheck()">
      <div class="splashTextMobile">
        <p class="fade-in1Mobile">C++</p>
        <p class="fade-in2Mobile">Ruby</p>
        <p class="fade-in3Mobile">Visual Basic</p>
      </div>
      <h3>Here is a generic intro sentence.</h3>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        placerat ultricies justo a lobortis. Proin ac suscipit sem. Ut dignissim
        vitae ante ac scelerisque. Nullam ut nisi ligula. Etiam malesuada et
        risus ut consequat. In eros erat, interdum nec tempus eget, faucibus ac
        urna. Curabitur tempus placerat sodales.
      </p>
      <p>
        Sed vehicula porta risus non gravida. Etiam et rhoncus lacus. Aliquam
        nisi mauris, tincidunt nec lectus quis, tempor molestie metus. Duis
        pulvinar nunc nec leo pharetra, sit amet convallis tortor imperdiet.
        Cras vel imperdiet libero. Vestibulum vitae mollis dolor. In mattis, mi
        quis interdum vulputate, ipsum risus malesuada arcu, ut pretium mauris
        velit ut dolor. Ut condimentum, nunc id facilisis vestibulum, enim
        mauris pulvinar dui, blandit sodales sapien velit non purus. Curabitur
        eget euismod lacus.
      </p>
      <p>
        Nunc pharetra, enim in interdum egestas, metus nisi placerat velit, at
        viverra dolor nulla sit amet sapien. In hac habitasse platea dictumst.
        Suspendisse potenti. Cras tincidunt eros lectus. Praesent ornare nibh
        ante, eu porta ligula vestibulum placerat. Etiam commodo tortor sapien,
        vel malesuada leo sagittis eget. Sed cursus velit quis nunc cursus
        sagittis. Aliquam maximus elit quis sem pharetra maximus. Morbi arcu
        ipsum, volutpat sit amet malesuada sit amet, scelerisque non lectus.
        Nunc metus dolor, pulvinar in fringilla sit amet, convallis pulvinar
        tortor. Nulla at mauris laoreet, porttitor justo at, ullamcorper diam.
        Interdum et malesuada fames ac ante ipsum primis in faucibus.
      </p>
    </div>
    <div v-if="!mobileCheck()">
      <div class="page_container">
        <div class="content_container">
          <p class="bannerTitle"> Unpublished Novels </p>
          <div class="banner">
            <div class="slide alice">
              <h2>Another Alice</h2>
              <p>a novel</p>
            </div>
            <div class="slide human_mech">
              <h2>the human mechanism</h2>
              <p>a novel</p>
            </div>
            <div class="slide empathy">
              <h2>Empathy</h2>
              <p>a novel</p>
            </div>
          </div>
          <p class="bannerTitle">Published Short Stories/Poems </p>
          <div class="banner">
            <div class="slide alice">
              <h2>Another Alice</h2>
              <p>a novel</p>
            </div>
            <div class="slide human_mech">
              <h2>the human mechanism</h2>
              <p>a novel</p>
            </div>
            <div class="slide empathy">
              <h2>Empathy</h2>
              <p>a novel</p>
            </div>
          </div>
          <p class="bannerTitle">Other </p>
          <div class="banner">
            <div class="slide alice">
              <h2>Another Alice</h2>
              <p>a novel</p>
            </div>
            <div class="slide human_mech">
              <h2>the human mechanism</h2>
              <p>a novel</p>
            </div>
            <div class="slide empathy">
              <h2>Empathy</h2>
              <p>a novel</p>
            </div>
          </div>
          <div class="footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    mobileCheck() {
      if (window.innerWidth <= 760) {
        this.mobile = true;
      }
      return this.mobile;
    },
  },
};
</script>

<style (scoped)>
.banner {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 750px;
  height: 250px;
  margin-top: 10px;
}
.bannerTitle {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  position: sticky;
}
.footer {
  width: 800px;
  height: 180px;
}
.slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid 1px;
  height: 100%;
  width: 32.5%;
  background: white;
  transition: transform 0.4s;
}
.slide:hover {
  font-weight: bold;
}
.content_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
}
.page_container {
  width: 100vw;
}
</style>