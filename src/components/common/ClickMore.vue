<template>
    <a class="l-more" 
      :style="{width:width, 
               height:height, 
               'line-height': height, 
               'font-size': parseInt(height)/38 + 'rem'}">
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
  created(){},
  mounted(){},
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
