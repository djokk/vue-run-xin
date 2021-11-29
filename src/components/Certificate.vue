<template>
  <section class="certificate withdraw">
    <div class="container">
      <h1 class="title">Сертификаты</h1>
      <div class="row">
        <div
          class="col-xl-3 col-lg-3 col-md-6 col-sm-6"
          v-for="certificate in certificates"
          :key="certificate.id"
        >
          <img :src="certificate.image" :alt="certificate.alt" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import certificates from "@/data/certificates";

export default {
  computed: {
    certificates() {
      return certificates;
    },
  },
};
</script>
