<template>
  <div class="header-slider">
    <div class="slider custom-container">
      <div class="container">
        <Slick ref="slick" :options="slickOptions" class="sliders">
          <div class="item d-flex">
            <div class="item__content">
              <h1 class="overhead">RUN XIN</h1>
              <h2 class="title">Качество и доступность с нами</h2>
              <p class="subtitle">
                Компания всегда соблюдает цель развивается на основе науки и техники
              </p>
              <a @click="scrollTo" class="btn scrollDown">Оставить заявку</a>
            </div>
            <div class="item__image">
              <img src="img/Hammer-crusher.png" alt="Hammer crusher" />
            </div>
          </div>
          <div class="item d-flex">
            <div class="item__content">
              <h1 class="overhead">RUN XIN</h1>
              <h2 class="title">Качество и доступность с нами</h2>
              <p class="subtitle">
                Компания всегда соблюдает цель развивается на основе науки и техники
              </p>
              <a @click="scrollTo" class="btn scrollDown">Оставить заявку</a>
            </div>
            <div class="item__image">
              <img src="img/Hammer-crusher.png" alt="Hammer crusher" />
            </div>
          </div>
        </Slick>
      </div>
    </div>
  </div>
</template>

<script>
import Slick from "vue-slick";

export default {
  components: { Slick },
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3500,
      },
    };
  },
  methods: {
    scrollTo() {
      var footer = document.querySelector("#send-number");
      window.scroll({
        left: 0,
        top: footer.offsetTop,
        behavior: "smooth",
      });
    },
  },
};
</script>
