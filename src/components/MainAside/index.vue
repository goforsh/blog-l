<template>
  <div class='l-aside'>
    <div class='l-aside--sticky'>
      <DetailInfo ref="ddd" class='l-aside__gap'></DetailInfo>
      <HeartBeats ref="hhh" class='l-aside__gap'></HeartBeats>
      <HotMessage></HotMessage>
    </div>
  </div>
</template>

<script>
import DetailInfo from "./DetailInfo";
import HotMessage from "./HotMessage";
import HeartBeats from './HeartBeats';
export default {
  name: '',
  data(){
    return {

    }
  },
  components: {
    DetailInfo,
    HotMessage,
    HeartBeats
  },
  created(){},
  mounted(){
    // let div = document.querySelector('.l-aside__gap')

    // window.addEventListener('scroll',()=>{
    //   if (document.documentElement.scrollTop >= 600) {
    //     div.style.position = 'sticky'
    //     div.style.top = 0
    //   }
    //   if (document.documentElement.scrollTop < 600) {
    //     div.style.position = 'static'
    //   }
    // })
    this.$refs.hhh.$mount(this.$refs.ddd.$el)
    
  },
  methods: {}
}
</script>
<style lang='scss' scoped>
.l-aside{
  &--sticky {
    position: sticky;
    top: 0px;
  }
  &__gap {
    margin-bottom: 10px;
  }
}
</style>
