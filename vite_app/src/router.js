import { createRouter, createWebHashHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import HelloJSX from "./components/hello.jsx";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/index/taro'
    },
    {
      path: '/index/:name',
      name: 'index',
      component: HelloWorld,
      props: true
    },
    {
      path: '/jsx/:name',
      name: 'jsx',
      component: HelloJSX,
      props: true
    }
  ]
})