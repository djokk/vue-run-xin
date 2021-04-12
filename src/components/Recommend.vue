<template>
  <section class="recommend withdraw">
    <div class="custom-container p-60">
      <div class="container text-center">
        <h2 class="title">Мы рекомендуем!</h2>
        <ul class="row">
          <li
            href="#"
            class="col-xl-3 col-lg-3 col-md-4 col-sm-6"
            v-for="product in recommendData"
            :key="product.id"
          >
            <router-link
              href=""
              class="card"
              :to="{ name: 'productsItemPage', params: { id: product.id } }"
            >
              <img
                class="card__img"
                :src="product.image[0].imageUrl"
                :alt="product.image[0].alt"
              />
              <h1 class="card__title">{{ product.title }}</h1>
            </router-link>
          </li>
        </ul>
        <router-link :to="{ name: 'productsPage' }" class="btn">Ещё</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["recommendData"],
};
</script>
