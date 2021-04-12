<template>
  <section class="equipment withdraw">
    <div class="custom-container p-60">
      <div class="container text-center">
        <h1 class="overhead">Наши оборудование</h1>
        <h2 class="title">Мы рекомендуем!</h2>
        <div class="row">
          <div
            href="#"
            class="col-xl-3 col-lg-3 col-md-4 col-sm-6"
            v-for="equipment in equipmentData"
            :key="equipment.id"
          >
            <router-link
              :to="{ name: 'productsItemPage', params: { id: equipment.id } }"
              class="card"
            >
              <img
                class="card__img"
                :src="equipment.image[0].imageUrl"
                :alt="equipment.image[0].alt"
              />
              <h1 class="card__title">{{ equipment.title }}</h1>
            </router-link>
          </div>
        </div>
        <router-link :to="{ name: 'productsPage' }" class="btn">Ещё</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default { props: ["equipmentData"] };
</script>
