import { createRouter, createWebHashHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import HelloJSX from "./components/hello.jsx";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      components: {
        default: HelloWorld,
        first: HelloWorld,
        second: HelloJSX
      }
    },
    {
      path: '/jsx',
      name: 'jsx',
      components: {
        default: HelloJSX,
        first: HelloJSX,
        second: HelloWorld
      },
    },
  ]
})