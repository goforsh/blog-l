<template>
  <div class='l-message'>
      <TagClip class="l-message__tag">
          <span>热门文章</span>
      </TagClip>
  </div>
</template>

<script>
import TagClip from "../common/TagClip";

export default {
  name: '',
  data(){
    return {}
  },
  components: {
      TagClip
  },
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style lang='scss' scoped>
.l-message {
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    position: relative;
    transition: all .3s linear;
    &:hover {
      box-shadow:0 15px 30px rgba(0,0,0,.1);
      transform: translateY(-2px);
    }
    &__tag {
        position: absolute;
        top: 10px;
        left: -16px;
    }
}
</style>
