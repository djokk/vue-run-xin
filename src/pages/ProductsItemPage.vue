<template>
  <div>
    <div class="productLoading" v-if="productLoading">Загрузка....</div>
    <div class="productLoading" v-else-if="!productData">Не удалось</div>
    <div v-else>
      <section class="item-products">
        <div class="custom-container p-60">
          <div class="container">
            <div class="content__top">
              <ul class="breadcrumbs">
                <li class="breadcrumbs__item">
                  <router-link class="breadcrumbs__link" :to="{ name: 'main' }">
                    Главная
                  </router-link>
                </li>
                <li class="breadcrumbs__item">
                  <router-link class="breadcrumbs__link" :to="{ name: 'productsPage' }">
                    Оборудование
                  </router-link>
                </li>
                <li class="breadcrumbs__item">
                  <router-link class="breadcrumbs__link" :to="{ name: 'productsPage' }">
                    {{ categories.title }}
                  </router-link>
                </li>
                <li class="breadcrumbs__item">
                  <a class="breadcrumbs__link">{{ productData.title }}</a>
                </li>
              </ul>
            </div>

            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6">
                <Slick ref="slick" :options="slickOptions" class="gallery">
                  <img
                    class="gallery__hightlight"
                    v-for="images in productData.image"
                    :key="images.id"
                    :src="images.imageUrl"
                    :alt="images.alt"
                  />
                </Slick>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="product-info">
                  <h1 class="title">{{ productData.title }}</h1>
                  <p class="undertitle">{{ productData.undertitle }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="custom-container p-30">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div class="layout">
                  <h1 class="title">Применение</h1>
                  <p class="undertitle">{{ productData.application }}</p>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div class="layout">
                  <h1 class="title">Материал</h1>
                  <p class="undertitle">{{ productData.material }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="custom-container p-60">
          <div class="container">
            <div class="tables text-center">
              <h1 class="title">ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ</h1>
              <img
                class="tables__img"
                v-for="images in productData.tableImage"
                :key="images.id"
                :src="images.imageUrl"
                :alt="images.alt"
              />
              <!-- <div class="table">
                <table
                  align="center"
                  border="0"
                  cellpadding="3"
                  cellspacing="1"
                  class="table"
                  width="100%"
                >
                  <tbody>
                    <tr class="trbg">
                      <td class="trbg__color" colspan="2">Модель</td>
                      <td class="trbg__white">от JC760×1100 до JC1100x1200</td>
                      <td class="trbg__white">от JC760×1100 до JC1100x1200</td>
                      <td class="trbg__white">от JC760×1100 до JC1100x1200</td>
                      <td class="trbg__white">JC1100x1200</td>
                    </tr>
                    <tr class="trbg">
                      <td class="trbg__color" colspan="2">Размер входа (мм)</td>
                      <td class="trbg__gray">от 760×1100 до 1100x1200</td>
                      <td class="trbg__gray">1100x1200</td>
                    </tr>
                  </tbody>
                </table>
              </div> -->
            </div>
          </div>
        </div>
      </section>
      <Recommend :recommendData="recommendData" />
      <Kontact />
    </div>
  </div>
</template>

<style>
.productLoading {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  position: absolute;
}
</style>

<script>
import Kontact from "@/components/Kontact.vue";
import Recommend from "@/components/Recommend.vue";
import axios from "axios";
import gotoPage from "@/helpers/gotoPage";
import Slick from "vue-slick";

export default {
  name: "MainPage",
  data() {
    return {
      productData: [],
      categoriesData: [],
      recommendData: [],
      productLoading: false,
      productLoadingFailed: false,
      slickOptions: {
        // slidesToShow: 1,
        // slidesToScroll: 1,
        prevArrow:
          '<button type="button" class="slick-prev slick-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow:
          '<button type="button" class="slick-next slick-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: "linear",
        // arrows: true,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              autoplay: false,
            },
          },
        ],
      },
    };
  },
  components: {
    Recommend,
    Kontact,
    Slick,
  },
  computed: {
    products() {
      return this.productData;
    },
    recommends() {
      return this.recommendData;
    },
    categories() {
      return this.categoriesData;
    },
  },
  methods: {
    gotoPage,
    loadProduct() {
      this.productLoading = true;
      this.productLoadingFailed = false;
      axios
        .get("../static/products.json")
        .then((response) => {
          this.productData = response.data;
          this.productData.find((elem) => {
            elem.items.find((prod) => {
              if (prod.id == +this.$route.params.id) {
                this.productData = prod;
              }
            });
          });
        })
        .catch(() => (this.productLoadingFailed = true))
        .then(() => (this.productLoading = false));
    },
    loadProductsRecomemend() {
      axios
        .get("../static/products.json")
        .then((response) => {
          this.recommendData = [];
          let step1 = response.data[0].items;
          // this.recommendData.push(elem);
          for (let i = 0; i < 4; i++) {
            const n = Math.floor(Math.random() * step1.length);
            if (step1.id !== this.productData.id) {
              this.recommendData.push(step1.splice(n, 1)[0]);
            }
          }
        })
        .catch((error) => console.log(error));
    },
    loadCategory() {
      axios
        .get("../static/products.json")
        .then((response) => {
          this.categoriesData = response.data;
          this.categoriesData.find((elem) => {
            elem.categories.find((prod) => {
              if (prod.id == this.productData.categoryId[0].itemId) {
                this.categoriesData = prod;
              }
            });
          });
        })
        .catch((error) => console.log(error));
    },
  },
  created() {
    this.loadProduct();
    this.loadCategory();
    this.loadProductsRecomemend();
  },
  watch: {
    "$route.params.id": {
      handler() {
        this.loadProduct();
        this.loadProductsRecomemend();
      },
      inmediate: true,
    },
  },
};
</script>
