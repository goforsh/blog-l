<template>
  <div class='l-board'>
      <div class="l-board__send">
            <span>发表{{title}}</span>
            <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="textarea">
            </el-input>
            <ClickMore :width="'200px'" :height="'30px'">确定</ClickMore>
      </div>
      <span>共计{{num}}条{{title}}</span>
      <div class="l-board__comments">
        <CommentItem v-for="i in 4" :key="i"></CommentItem>
      </div>
      <ClickMore :width="'500px'" :height="'30px'">点击加载更多</ClickMore>
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
    padding: 10px;
    &:hover {
      box-shadow:0 15px 30px rgba(0,0,0,.1);
      transform: translateY(-2px);   
    }
}
</style>
