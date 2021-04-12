<template>
  <footer class="footer withdraw">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-12">
          <div class="footer-logo">
            <router-link :to="{ name: 'main' }" class="footer-logo__link">
              <img class="footer-logo__img" src="/img/logo_white.png" alt="" />
            </router-link>
          </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6">
          <h1 class="title">Меню</h1>
          <ul class="footer-menu">
            <li>
              <router-link :to="{ name: 'main' }" class="footer-menu__link"
                >Главная</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'company' }" class="footer-menu__link"
                >О компании</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'productsPage' }" class="footer-menu__link"
                >Оборудование</router-link
              >
            </li>
          </ul>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
          <h1 class="title">Социальные сети</h1>
          <ul class="footer-social">
            <li>
              <a
                href="https://www.instagram.com/run_xin_uz/"
                target="_blank"
                class="footer-social__link"
                ><i class="fa fa-instagram" aria-hidden="true"></i
              ></a>
            </li>
            <li>
              <a
                href="https://t.me/run_xin_uz"
                target="_blank"
                class="footer-social__link"
                ><i class="fa fa-telegram" aria-hidden="true"></i
              ></a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/runxinuz"
                target="_blank"
                class="footer-social__link"
                ><i class="fa fa-facebook" aria-hidden="true"></i
              ></a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCDRCzJuFFoSuJBOGyjK3Zww"
                target="_blank"
                class="footer-social__link"
                ><i class="fa fa-youtube" aria-hidden="true"></i
              ></a>
            </li>
          </ul>
        </div>
        <div class="col-xl-12">
          <div class="line"></div>
        </div>
      </div>
    </div>
    <div class="politics">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <h1 class="footer-title" id="copyright">
              Copyright © {{ new Date().getFullYear() }} . All Rights Reserved.
            </h1>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-5 col-sm-5">
            <h3 class="footer-title">Политика конфиденциальности</h3>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
