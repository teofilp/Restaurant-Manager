import Vue from 'vue'
import Router from 'vue-router'
import Overviews from './components/Overviews/Index';
import Products from './components/Products/Index';
import ProductCategoryList from './components/Products/ProductCategoryList';
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'overview',
    component: Overviews
  },
  {
    path: '/products',
    name: 'products',
    component: Products,
    children: [
      {
        path: 'category/:categoryName',
        name: 'categoryName',
        component: ProductCategoryList
      },
      {
        path: 'category/:categoryName/:subcategoryName',
        name: 'categoryNameSub',
        component: ProductCategoryList
      }
    ]
  }
  ]
})
