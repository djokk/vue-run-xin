<template>
  <div class="col-xl-4 col-lg-4">
    <div class="filter-btn">
      <div class="filter-btn__link" @click.prevent="menucategory()">
        <i class="fa fa-tasks" aria-hidden="true"></i>
        каталог
        <i id="fa-angle" class="fa fa-angle-down" aria-hidden="true"></i>
      </div>
    </div>
    <ul class="filter">
      <li
        class="filter__item"
        v-for="category in categories"
        :key="category.id"
        :value="category.id"
      >
        <a
          href=""
          class="filter__link"
          :class="{ active: currentCategoryId === category.id }"
          @click.prevent="selectedCat(category.id)"
          >{{ category.title }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProductFilter",
  data() {
    return {
      categoriesData: null,
      currentCategoryId: 0,
    };
  },
  props: ["categoryId"],
  computed: {
    categories() {
      return this.categoriesData ? this.categoriesData[0].categories : [];
    },
  },
  methods: {
    loadCategories() {
      axios
        .get("../static/products.json")
        .then((response) => (this.categoriesData = response.data))
        .catch((error) => console.log(error));
    },
    selectedCat(id) {
      this.currentCategoryId = id;
      this.$emit("update:categoryId", this.currentCategoryId);
    },
    menucategory() {
      if (window.screen.width > 991) {
        document.querySelector(".filter").setAttribute("style", "");
      } else {
        document.querySelector(".filter").classList.toggle("filter-open");
        if (document.querySelector(".filter-btn__link").classList.contains("open")) {
          document.querySelector(".filter-btn__link").classList.remove("open");
          document.querySelector("#fa-angle").classList.remove("fa-angle-up");
          document.querySelector("#fa-angle").classList.add("fa-angle-down");
        } else {
          document.querySelector(".filter-btn__link").classList.add("open");
          document.querySelector("#fa-angle").classList.remove("fa-angle-down");
          document.querySelector("#fa-angle").classList.add("fa-angle-up");
        }
      }

      this.selectedCat(0);
    },
  },
  created() {
    this.loadCategories();
  },
};
</script>
