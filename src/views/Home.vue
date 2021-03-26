  
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
      <div class="text-left text-dark textBoxStyle">
        <div class="d-flex flex-row align-items-center justify-content-around">
          <img class="splashImage" src="..\assets\warhorse.png"/>
          <ul class="p-3 introText mb-5 pb-5">
            <h2 class="splashTextName text-center">write, write, write </h2>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat ultricies justo a lobortis. Proin ac suscipit sem. Ut
              dignissim vitae ante ac scelerisque. Nullam ut nisi ligula. Etiam
              malesuada et risus ut consequat. In eros erat, interdum nec tempus
              eget, faucibus ac urna. Curabitur tempus placerat sodales.
            </p>
            <p>
              Sed vehicula porta risus non gravida. Etiam et rhoncus lacus.
              Aliquam nisi mauris, tincidunt nec lectus quis, tempor molestie
              metus. Duis pulvinar nunc nec leo pharetra, sit amet convallis
              tortor imperdiet. Cras vel imperdiet libero. Vestibulum vitae
              mollis dolor. In mattis, mi quis interdum vulputate, ipsum risus
              malesuada arcu, ut pretium mauris velit ut dolor. Ut condimentum,
              nunc id facilisis vestibulum, enim mauris pulvinar dui, blandit
              sodales sapien velit non purus. Curabitur eget euismod lacus.
            </p>
            <p>
              Nunc pharetra, enim in interdum egestas, metus nisi placerat
              velit, at viverra dolor nulla sit amet sapien. In hac habitasse
              platea dictumst. Suspendisse potenti. Cras tincidunt eros lectus.
              Praesent ornare nibh ante, eu porta ligula vestibulum placerat.
              Etiam commodo tortor sapien, vel malesuada leo sagittis eget. Sed
              cursus velit quis nunc cursus sagittis. Aliquam maximus elit quis
              sem pharetra maximus. Morbi arcu ipsum, volutpat sit amet
              malesuada sit amet, scelerisque non lectus. Nunc metus dolor,
              pulvinar in fringilla sit amet, convallis pulvinar tortor. Nulla
              at mauris laoreet, porttitor justo at, ullamcorper diam. Interdum
              et malesuada fames ac ante ipsum primis in faucibus.
            </p>
            <p>
              Sed vehicula porta risus non gravida. Etiam et rhoncus lacus.
              Aliquam nisi mauris, tincidunt nec lectus quis, tempor molestie
              metus. Duis pulvinar nunc nec leo pharetra, sit amet convallis
              tortor imperdiet. Cras vel imperdiet libero. Vestibulum vitae
              mollis dolor. In mattis, mi quis interdum vulputate, ipsum risus
              malesuada arcu, ut pretium mauris velit ut dolor. Ut condimentum,
              nunc id facilisis vestibulum, enim mauris pulvinar dui, blandit
              sodales sapien velit non purus. Curabitur eget euismod lacus.
            </p>
            <p>
              Sed vehicula porta risus non gravida. Etiam et rhoncus lacus.
              Aliquam nisi mauris, tincidunt nec lectus quis, tempor molestie
              metus. Duis pulvinar nunc nec leo pharetra, sit amet convallis
              tortor imperdiet. Cras vel imperdiet libero. Vestibulum vitae
              mollis dolor. In mattis, mi quis interdum vulputate, ipsum risus
              malesuada arcu, ut pretium mauris velit ut dolor. Ut condimentum,
              nunc id facilisis vestibulum, enim mauris pulvinar dui, blandit
              sodales sapien velit non purus. Curabitur eget euismod lacus.
            </p>
            <p>
              Sed vehicula porta risus non gravida. Etiam et rhoncus lacus.
              Aliquam nisi mauris, tincidunt nec lectus quis, tempor molestie
              metus. Duis pulvinar nunc nec leo pharetra, sit amet convallis
              tortor imperdiet. Cras vel imperdiet libero. Vestibulum vitae
              mollis dolor. In mattis, mi quis interdum vulputate, ipsum risus
              malesuada arcu, ut pretium mauris velit ut dolor. Ut condimentum,
              nunc id facilisis vestibulum, enim mauris pulvinar dui, blandit
              sodales sapien velit non purus. Curabitur eget euismod lacus.
            </p>
          </ul>
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
.question_text {
  font-weight: bold;
  font-style: italic;
}
.caption_background {
  background-color: rgb(0, 0, 0, 0.25);
}
.bglight {
  background-color: rgba(255, 255, 255, 0.452);
}
.banner {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 750px;
  height: 250px;
  margin-top: 10px;
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
.textHeader {
  background-color: #2196f3;
  font-size: 32px;
  font-family: Impact;
}
.textBoxStyle {
  background-color: white;
}
.splashImage {
    width: 60vw;
}
.splashText {
  font-size: 9.5vw;
  font-weight: bold;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  padding-left: 20px;
  width: 60%;
  font-family: Georgia;
}
.splashTextName {
  font-size: 9.5vw;
  font-weight: bold;
  display: flex;
  font-family: Georgia;
}
.splashTextMobile {
  font-size: 10.5vw;
  font-weight: bold;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
}
.introText {
  width: 40%;
  height: 90vh;
  margin-right: 50px;
  overflow: scroll;
  /*
  border-bottom: double #98ee99 50px;
  border-left: double #98ee99 50px;
  border-radius: 5%; */
}
.fade-in1 {
  animation: fadeIn1 ease 5s;
  border-bottom: double white 50px;
  border-left: double #83cbba 50px;
  background: linear-gradient(0.25turn, #83cbba, #ebf8e1, white);
  -webkit-animation: fadeIn1 ease 5s;
  -moz-animation: fadeIn1 ease 5s;
  -o-animation: fadeIn1 ease 5s;
  -ms-animation: fadeIn1 ease 5s;
}
@keyframes fadeIn1 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.fade-in2 {
  animation: fadeIn2 ease 7.5s;
  border-bottom: double white 50px;
  border-left: double #f8f3cb 50px;
  background: linear-gradient(0.25turn, #f8f3cb, #6ec6ff, white);
  -webkit-animation: fadeIn2 ease 7.5s;
  -moz-animation: fadeIn2 ease 7.5s;
  -o-animation: fadeIn2 ease 7.5s;
  -ms-animation: fadeIn2 ease 7.5s;
}
@keyframes fadeIn2 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.fade-in3 {
  animation: fadeIn3 ease 7.5s;
  border-bottom: double white 50px;
  border-left: double #f69d3c 50px;
  background: linear-gradient(0.25turn, #f69d3c, #f7ba6a, white);
  -webkit-animation: fadeIn3 ease 7.5s;
  -moz-animation: fadeIn3 ease 7.5s;
  -o-animation: fadeIn3 ease 7.5s;
  -ms-animation: fadeIn3 ease 7.5s;
}
@keyframes fadeIn3 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.fade-in1Mobile {
  animation: fadeIn1 ease 5s;
  -webkit-animation: fadeIn1 ease 5s;
  -moz-animation: fadeIn1 ease 5s;
  -o-animation: fadeIn1 ease 5s;
  -ms-animation: fadeIn1 ease 5s;
}
@keyframes fadeIn1Mobile {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.fade-in2Mobile {
  animation: fadeIn2 ease 7.5s;
  -webkit-animation: fadeIn2 ease 7.5s;
  -moz-animation: fadeIn2 ease 7.5s;
  -o-animation: fadeIn2 ease 7.5s;
  -ms-animation: fadeIn2 ease 7.5s;
}
@keyframes fadeIn2Mobile {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.fade-in3Mobile {
  animation: fadeIn3 ease 10s;
  -webkit-animation: fadeIn3 ease 10s;
  -moz-animation: fadeIn3 ease 10s;
  -o-animation: fadeIn3 ease 10s;
  -ms-animation: fadeIn3 ease 10s;
}
@keyframes fadeIn3Mobile {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>