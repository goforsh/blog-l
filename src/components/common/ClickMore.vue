<template>
    <a class="l-more" 
      :style="{width:width, 
               height:height}">
      <slot></slot>
    </a>
</template>
<script>
export default {
  name: '',
  data(){
    return {}
  },
  props:['width', 'height'],
  components: {},
  beforeCreate() {
    console.log('c-beforecreated')
  },
  created(){
    console.log('c-created')
  },
  beforeMount() {
    console.log('c-beforemounted')
  },
  mounted(){
    console.log('c-mounted')
  },
  methods: {}
}
</script>
<style lang='scss' scoped>
    .l-more {
      display: block;
      text-align: center;
      cursor: pointer;
      border-radius: 5px;
      color: white;
      margin: 0 auto;
      background: #97dffd;
      -webkit-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      &:hover {
        background: #48456D;
      }
    }
</style>
