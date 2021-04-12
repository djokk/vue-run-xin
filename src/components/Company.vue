<template>
  <section class="company withdraw">
    <div class="custom-container">
      <div class="container">
        <div class="row justify-content-between flex-wrap">
          <div class="company__img">
            <img class="company__kompaniya" src="img/kompaniya.jpg" alt="kompaniya">
            <div class="company__block"></div>
            <img class="company__plant" src="img/plant.jpg" alt="plant">
          </div>
          <div class="company__text">
            <h1 class="overhead">О НАШЕЙ КОМПАНИИ</h1>
            <h2 class="title">Познакомьтесь с нашей компанией</h2>
            <p class="subtitle">Компания RunXin занимается на производстве исследование оборудование автоматизации для нового стенного материала уже 20 лет</p>
            <p class="undertitle">Превосходным технологиями отличными качествами комплексными услугами на продаже оборудования более чем 20 провинциях ,городах, автономных областях , и экспорт в юго-восточную Азию, Латинскую Америку...</p>
            <router-link :to="{ name: 'company' }" class="btn">о нас</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>