<template>
  <div class='l-article'>
      <TagClip class="l-article__tag">
          <span>分类</span>
      </TagClip>
      <ArticleHeader :title="'这是标题'"></ArticleHeader>
      <article class="l-article__main">
        <p>
          这是文章概述
        </p>
        <img src="../../assets/nezha.jpg" class="l-article__main-img">
      </article>
      <footer class="l-article__footer">
        <ClickMore :width="'80px'" :height="'30px'" @click.native="goArticle">阅读全文>></ClickMore>
      </footer>
  </div>
</template>

<script>
import TagClip from "../common/TagClip";
import ClickMore from "../common/ClickMore";
import ArticleHeader from '../common/ArticleHeader';
export default {
  name: '',
  data(){
    return {}
  },
  props:['item'],
  components: {
    TagClip,
    ClickMore,
    ArticleHeader
  },
  created(){},
  mounted(){},
  methods: {
    goArticle() {
      console.log(1)
      this.$router.push({
        name:'Article',
        params:{
          id: this.item
        }
      })
    }
  }
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
