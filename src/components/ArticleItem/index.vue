<template>
  <div class='l-article'>
      <TagClip class="l-article__tag">
          <span>分类</span>
      </TagClip>
      <ArticleHeader :title="'这是标题'"></ArticleHeader>
      <article class="l-article__main">
        <p>
          这是文章概述这是文章概述这是文章概述这是文章概述这是文章概述
        </p>       
        <img src="../../assets/nezha.jpg" class="l-article__main-img">
      </article>
      <footer class="l-article__footer">
        <ClickMore :width="'100px'" :height="'30px'" @click.native="goArticle">
          <span>
           阅读全文>>
          </span>
        </ClickMore>
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
  beforeCreate() {
    console.log('a-beforecreated')
  },
  created(){
    console.log('a-created')
  },
  beforeMount() {
    console.log('a-beforemounted')
  },
  mounted(){
    console.log('a-mounted')
  },
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
      top: 3rem;
      font-size: .8rem;
      left: -16px;
    }
    &__main {
      max-height: 300px;
      overflow: hidden;
      text-align: center;
      font-size: .7rem;
      color: rgb(85, 85, 85);
      &-img {
        width: 90%;
        border-radius: 5px;
        margin: .5rem auto 0;
      }
    }
    &__footer {
      margin: 10px auto 0;
      span {
        font-size: .6rem;
        line-height: 30px;
      }
    }
}
</style>
