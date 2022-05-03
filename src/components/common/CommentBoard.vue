<template>
  <div class='l-board'>
      <div class="l-board__send">
        <span class="l-board__gap">{{title}}</span>
        <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            class="l-board__gap"
            v-model="textarea">
        </el-input>
        <ClickMore :width="'100px'" :height="'30px'" class="l-board__gap l-board__more">
          <span>
            确定
          </span>
        </ClickMore>
      </div>
      <div class="l-board__comments">
        <CommentItem v-for="i in 4" :key="i"></CommentItem>
      </div>
      <ClickMore :width="'500px'" :height="'30px'" class="l-board__more">
        <span>
          点击加载更多
        </span>
      </ClickMore>
  </div>
</template>

<script>
import ClickMore from "./ClickMore";
import CommentItem from "./CommentItem";
export default {
  name: '',
  data(){
    return {}
  },
  props:['title'],
  components: {
      ClickMore,
      CommentItem
  },
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style lang='scss' scoped>
.l-board {
  box-sizing: border-box;
  width: 90%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 5px;
  transition: all .3s linear;
  padding: 20px 10px;
  font-size: .8rem;
  &:hover {
    box-shadow:0 15px 30px rgba(0,0,0,.1);
    transform: translateY(-2px);   
  }
  &__gap {
    margin-bottom: 10px;
    display: block;
  }
  &__more {
    span {
      line-height: 30px;
      font-size: .8rem;
    }
  }
}
</style>
