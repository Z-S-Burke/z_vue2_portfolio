<template>
  <div class="page_container">
    <div class="content_container">
      <div class="card_container">
        <img src="..\assets\Alice Poster Cover.jpg" class="card" />
      </div>
      <div class="card_container">
        <img src="..\assets\human mechanism minimalist cover.jpg" class="card" />
      </div>
      <div class="card_container">
        <img src="..\assets\Alice Poster Cover.jpg" class="card" />
      </div>
      <div class="card_container">
        <img src="..\assets\Alice Poster Cover.jpg" class="card" />
      </div>
      <div class="card_container">
        <img src="..\assets\Alice Poster Cover.jpg" class="card" />
      </div>
      <div class="card_container">
        <img src="..\assets\Alice Poster Cover.jpg" class="card" />
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
.question_text {
  font-weight: bold;
  font-style: italic;
}
.headerPhoto {
  max-width: 100%;
}
.carousel {
  width: 100vw;
  height: 80vh;
}

.card_container {
  height: 60vh;
  width: 40vh;
}

.card {
  height: 60vh;
  width: 40vh;
  object-fit: contain;
}

@media screen and (min-width: 500px) {
  .carousel_border {
    border-width: 50px;
    padding: 25px;
  }
}
.page_container {
  width: 100vw;
}
.content_container {
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.caption_background {
  background-color: rgb(0, 0, 0, 0.25);
}
.bglight {
  background-color: rgba(255, 255, 255, 0.452);
}
@media (min-width: 768px) {
  /* show 4 items */
  .carousel-inner .active,
  .carousel-inner .active + .carousel-item,
  .carousel-inner .active + .carousel-item + .carousel-item,
  .carousel-inner .active + .carousel-item + .carousel-item + .carousel-item {
    display: block;
  }
  .carousel-inner
    .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left),
  .carousel-inner
    .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left)
    + .carousel-item,
  .carousel-inner
    .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left)
    + .carousel-item
    + .carousel-item,
  .carousel-inner
    .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left)
    + .carousel-item
    + .carousel-item
    + .carousel-item {
    transition: none;
  }
  .carousel-inner .carousel-item-next,
  .carousel-inner .carousel-item-prev {
    position: relative;
    transform: translate3d(0, 0, 0);
  }
  .carousel-inner
    .active.carousel-item
    + .carousel-item
    + .carousel-item
    + .carousel-item
    + .carousel-item {
    position: absolute;
    top: 0;
    right: -25%;
    z-index: -1;
    display: block;
    visibility: visible;
  }
  /* left or forward direction */
  .active.carousel-item-left + .carousel-item-next.carousel-item-left,
  .carousel-item-next.carousel-item-left + .carousel-item,
  .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item,
  .carousel-item-next.carousel-item-left
    + .carousel-item
    + .carousel-item
    + .carousel-item,
  .carousel-item-next.carousel-item-left
    + .carousel-item
    + .carousel-item
    + .carousel-item
    + .carousel-item {
    position: relative;
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }
  /* farthest right hidden item must be absolue position for animations */
  .carousel-inner .carousel-item-prev.carousel-item-right {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    display: block;
    visibility: visible;
  }
  /* right or prev direction */
  .active.carousel-item-right + .carousel-item-prev.carousel-item-right,
  .carousel-item-prev.carousel-item-right + .carousel-item,
  .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item,
  .carousel-item-prev.carousel-item-right
    + .carousel-item
    + .carousel-item
    + .carousel-item,
  .carousel-item-prev.carousel-item-right
    + .carousel-item
    + .carousel-item
    + .carousel-item
    + .carousel-item {
    position: relative;
    transform: translate3d(100%, 0, 0);
    visibility: visible;
    display: block;
    visibility: visible;
  }
}
</style>