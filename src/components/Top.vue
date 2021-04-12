<template>
  <a href="#header" id="top" @click="scrollTo" @scroll="scrollHt">
    <i class="fa fa-arrow-up" aria-hidden="true"></i>
  </a>
</template>

<script>
// import smoothscroll from "smoothscroll-polyfill";
import SmoothScroll from "smooth-scroll";

export default {
  methods: {
    scrollTo() {
      // smoothscroll.polyfill();
      // window.__forceSmoothScrollPolyfill__ = true;
      // window.scroll({
      //   left: 0,
      //   top: 0,
      //   behavior: "smooth",
      // });
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
