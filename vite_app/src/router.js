import { createRouter, createWebHashHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import HelloJSX from "./components/hello.jsx";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: HelloWorld,
    },
    {
      path: '/jsx',
      name: 'jsx',
      component: HelloJSX,
    },
  ]
})