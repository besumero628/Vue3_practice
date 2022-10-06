<template>
  <div class="alert alert-primary">
    <h1>{{ title }}</h1>
    <p>{{message}}</p>
    <button class="btn btn-primary m-3" v-on:click="doAction">
      Show/Hide
    </button>
    <transition name="transit">
      <p v-if="flg" class="trans">Transition!</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      title: 'Trans&Anim',
      message: 'Transition Sample!',
      flg: true,
      btn: 'Hide'
    }
  },
  methods: {
    doAction() {
      this.flg = !this.flg;
    }
  }
};
</script>

<style>
.trans {
  background-color: black;
  color: white;
  padding: 10px;
  font-size: 20pt;
}

.transit-enter-active {
  transition: 1.0s;
}

.transit-leave-active {
  transition: 1.0s;
  opacity: 0.5;
}

.transit-enter, .transit-leave-to {
  transform: rotateZ(360deg);
  opacity: 0.1;
}

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