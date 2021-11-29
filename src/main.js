import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import JwPagination from 'jw-vue-pagination';
import Meta from 'vue-meta';

Vue.component('jw-pagination', JwPagination);

Vue.config.productionTip = false;


Vue.use(Meta);

new Vue({
  router,
  store,
  render: h => h(App)
  
}).$mount('#app')
