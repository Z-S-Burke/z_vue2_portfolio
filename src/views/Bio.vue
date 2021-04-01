<template>
  <div class="page_container">
    <div class="content_container">
      <!--<div class="d-flex text-center headingText">
      <div class="d-flex flex-column"> 
        <p> M </p>
        <p> A </p>
        <p> I </p>
        <p> N </p>
        <br/> 
        <p> W </p>
        <p> O </p>
        <p> R </p>
        <p> K </p>
        <p> S </p>
      </div> -->
            <div class="sectionBreaker"></div>
      <div class="sectionBreaker"></div>

      <div class="gallery">
        <div class="img-container">
          <a href="/Alice">
            <img
              src="../assets/Alice Poster Style minimal.jpg"
              alt="Another Alice - A Novel"
            />
          </a>
        </div>
        <div class="img-container">
          <a href="/Human">
            <img
              src="../assets/human mechanism inlay cover.jpg"
              alt="the human mechanism - a novel"
            />
          </a>
        </div>
        <div class="img-container">
          <img
            src="../assets/sympathy first cover.jpg"
            alt="sympathy - a novel"
          />
        </div>
        <div class="img-container">
          <a
            href="http://irishliteraryreview.com/fiction/how-to-become-an-astronaut-by-zach-burke"
            target="blank"
          >
            <img
              src="../assets/How to Become an Astronaut.jpg"
              alt="short story"
            />
          </a>
        </div>
      </div>
      <!--</div>-->
      <div class="sectionBreaker"></div>
      <div>
        <div class="banner">
          <div class="slide">
            <h2>I</h2>
            <p>a short story</p>
          </div>
          <div class="slide">
            <h2>II</h2>
            <p>a short story</p>
          </div>
          <div class="slide">
            <h2>III</h2>
            <p>a short story</p>
          </div>
          <div class="slide">
            <h2>IV</h2>
            <p>a poem</p>
          </div>
          <div class="slide">
            <h2>V</h2>
            <p>a short story</p>
          </div>
          <div class="slide">
            <h2>VI</h2>
            <p>a polemic</p>
          </div>
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
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
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
  width: 90vw;
  height: 25vh;
  margin-bottom: 5vh;
}

.sectionBreaker {
  width: 100%;
  height: 5vh;
  margin-bottom: 5px;
  margin-top: 5px;
  border-bottom: dashed 1px black;
}

.sectionHeading {
  margin-right: 50vw;
  font-size: 5vh;
  font-family: "Trebuchet MS";
  color: black;
}

.slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid 1px;
  height: 25vh;
  width: 20vh;
  background: white;
  transition: transform 0.4s;
  box-shadow: 20px 20px 10px;
}

.slide:hover {
  font-weight: bold;
}

@import url("https://fonts.googleapis.com/css2?family=Sacramento&display=swap");

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  height: 60vh;
  width: 95vw;
  gap: 2rem;
  margin-top: 2.5vh;
}

.img-container {
  overflow: hidden;
  box-shadow: 10px 10px 10px;
}

.img-container img {
  cursor: pointer;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease-out;
  box-shadow: 5px 5px 10px;
}

.img-container img:hover {
  transform: scale(1.2);
}

.modal {
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-out;
}

.modal.open {
  opacity: 1;
  pointer-events: all;
}

.full-img {
  position: absolute;
  height: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.5);
  transition: all 0.3s ease-out;
}

.full-img.open {
  transform: translate(-50%, -50%) scale(1);
}

.modal p {
  color: white;
  font-size: 2rem;
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -5%);
}
</style>