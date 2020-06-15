<template>
  <div class='l-sort'>
    <div class="l-sort__header">

    </div>
    <ul class="l-sort__list">
        <li v-for="(item, index) in ComLists" :key="index">
            {{item.name}}
        </li>
    </ul>
    <div class="l-sort__footer"></div>
  </div>
</template>

<script>
export default {
  name: '',
  data(){
    return {}
  },
  props:["ComLists"],
  components: {},
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style lang='scss' scoped>
.l-sort {
  width: 3rem;
  background:gainsboro;
  &__header {
    width: 18px;
    height: 18px;
    margin: 0 auto;
    background: url(../../assets/pic/icons.png) -663px -151px no-repeat;

  }
  &__list {
    background-color: #f6f9fa;
		border: 1px solid #e5e9ef;
    border-radius: 5px;
    li {
      text-align: center;
      cursor: pointer;
    }
  }
  &__footer {
    height: 48px;
    background: url(../../assets/pic/icons.png) -648px -72px no-repeat;
    border: 1px solid #e5e9ef;
    overflow: hidden;
    border-radius: 5px;
  }

}
</style>
