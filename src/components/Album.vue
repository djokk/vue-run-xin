<template>
  <section class="album withdraw">
    <div class="custom-container">
      <div class="container">
        <Slick ref="slick" :options="slickOptions" class="gallery-sliders">
          <div v-for="album in albums" :key="album.id">
            <img class="gallery-sliders__img" :src="album.image" :alt="album.alt" />
          </div>
        </Slick>
      </div>
    </div>
  </section>
</template>

<script>
import Slick from "vue-slick";
import albums from "@/data/album";

export default {
  components: { Slick },
  data() {
    return {
      slickOptions: {
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: "ondemand",
        prevArrow:
          '<button type="button" class="slick-prev slick-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow:
          '<button type="button" class="slick-next slick-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
        // arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
  computed: {
    albums() {
      return albums;
    },
  },
  methods: {
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    },
    reInit() {
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    },
  },
};
</script>
