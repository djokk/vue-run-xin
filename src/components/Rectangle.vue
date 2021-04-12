<template>
  <div class="rectangle">
    <div class="custom-container">
      <div class="container d-flex justify-content-between">
        <div class="col-xl-5 d-flex align-items-center">
          <h1 class="title">{{ text }}</h1>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
          <img class="rectangle-img" :src="img" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['img', 'text'],
}
</script>