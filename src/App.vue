<template>
  <div id="app">
    <div class="language" id="header">
      <div class="container">
        <div class="languages">
          <a class="languages__link" href="http://run-xin.uz/UZ/">
            <span>UZ</span>
            <img class="languages__flag" src="/img/uz.jpg" alt="uzbekistan" />
          </a>
        </div>
      </div>
    </div>
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
