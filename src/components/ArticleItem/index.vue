<template>
  <div class='l-article'>
      <TagClip class="l-article__tag">
          <span>分类</span>
      </TagClip>
      <header class="l-article__header">
        <h1>这是标题
          <small v-if="false">这是副标题</small>
        </h1>
        <h2>
          <i class="el-icon-user-solid"></i> 发表于
          <i class="el-icon-time"></i> 2020
          <i class="el-icon-view"></i> 0次围观
          <i class="el-icon-thumb"></i> 0次点赞
          <i class="el-icon-star-on"></i> 0次收藏
        </h2>
      </header>
      <article class="l-article__main">
        <p>
          这是文章概述
        </p>
        <img src="../../assets/nezha.jpg" class="l-article__main-img">
      </article>
      <footer class="l-article__footer">
        <ClickMore :width="'80px'" :height="'30px'">阅读全文>></ClickMore>
      </footer>
  </div>
</template>

<script>
import TagClip from "../common/TagClip";
import ClickMore from "../common/ClickMore";
export default {
  name: '',
  data(){
    return {}
  },
  components: {
    TagClip,
    ClickMore
  },
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style lang='scss' scoped>
.l-article {
    width: 90%;
    margin: 0px auto 10px;
    background-color: #fff;
    position: relative;
    border-radius: 5px;
    padding: 10px;
    transition: all .3s linear;
    &:hover {
      box-shadow:0 15px 30px rgba(0,0,0,.1);
      transform: translateY(-2px);
    }
    &__tag {
      position: absolute;
      top: 30px;
      left: -16px;
    }
    &__header {
      text-align: center;
      color:#444;
      h1 {
        font-weight: 700;
        font-size: 25px;
      }
      h2 {
        color: rgb(85, 85, 85);
        font-size: 14px;
      }
    }
    &__main {
      max-height: 300px;
      overflow: hidden;
      text-align: center;
      &-img {
        width: 90%;
        border-radius: 5px;
      }
    }
    &__footer {
      margin: 10px auto 0;
    }
}
</style>
