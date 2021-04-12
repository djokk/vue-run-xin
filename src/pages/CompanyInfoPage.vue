<template>
  <div>
    <Rectangle :text="rectangle.text" :img="rectangle.img" />
    <CompanyFull />
    <Album />
    <Advantages />
    <Kontact />
  </div>
</template>

<script>
import Rectangle from "@/components/Rectangle.vue";
import CompanyFull from "@/components/CompanyFull.vue";
import Album from "@/components/Album.vue";
import Advantages from "@/components/Advantages.vue";
import Kontact from "@/components/Kontact.vue";

export default {
  name: "Info",
  data() {
    return {
      rectangle: {
        text: "О компании",
        img: "../img/mask-company.jpg",
      },
      albumData: [],
    };
  },
  components: {
    Rectangle,
    CompanyFull,
    Album,
    Advantages,
    Kontact,
  },

  methods: {},
  created() {},
};
</script>
