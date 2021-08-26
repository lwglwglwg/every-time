import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    component: () => import('@/views/home'),
    children:[
      {
        path: '/index',
        component: () => import('@/views/index')
      },
      {
        path: '/class',
        component: () => import('@/views/class')
      },
      {
        path: '/zx',
        component: () => import('@/views/zx')
      },
      {
        path: '/books',
        component: () => import('@/views/books')
      },
      {
        path: '/my',
        component: () => import('@/views/my')
      },
    ]
  },
 {
  path: '/login',
  component: () => import('@/views/login'),
 },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;