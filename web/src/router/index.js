import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Product from '../views/Product.vue'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/news',
    name: 'news',
    component: News
  },
  {
    path: '/product',
    name: 'product',
    component: Product
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

//加载进度条
router.beforeEach((to,from,next)=>{
  nProgress.start();
  next()
})

router.afterEach((to,from)=>{
  nProgress.done();
})

export default router