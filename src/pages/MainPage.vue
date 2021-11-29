<template>
  <div>
    <SliderHeader />
    <Company />
    <Advantages />
    <Equipment :equipmentData="equipment" />
    <Kontact />
  </div>
</template>

<script>
import SliderHeader from "@/components/SliderHeader.vue";
import Company from "@/components/Company.vue";
import Advantages from "@/components/Advantages.vue";
import Equipment from "@/components/Equipment.vue";
import Kontact from "@/components/Kontact.vue";
import axios from "axios";
// import func from "vue-editor-bridge";

export default {
  name: "MainPage",
  data() {
    return {
      equipmentData: [],
    };
  },
  components: {
    SliderHeader,
    Company,
    Advantages,
    Equipment,
    Kontact,
  },
  computed: {
    equipment() {
      return this.equipmentData;
    },
  },
  methods: {
    loadProductEquipment() {
      axios
        .get(
          "../static/products.json"
        )
        .then((response) => {
          let step1 = response.data[0].items;
          for (let i = 0; i < 8; i++) {
            const num = Math.floor(Math.random() * step1.length);
            this.equipmentData.push(step1.splice(num, 1)[0]);
          }
        });
    },
  },
  created() {
    this.loadProductEquipment();
  },
  metaInfo() {
    return {
      title: "Run Xin",
      meta: [
        {
          vmid: "description",
          property: "description",
          content: "Run Xin Machinery Co.Ltd (ООО Рун Хин) является крупномасштабным ведущим предприятием по разработке, изготовлению и продаже крупного дробильного и измельчительного оборудования",
        },
        { vmid: "og:title", property: "og:title", content: "Главный" },
        {
          vmid: "og:description",
          property: "og:description",
          content: "Компания RunXin занимается на производстве исследование оборудование автоматизации для нового стенного материала уже 20 лет",
        },
        {
          vmid: "og:image:url",
          property: "og:image:url",
          content: "https://run-xin.uz/img/logo.png",
        },
      ],
    };
  },
};
</script>
