<template>
  <section class="alert alert-primary">
    <div class="form-control-group row">
      <label class="col-12 text-left h5">Title</label>
      <input
        type="text"
        name="title"
        class="form-control col-9 ml-2"
        v-model="data.title"
        @focus="set_flg"
      />
      <button @click="find" class="btn btn-primary col-2 ml-2">find</button>
    </div>
    <div class="form-control-group mt-3">
      <label class="col-12 text-left h5">Memo</label>
      <textarea
        name="content"
        class="form-control"
        v-model="data.content"
      ></textarea>
    </div>
    <div>
      <button class="btn btn-info m-2" @click="insert">save</button>
      <transition name="del">
        <button
          class="btn btn-info m-2"
          v-if="data.sel_flg != false"
          @click="remove"
        >
          delete
        </button>
      </transition>
    </div>
    <ul class="list-group">
      <li
        v-for="item in page_items"
        @click="select(item)"
        class="list-group-item list-group-item-action text-left"
      >
        {{ item.title }} (item.created)
      </li>
    </ul>
    <hr />
    <div>
      <span class="btn btn-secondary mr-2" @click="prev">&lt; prev</span>
      <span class="btn btn-secondary mr-2" @click="prev">next &gt;</span>
    </div>
  </section>
</template>

<script>
import { ref, reactive, computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  setup(props) {
    const data = reactive({
      title: "",
      content: "",
      num_per_page: 5,
      find_flg: false,
      sel_flg: false,
      sel_item: null,
      store: useStore(),
    });
    const set_flg = () => {
      if (data.find_flg.value || data.sel_flg != false) {
        data.find_flg = false;
        data.sel_flg = false;
        data.title = "";
        data.content = "";
      }
    };
    const select = (item) => {
      data.find_flg = false;
      data.sel_flg = true;
      data.title = item.title;
      data.content = item.content;
      data.sel_item = item;
    };
    const find = () => {
      data.sel_flg = false;
      data.find_flg = true;
    };
    const insert = () => {
      data.store.commit("insert", { title: data.title, content: data.content });
      data.title = "";
      data.content = "";
    };
    const remove = () => {
      if (data.sel_flg) {
        data.store.commit("remove", data.sel_item);
        set_flg();
      }
    };
    const next = () => {
      page.value++;
    };
    const prev = () => {
      page.value--;
    };
    const memo = computed(() => data.store.state.memo);
    const page_items = computed(function () {
      if (data.find_flg) {
        var arr = [];
        var rec = data.store.state.memo;
        rec.forEach((element) => {
          console.log();
          if (
            element.title.toLowerCase().indexOf(data.title.toLowerCase()) >= 0
          ) {
            arr.push(element);
          }
        });
        return arr;
      } else {
        return data.store.state.memo.slice(
          data.num_per_page * data.store.state.page,
          data.num_per_page * (data.store.state.page + 1)
        );
      }
    });
    const page = computed({
      get: () => {
        return data.store.state.page;
      },
      set: (p) => {
        var pg =
          p > (data.store.state.memo.length - 1) / data.num_per_page
            ? Math.ceil(
                (data.store.state.memo.length - 1) / data.num_per_page
              ) - 1
            : p;
        pg = pg < 0 ? 0 : pg
        data.store.commit('set_page', pg)
      },
    });
    onMounted(()=>{
      data.store.commit('set_page', 0)
    })
    return {
      data, set_flg, select, find,
      insert, remove, next, prev,
      memo, page_items, page,
    }
  },
};
</script>
