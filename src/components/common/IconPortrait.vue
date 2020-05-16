<template>
  <div class='l-portrait' :style="{'width':width,'height':height}">
      <img :src="url" alt="">
  </div>
</template>

<script>
export default {
  name: '',
  data(){
    return {}
  },
  props:['url', 'width', 'height'],
  components: {},
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style lang='scss' scoped>
.l-portrait {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    overflow: hidden;
    img {
        height: 100%;
        width: 100%;
        transition: .5s;
    }
    &:hover img {
        transform: scale(1.2);
        filter: contrast(110%);
    }

}
</style>
