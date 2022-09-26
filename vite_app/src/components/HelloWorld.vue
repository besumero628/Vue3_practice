<template>
  <div class="alert alert-info">
    <h2>{{title}}</h2>
    <h2>{{message}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: String,
    message: String,
  }
}
</script>