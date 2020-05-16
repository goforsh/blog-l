<template>
<div>
  <div class='l-begging'>
      category
  </div>
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
.l-begging {
  width: 90%;
  margin: 0 auto 10px;
  background-color: #fff;
  border-radius: 5px;
  transition: all .3s linear;
  position: relative;
  &:hover {
      box-shadow:0 15px 30px rgba(0,0,0,.1);
      transform: translateY(-2px);   
  }
}
</style>
