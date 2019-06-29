import Vue from 'vue'
import Router from 'vue-router'
import Overviews from './components/Overviews/Index';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'overview',
    component: Overviews
  }]
})
