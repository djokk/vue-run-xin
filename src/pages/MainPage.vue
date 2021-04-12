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
          // "https://605c39616d85de00170d991b.mockapi.io/api/v1/products"
          // "http://localhost:8080/static/products.json"
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
    //   let step1 = response.data[0].items.length - 1;
    //   // console.log(step1);
    //   for (var i = 0; i < 8; i++) {
    //     // let productData = ;
    //     let step2 = Math.floor(Math.random() * (step1 - 0) + 0);
    //     this.equipmentData.push(response.data[0].items[step2]);
    //   }
    //   // console.log(response.data);
    // });
    // },
    //   // this.productData.find((elem) => {
    //   //   elem.items.find((prod) => {
    //   //     if (prod.id == +this.$route.params.id) {
    //   //       this.equipmentData = prod;
    //   //       // return this.productData;
    //   //     }
    //   //   });
    //   // });
    //   // });
    // },
  },
  created() {
    this.loadProductEquipment();
  },
  // watch: {
  //   "$route.params.id": {
  //     handler() {
  //       this.loadProductEquipment();
  //     },
  //     inmediate: true,
  //   },
  // },
};
</script>
