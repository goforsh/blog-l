<template>
  <div class='l-comment'>
      <div class="l-comment__portrait">
        <IconPortrait :url="url" :width="'50px'" :height="'50px'"></IconPortrait>  
      </div>
      <div class="l-comment__content">
        <div class="l-comment__header">
          <span class="l-comment__name">name</span>
          <el-tag type="success" size="small">萌萌哒</el-tag>
          <div class="l-comment__time">2020-2-2 22:22:22</div>
        </div>
        <div class="l-comment__body">
          哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
        </div>
      </div>
  </div>
</template>

<script>
import IconPortrait from './IconPortrait';
export default {
  name: '',
  data(){
    return {
      url:require('../../assets/logo.png')
    }
  },
  components: {
    IconPortrait
  },
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style lang='scss' scoped>
.l-comment {
  padding: 10px 0 0px;
  display: flex;
  &+& {
    border-top-color: rgba(68,68,68,.5);
    border-top-width: 1px;
    border-top-style: solid;
  }
  &__portrait {
    display: flex;
    justify-content: center;
    flex: 0 0 100px;
  }
  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;

  }
  &__header {
    flex: 0 0 auto;
  }
  &__name {
    font-size: 14px;
    margin:5px 8px 7px 0;
    color:#444;
    font-weight: bold;
  }
  &__time {
    color:#aaa;
    font-size: 12px;
  }
  &__body {
    padding: 10px 0 10px;
    flex: 1;
  }

}
</style>
