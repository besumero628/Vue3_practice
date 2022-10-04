<template>
  <div id="app">
    <HelloJSX title="OK Vue3" message="※属性で設定したメッセージ" />
  </div>
</template>

<script>
import HelloJSX from './components/hello.jsx';
export default {
  name: 'app',
  components: {
    HelloJSX
  }
}
</script>