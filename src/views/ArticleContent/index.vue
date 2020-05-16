<template>
  <div>
    <div class='l-content'>
      <ArticleHeader :title="'标题标题标题'"></ArticleHeader>
      <TagClip class="l-content__tag">
        <span>分类</span>
      </TagClip>
      <article class='l-content__article'>
        <div>这是文章{{$route.params.id}}</div>
      </article>
      <div class="l-content__footer">
        <div class="l-content__share">
          <span>分享到：</span>
          <div class="l-content__items">
            <SharingIcon :items="contact"></SharingIcon>
          </div>
        </div>
        <div class="l-content__begging">
          <el-button type="danger" @click="showBeg=!showBeg">赞赏</el-button>
          <div class="l-content__begimg">
            <img src="../../assets/logo.png" v-show="showBeg" alt="">
            <img src="../../assets/logo.png" v-show="showBeg" alt="">
          </div>
        </div>
      </div>
    </div>
    <CommentBoard :title="'评论'"></CommentBoard>
  </div>
</template>

<script>
import ArticleHeader from '../../components/common/ArticleHeader';
import TagClip from '../../components/common/TagClip';
import SharingIcon from '../../components/common/SharingIcon';
import CommentBoard from '../../components/common/CommentBoard';

export default {
  name: '',
  data(){
    return {
      contact:[
        {
            name: 'QQ',
            icon: 'fa fa-fw fa-qq',
            URL: '#QQ'
        },
        {
            name: 'WeiBo',
            icon: 'fa fa-fw fa-weibo',
            URL: '#WeiBo'
        }
      ],
      showBeg:false
    }
  },
  components: {
    ArticleHeader,
    TagClip,
    SharingIcon,
    CommentBoard
  },
  created(){},
  mounted(){
    console.log(ArticleHeader)
  },
  methods: {
    
  }
}
</script>
<style lang='scss' scoped>
.l-content {
    width: 90%;
    margin: 0 auto 10px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    transition: all .3s linear;
    &:hover {
      box-shadow:0 15px 30px rgba(0,0,0,.1);
      transform: translateY(-2px);   
    }
    &__tag {
      position: absolute;
      left: -16px;
    }
    &__article {
      font-size: 35px;
    }
    &__footer {
      padding: 0 10px 0;
    }
    &__share {
      width: 30%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      span {
        flex: 0 0 auto;
      }
    }
    &__items {
      width: 50%;
    }
    &__begging {
      text-align: center;
    }
    &__begimg {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
}
</style>
