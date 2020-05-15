<template>
  <div class='l-footer'>
    <p class="l-footer__header">
      Vue & XXX
    </p>
    <PointsWave :color="0x97dffd" :waveHeight="250"></PointsWave>
  </div>
</template>

<script>
import PointsWave from '../common/PointsWave';
export default {
  name: '',
  data(){
    return {}
  },
  components: {
    PointsWave
  },
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style lang='scss' scoped>
.l-footer {
  width: 100%;
  background-color: rgb(60, 68, 90);
  height: 250px;
  margin-top: 100px;
  position: relative;
  &__header {
    font-size: 18px;
    text-align: center;
    white-space: pre;
    position: absolute;
    color: gainsboro;
    left: 50%;
    top: 10px;
    transform: translateX(-50%);
  }
}
</style>
