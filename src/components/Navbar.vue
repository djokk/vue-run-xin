<template>
  <header class="header">
    <div class="navbar">
      <div class="container">
        <router-link :to="{ name: 'main' }" class="logo-link">
          <img class="logo-img" src="/img/logo_white.png" alt="" />
        </router-link>
        <nav class="nav">
          <ul class="nav__item">
            <li @click="navclick">
              <router-link :to="{ name: 'main' }" class="nav__link nav__link-item"
                >Главная</router-link
              >
            </li>
            <li @click="navclick">
              <router-link :to="{ name: 'company' }" class="nav__link nav__link-item"
                >О компании</router-link
              >
            </li>
            <li @click="navclick">
              <router-link :to="{ name: 'productsPage' }" class="nav__link nav__link-item"
                >Оборудование</router-link
              >
            </li>
            <li>
              <a href="tel:+998999199339" class="btn nav__link-item"
                >Получить консультацию</a
              >
            </li>
          </ul>
        </nav>
        <div class="burger burger-slip" @click="burgerMenu">
          <div class="burger-lines"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    scrollTo() {
      window.scroll({
        left: 0,
        top: 0,
        behavior: "smooth",
      });
    },
    burgerMenu() {
      if (document.querySelector(".burger").classList.contains("open")) {
        document.querySelector("body").classList.remove("overflow-y");
        document.querySelector(".burger").classList.remove("open");
        document.querySelector(".nav__item").setAttribute("style", "display:none");
      } else {
        document.querySelector("body").classList.add("overflow-y");
        document.querySelector(".burger").classList.add("open");
        document.querySelector(".nav__item").setAttribute("style", "display:flex");
      }
    },
    resize() {
      if (window.screen.width > 991) {
        document.querySelector(".nav__item").setAttribute("style", "");
        document.querySelector("body").classList.remove("overflow-y");
        document.querySelector(".burger").classList.remove("open");
      } else {
        document.querySelector(".nav__item").setAttribute("style", "display: none");
      }
    },
    navclick() {
      if (window.screen.width < 992) {
        if (document.querySelector(".burger").classList.contains("open")) {
          console.log("asd");
          document.querySelector("body").classList.remove("overflow-y");
          document.querySelector(".burger").classList.remove("open");
          document.querySelector(".nav__item").setAttribute("style", "display:none");
        }
      }
    },
  },
  created() {
    window.addEventListener("resize", this.resize);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollHt);
  },
};
</script>
