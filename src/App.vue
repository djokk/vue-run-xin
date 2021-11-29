<template>
  <div id="app">
    <Navbar />

    <router-view />

    <Top />
    <Order />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Top from "@/components/Top.vue";
import Order from "@/components/Order.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Top,
    Order,
    Footer,
  },
};
</script>
