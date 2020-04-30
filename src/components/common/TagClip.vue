<template>
  <div class='l-tag'>
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: '',
  data(){
    return {}
  },
  components: {},
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style lang='scss' scoped>
.l-tag {
    height: 38px;
    width: 100px;
    background-color: #97dffd;
    color: white;
    font-size: 1rem;
    line-height: 38px;
    text-align: center;
    position: relative;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
    &::after {
        content: '';
        width: 0;
        height: 0;
        border-width: 8px;
        border-style: solid;
        border-top-color: #48456D;
        border-bottom-color: transparent;
        border-left-color: transparent;
        border-right-color: #48456D;
        position: absolute;
        top: 38px;
        left: 0;
    }
}
</style>
