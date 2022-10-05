<template>
  <div id="app">
    <HelloWorld v-bind:title="message" v-bind:num="num" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      message: 'validate',
      num: 123
    }
  }
}
</script>