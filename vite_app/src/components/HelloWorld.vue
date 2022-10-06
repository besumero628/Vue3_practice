<template>
  <div class="alert alert-primary">
    <h1>{{ title }}</h1>
    <p>{{message}}</p>
    <button class="btn btn-primary m-3" v-on:click="doAction">
      {{btn}}
    </button>
    <transition name="transit">
      <p v-if="flg" class="alert alert-light h5">
        Transhition context!
      </p>
    </transition>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      title: 'Trans&Anim',
      message: 'This is Transition sample!',
      flg: true,
      btn: 'Show/Hide'
    }
  },
  methods: {
    doAction() {
      this.flg = !this.flg
    }
  }
};
</script>

<style>
pre {
  font-size: 16pt;
  line-height: 1.25;
}
div.out {
  padding: 0px;
  background-color: #eee;
  width: 300px;
  height: 200px;
}
div.mid {
  padding: 0px;
  background-color: #ddd;
  width: 200px;
  height: 170px;
}
div.in {
  padding: 0px;
  background-color: #ccc;
  width: 100px;
  height: 140px;
}
.area {
  width: 300px;
  height: 100px;
  background-color: #fff;
  padding: 10px;
  font-size: 20pt;
}
</style>