<template>
<div>
  <div class='l-begging'>
    <img src="../../assets/pic/beg.jpg" class="l-begging__header" alt="">
    <BeggingImg></BeggingImg>
  </div>
</div>
</template>

<script>
import BeggingImg from '../../components/common/BeggingImg';
export default {
  name: '',
  data(){
    return {}
  },
  components: {
    BeggingImg
  },
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
  box-sizing: border-box;
  padding: 10px;
  &:hover {
      box-shadow:0 15px 30px rgba(0,0,0,.1);
      transform: translateY(-2px);   
  }
  &__header {
    width: 100%;
    height: 400px;
  }
  
}
</style>
