<template>
  <div>
    <ul class="cards d-flex flex-wrap">
      <li class="cards__item" v-for="product in products" :key="product.id">
        <router-link
          class="card"
          :to="{ name: 'productsItemPage', params: { id: product.id } }"
        >
          <div class="card__img">
            <img :src="product.image[0].imageUrl" :alt="product.image[0].alt" />
          </div>
          <h1 class="card__title">{{ product.title }}</h1>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import gotoPage from "@/helpers/gotoPage";

export default {
  name: "ProductList",
  data() {
    return {};
  },
  props: ["products"],
  methods: {
    gotoPage,
  },
};
</script>
