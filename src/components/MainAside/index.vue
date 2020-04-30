<template>
  <div class='l-aside'>
    <DetailInfo class='l-aside__detail'></DetailInfo>
    <HotMessage></HotMessage>
  </div>
</template>

<script>
import DetailInfo from "./DetailInfo";
import HotMessage from "./HotMessage";
export default {
  name: '',
  data(){
    return {}
  },
  components: {
    DetailInfo,
    HotMessage
  },
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style lang='scss' scoped>
.l-aside{
  &__detail {
    margin-bottom: 10px;
  }
}
</style>
