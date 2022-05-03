<script>
Promise.allSettled0 = async ps => {
  let result = [];
  for (const p of ps) {
    let value, error;
    try {
      // 因为 promise 在刚生成时就会被运行, 所以不用担心这样不会并发运行...
      value = await p;
    } catch (e) {
      error = e;
    }
    result.push({ value, error });
  }
  return result;
};

// Promise.allSettled = function(arr) {
//   return new Promise((resolve, reject) => {
//     let res = []
//     let flag = 0
//     for (let i = 0; i < arr.lenght; ++i) {
//       arr[i].then(response => {
//         res[i] = response
//       }).catch(error => {
//         res[i] = error
//       }).finally(() => {
//         flag++
//         if (flag == arr.length) {
//           resolve(res)
//         }
//       })
//     }
//   })

Promise.allSettled1 = ps => {
  let lenght = ps.length;
  let settled_length = 0;
  let result = [];
  return new Promise(res => {
    const try_end = () => {
      if (settled_length === length) {
        res(result);
      }
    };
    ps.forEach((p, idx) => {
      p.then(
        v => {
          result[idx] = { value: v };
          settled_length++;
          try_end();
        },
        e => {
          result[idx] = { error: e };
          settled_length++;
          try_end();
        },
      );
    });
  });
};
</script>





<template>
  <div>
    <!-- 方案 1 -->
    <ul>
      <li v-for="(item, idx) in list" :key="item.id">
        <span>{{ item.name }}</span>
        <button
          v-if="
            loadings.findIndex(it => it.id === item.id && it.is_deleting) > -1
          "
          @click="del(item, idx)"
        >
          删除
        </button>
        <button v-else>...</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    list: Array,
  },
  data() {
    return {
      loadings: this.list.map(item => ({ id: item.id, is_deleting: false })),
    };
  },
  methods: {
    async del(item, idx) {
      try {
        const loading = this.loadings[idx];
        loading.is_deleting = true;
        await ajax(item.id);
        this.$emit('on_delete_item', item.id);
      } finally {
        loading.is_deleting = false;
      }
    },
  },
  watch: {
    list(nv, ov) {
      this.loadings = nv.map(item => {
        const is_deleting = this.loadings.find(
          it => it.id === item.id && it.is_deleting,
        );
        return { id: item.id, is_deleting: !!is_deleting };
      });
    },
    // 或者另一种写法
    list(nv, ov) {
      const loadings = [];
      NV: for (const item of nv) {
        LOADINGS: for (const loading of this.loadings) {
          if (loading.id === item.id) {
            loadings.push({ id: item.id, is_deleting: loading.is_deleting });
            break LOADINGS;
          }
        }
        loadings.push({ id: item.id, is_deleting: false });
      }
      this.loadings = loadings;
    },
  },
};
</script>





<template>
  <div>
    <!-- 方案 2 -->
    <ul>
      <li v-for="item in list" :key="item.id">
        <span>{{ item.name }}</span>
        <button v-if="loadings[item.id]" @click="del(item)">
          删除
        </button>
        <button v-else>...</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    list: Array,
  },
  data() {
    return {
      loadings: {},
    };
  },
  methods: {
    async del(item, idx) {
      try {
        this.loadings[item.id] = true;
        await ajax(item.id);
        this.$emit('on_delete_item', item.id);
      } finally {
        this.loadings[item.id] = false;
      }
    },
  },
};
</script>





<template>
  <div>
    <!-- 方案 3 -->
    <ul>
      <li v-for="item in list" :key="item.id">
        <span>{{ item.name }}</span>
        <Button
          :item="item"
          @on_delete_item="$emit('on_delete_item', item)"
        ></Button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    list: Array,
  },
  methods: {
    async del(item, idx) {
      try {
        this.loadings[item.id] = true;
        await ajax(item.id);
        this.$emit('on_delete_item', item.id);
      } finally {
        this.loadings[item.id] = false;
      }
    },
  },
};
</script>

<template>
  <div>
    <!-- 方案 3 Button -->
    <button v-if="loading" @click="del(item)">
      删除
    </button>
    <button v-else>...</button>
  </div>
</template>
<script>
export default {
  props: {
    item: Object,
  },
  data() {
    return { loading: false };
  },
  methods: {
    async del(item) {
      try {
        this.loading = true;
        await ajax(item.id);
        this.$emit('on_delete_item', item.id);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
