<template>
  <div class='l-heart'>
      <div class="l-heart__heart"></div>
      <div class="l-heart__num" >
        共<count-to :start-val="0" :end-val="13600" :duration="3600"/> 个赞
      </div>
  </div>
</template>

<script>
import CountTo from 'vue-count-to'
export default {
  name: '',
  data(){
    return {}
  },
  components: {
      CountTo
  },
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style lang='scss' scoped>
$heart:30px;
$heart-color:#e74c3c;
.l-heart {
    padding: 10px;
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 5px;
    transition: all .3s linear;
    &:hover {
      box-shadow:0 15px 30px rgba(0,0,0,.1);
      transform: translateY(-2px);
      .l-heart__heart {
        animation-name: heart;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-direction: normal;
      }
    }
    &__heart {
      width: $heart;
      height: $heart;
      background: $heart-color;
      transform: rotate(45deg);
      position: relative;
      &::before {
          content: '';
          width: $heart;
          height: $heart;
          border-radius: 50%;
          background: $heart-color;
          position: absolute;
          transform: translate(-50%, 0px);
      }
      &::after {
          content: '';
          width: $heart;
          height: $heart;
          border-radius: 50%;
          background: $heart-color;
          position: absolute;
          transform: translate(0%, -50%);
      }
    }
    @keyframes heart {
      from {
          transform: scale(.3) rotate(45deg);
      }
      to {
          transform: scale(1) rotate(45deg);
      }
    }
    &__num {
      font-weight: bold;
      margin: 20px 0 20px;
      line-height: 20px;
      color: rgba(0, 0, 0, 0.45);
      font-size: 20px;
    }
}
</style>
