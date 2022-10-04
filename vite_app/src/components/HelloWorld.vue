<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      title: 'HelloWorld',
      message: 'This is sample message.',
    }
  },
  render() {
    return `<h1>{{ title }}</h1>
      <p>{{ message }}</p>`
  }
}
</script>