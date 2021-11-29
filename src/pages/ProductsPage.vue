<template>
  <div>
    <Rectangle :text="rectangle.text" :img="rectangle.img" />
    <section class="products products-60">
      <div class="custom-container p-60">
        <div class="container text-center">
          <h1 class="overhead">Наши оборудование</h1>
          <h2 class="title">Познакомьтесь с нашей продукцией</h2>
          <div class="row justify-content-between">
            <ProductFilter :category-id.sync="filterCategoryId" />
            <div class="col-xl-8 col-lg-8">
              <ProductList :products="pageOfItems" />
              <div class="pagination d-flex justify-content-center flex-wrap">
                <jw-pagination
                  :items="filteredProducts"
                  @changePage="onChangePage"
                  :pageSize="productsPerPage"
                  :maxPages="3"
                  :disableDefaultStyles="true"
                  :labels="customLabels"
                ></jw-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Rectangle from "@/components/Rectangle.vue";
import ProductFilter from "@/components/ProductFilter.vue";
import ProductList from "@/components/ProductList.vue";
import axios from "axios";

const customLabels = {
  previous: "<",
  next: ">",
};

export default {
  name: "ProductPage",
  data() {
    return {
      rectangle: {
        text: "Оборудование",
        img: "../img/mask-product.png",
      },
      page: 1,
      productsPerPage: 6,
      productData: null,
      pageOfItems: [],
      customLabels,
      filterCategoryId: 0,
    };
  },
  components: {
    Rectangle,
    ProductFilter,
    ProductList,
  },
  computed: {
    filteredProducts() {
      let filteredProducts = this.products;
      if (this.filterCategoryId) {
        filteredProducts = filteredProducts.filter((product) =>
          product.categoryId.find((item) => item.itemId === this.filterCategoryId)
        );
      }
      return filteredProducts;
    },
    products() {
      return this.productData ? this.productData[0].items : [];
    },
  },
  methods: {
    loadProducts() {
      axios
        .get("../static/products.json")
        .then((response) => (this.productData = response.data))
        .catch((error) => console.log(error));
    },
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
  },
  watch: {
    page() {
      this.loadProducts();
    },
    currentCategoryId() {
      this.loadProducts();
    },
  },
  created() {
    this.loadProducts();
  },
  metaInfo() {
    return {
      title: "Run Xin | Оборудование",
      meta: [
        {
          vmid: "description",
          property: "description",
          content: "Run Xin Machinery Co.Ltd (ООО Рун Хин) является крупномасштабным ведущим предприятием по разработке, изготовлению и продаже крупного дробильного и измельчительного оборудования",
        },
        { vmid: "og:title", property: "og:title", content: "Оборудование" },
        {
          vmid: "og:description",
          property: "og:description",
          content: "Run Xin Machinery Co.Ltd (ООО Рун Хин) является крупномасштабным ведущим предприятием по разработке, изготовлению и продаже крупного дробильного и измельчительного оборудования",
        },
        {
          vmid: "og:image:url",
          property: "og:image:url",
          content: "",
        },
      ],
    };
  },
};
</script>
