<template>
  <div class='l-bg'>
    <HeaderArea class="l-bg__header"></HeaderArea>
    <section class="l-bg__middle">
      <router-view class="l-bg__middle-main"></router-view>
      <MainAside class="l-bg__middle-side"></MainAside>
    </section>
    <FooterArea></FooterArea>
  </div>
</template>

<script>
import HeaderArea from "@/components/HeaderArea";
import MainAside from "@/components/MainAside";
import FooterArea from "@/components/FooterArea";
export default {
  name: '',
  data(){
    return {}
  },
  components: {
    HeaderArea,
    MainAside,
    FooterArea
  },
  created(){},
  mounted(){
    // let div = document.querySelector('.l-bg__middle-side')

    // window.addEventListener('scroll',()=>{
    //   if (document.documentElement.scrollTop >= 600) {
    //     div.style.position = 'fixed'
    //     div.style.top = document.documentElement.scrollTop - 600 + 'px'
    //   }
    //   if (document.documentElement.scrollTop < 600) {
    //     div.style.position = 'static'
    //   }
    // })
  },
  methods: {}
}
</script>
<style lang='scss' scoped>
  .l-bg {
    display: flex;
    flex-direction: column;
    background-color: gainsboro;
    align-items: center;
    &__header {
      flex: 0 0 600px;
    }
    &__middle {
      flex: 1;
      display: flex;
      padding: 0 30px 0;
      width: 80%;
      &-main {
        flex: 1;
      }
      &-side {
        flex: 0 0 300px;
      }
    }
  }
</style>
