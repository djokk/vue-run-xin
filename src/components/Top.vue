<template>
  <a href="#app" id="top" @click="scrollTo" @scroll="scrollHt">
    <i class="fa fa-arrow-up" aria-hidden="true"></i>
  </a>
</template>

<script>
import SmoothScroll from "smooth-scroll";

export default {
  methods: {
    scrollTo() {
      SmoothScroll('a[href*="#"]', {
        speed: 600,
        speedAsDuration: true,
      });
    },
    scrollHt() {
      let scroll = window.pageYOffset;
      let screenWidth = window.screen.width;
      if (screenWidth < 767) {
        if (scroll > 400) {
          document.querySelector("#top").classList.add("top-open");
        } else {
          document.querySelector("#top").classList.remove("top-open");
        }
      } else {
        if (scroll > 800) {
          document.querySelector("#top").classList.add("top-open");
        } else {
          document.querySelector("#top").classList.remove("top-open");
        }
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.scrollHt);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollHt);
  },
};
</script>
