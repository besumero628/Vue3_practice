<template>
  <div id="app">
    <HelloJSX title="Composition API" msg="This is Composition API sample." />
  </div>
</template>

<script>
import HelloJSX from "./components/hello.jsx";
export default {
  name: 'app',
  components: {
    HelloJSX
  }
};
</script>