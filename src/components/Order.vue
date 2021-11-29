<template>
  <section class="order withdraw" id="send-number">
    <div class="sendmessage" v-if="this.sendmessage">
      <h1 class="sendmessage__title">
        Спасибо,<br />
        ваша заявка принята!
      </h1>
      <h2 class="sendmessage__subtitle">Мы свяжемся с вами в ближайшее время</h2>
    </div>
    <div class="custom-container">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-xl-5 col-lg-5 col-md-6 col-sm-12 left">
            <h1 class="title">Связаться с нами</h1>
            <ul>
              <li class="subtitle">+998 (99) 919 93 39</li>
              <li class="subtitle">+998 (99) 890 76 41</li>
              <li class="subtitle">+998 (99) 391 66 60</li>
            </ul>
          </div>
          <div class="col-xl-5 col-lg-6 col-md-6 col-sm-12 right">
            <h1 class="overhead">закажите звонок!</h1>
            <h2 class="title">Оставьте номер</h2>
            <form action="#" class="form" @submit.prevent="sendTelegram">
              <input
                class="form__input"
                type="text"
                name="tel"
                required=""
                placeholder="+998 ** *** ** **"
                v-model="number"
              />
              <button class="btn" type="submit">Оставить</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      token: "1701246745:AAGPcSPyau2gPqJwOQ3Q_vtwdtYq_UJapQs",
      chatId: "-1001334923180",
      number: "+998 ",
      sendmessage: false,
    };
  },
  methods: {
    sendTelegram() {
      this.sendmessage = true;
      let tegB = "******* CLIENT *******";
      let info = tegB + "%0A" + this.number + "%0A" + tegB;
      axios.post(
        `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&parse_mode=html&text=${info}`
      );
      this.number = "+998 ";
      setTimeout(() => (this.sendmessage = false), 2000);
    },
  },
};
</script>
