import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import CompanyInfoPage from '@/pages/CompanyInfoPage.vue';
import ProductsPage from '@/pages/ProductsPage.vue';
import ProductsItemPage from '@/pages/ProductsItemPage.vue';
import NotFound from '@/pages/NotFound.vue';

Vue.use(VueRouter)

const routes = [
  {
    name: 'main',
    component: MainPage,
    path: '/',
  },
  {
    name: 'company',
    component: CompanyInfoPage,
    path: '/company',
  },
  {
    name: 'productsPage',
    component: ProductsPage,
    path: '/product',
  },
  {
    name: 'productsItemPage',
    component: ProductsItemPage,
    path: '/product/:id',
  },
  {
    name: 'NotFound',
    component: NotFound,
    path: '*',
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    // return desired position
    if(to.hash) {
      return {
        selector: to.hash
      };
    }
    if(savedPosition) {
      return savedPosition;
    }
    return { x:0, y:0 };
  }
})

export default router
