<template>
  <div class="l-home">
    <ArticleItem v-for="i in 4" :key="i" :item="i"></ArticleItem>
    <ClickMore :width="'70%'" :height="'38px'">
      <span>
        点击加载更多
      </span>
    </ClickMore>
  </div>
</template>

<script>
// @ is an alias to /src
import ArticleItem from "@/components/ArticleItem";
import ClickMore from "@/components/common/ClickMore";
export default {
  name: 'Home',
  components: {
    ArticleItem,
    ClickMore
  }
}
</script>

<style lang='scss' scoped>
  .l-home {
    span {
      font-size: .8rem;
      line-height: 38px;
    }
  }
</style>
