<template>
    <div class="l-article__header">
        <h1>{{title}}
          <small v-if="subtitle">{{subtitle}}</small>
        </h1>
        <h2>
          <i class="el-icon-user-solid"></i> 发表于
          <i class="el-icon-time"></i> 2020
          <i class="el-icon-view"></i> 0次围观
          <i class="el-icon-thumb"></i> 0次点赞
          <i class="el-icon-star-on"></i> 0次收藏
        </h2>
    </div>
</template>

<script>
export default {
  name: '',
  props:['title','subtitle'],
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
.l-article__header {
      text-align: center;
      color:#444;
      margin: .5rem auto 2rem;
      h1 {
        font-weight: 700;
        font-size: 1rem;
        margin-bottom: .5rem;
      }
      h2 {
        color: rgb(85, 85, 85);
        font-size: .5rem;
      }
    }
</style>
