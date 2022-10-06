<template>
  <div class="alert alert-primary">
    <h1>{{ title }}</h1>
    <p>{{message}}</p>
    <button class="btn btn-primary m-3" v-on:click="doAction">
      {{btn}}
    </button>
    <transition name="transit"
      v-on:before-enter="startAction"
      v-on:before-leave="startAction"
      v-on:after-enter="endAction"
      v-on:after-leave="endAction">
      <p v-if="flg" class="alert p-3 h5 trans">
        Transition context!
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
      btn: 'Hide'
    }
  },
  methods: {
    doAction() {
      this.flg = !this.flg
    },
    startAction: function () {
      if (this.flg) {
        this.message = '現れます・・・'
      } else {
        this.message = '消えます・・・'
      }
      },
      endAction: function () {
        if (this.flg) {
          this.btn = 'Hide'
          this.message = '現れました。'
        } else {
          this.btn = 'Show'
          this.message = '消えました。'
        }
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
  transition: opacity 0.5s;
}

.transit-leave-active {
  transition: opacity 5.0s;
}

.transit-enter {
  opacity: 0;
}

.transit-enter-from {
  opacity: 0;
}

.transit-enter-to {
  opacity: 1.0;
}

.transit-leave {
  opacity: 1.0;
}

.transit-leave-to {
  opacity: 0;
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