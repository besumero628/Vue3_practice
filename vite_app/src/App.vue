<template>
  <div id="app">
    <HelloWorld title="slot">
      <p>Begin!..</p>
      <template v-slot:first>
        ***First message***
      </template>
      <p>...Middle..</p>
      <template v-slot:second>
        ***Second message***
      </template>
      <p>..End</p>
      <template v-slot:third>
        ***Third message***
      </template>
    </HelloWorld>
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
      num: 'abc'
    }
  }
}
</script>