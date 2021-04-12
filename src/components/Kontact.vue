<template>
  <section class="kontact withdraw">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <yandex-map :coords="coords" :zoom="17" class="map">
            <ymap-marker
              marker-type="Placemark"
              markerId="marId"
              :coords="coords"
              :icon="markerIcon"
            />
          </yandex-map>
        </div>
        <div class="col-xl-5 col-lg-5 col-md-6 col-sm-12 info">
          <h1 class="overhead">Контакты</h1>
          <h2 class="title">Контактная информация</h2>
          <div class="info__item">
            <i class="fa fa-clock-o fa-absolute" aria-hidden="true"></i>
            <p class="info__title">График работы</p>
            <span class="info__subtitle">9:00 - 18:00</span>
          </div>
          <div class="info__item">
            <i class="fa fa-map-marker fa-absolute" aria-hidden="true"></i>
            <p class="info__title">Адрес</p>
            <span class="info__subtitle"
              >Toshkent shaxar, Yangi Sergeli ko'chasi, 130</span
            >
          </div>
          <div class="info__item">
            <div class="social">
              <a
                href="https://www.instagram.com/run_xin_uz/"
                target="_blank"
                class="social__link"
                ><i class="fa fa-instagram" aria-hidden="true"></i
              ></a>
              <a href="https://t.me/run_xin_uz" target="_blank" class="social__link"
                ><i class="fa fa-telegram" aria-hidden="true"></i
              ></a>
              <a
                href="https://www.facebook.com/runxinuz"
                target="_blank"
                class="social__link"
                ><i class="fa fa-facebook" aria-hidden="true"></i
              ></a>
              <a
                href="https://www.youtube.com/channel/UCDRCzJuFFoSuJBOGyjK3Zww"
                target="_blank"
                class="social__link"
                ><i class="fa fa-youtube" aria-hidden="true"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { yandexMap, ymapMarker, loadYmap } from "vue-yandex-maps";

export default {
  name: "kontact",
  data() {
    return {
      coords: [41.23608, 69.214752],
      markerIcon: {
        layout: "default#imageWithContent",
        imageHref: "../img/marker.png",
        imageSize: [27, 43],
        imageOffset: [-27, -43],
      },
      settings: {
        apiKey: "eccca977-39d5-47f7-8696-12c3d97248bd",
        lang: "ru_RU",
        coordorder: "latlong",
        version: "2.1",
      },
    };
  },
  components: { yandexMap, ymapMarker },
  async mounted() {
    await loadYmap({ ...this.settings, debug: true });
  },
};
</script>
