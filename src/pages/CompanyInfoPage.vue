<template>
  <div>
    <Rectangle :text="rectangle.text" :img="rectangle.img" />
    <CompanyFull />
    <Certificate />
    <Album />
    <Advantages />
    <Kontact />
  </div>
</template>

<script>
import Rectangle from "@/components/Rectangle.vue";
import Certificate from "@/components/Certificate.vue";
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
    Certificate,
    CompanyFull,
    Album,
    Advantages,
    Kontact,
  },
  metaInfo() {
    return {
      title: "Run Xin | О компании",
      meta: [
        {
          vmid: "description",
          property: "description",
          content: "Run Xin Machinery Co.Ltd (ООО Рун Хин) является крупномасштабным ведущим предприятием по разработке, изготовлению и продаже крупного дробильного и измельчительного оборудования",
        },
        { vmid: "og:title", property: "og:title", content: "О компании" },
        {
          vmid: "og:description",
          property: "og:description",
          content: "Run Xin Machinery Co.Ltd (ООО Рун Хин) является крупномасштабным ведущим предприятием по разработке, изготовлению и продаже крупного дробильного и измельчительного оборудования",
        },
        {
          vmid: "og:image:url",
          property: "og:image:url",
          content: "https://run-xin.uz/img/kompaniya.jpg",
        },
      ],
    };
  },
};
</script>
