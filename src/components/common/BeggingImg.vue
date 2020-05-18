<template>
    <div class="l-beg">
        <div class="l-beg__item">
            <img style="display:block" src="../../assets/pic/begAli.jpg" width="200" height="200" alt="">
            <span>
                支付宝
            </span>
        </div>
        <div class="l-beg__item">
             <img style="display:block" src="../../assets/pic/begWechat.jpg" width="200" height="200" alt="">
             <span>
                微信
            </span>
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
.l-beg {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    &__item {
        text-align: center;
        font-size: .8rem;
    }
}
</style>
