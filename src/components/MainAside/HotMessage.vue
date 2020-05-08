<template>
  <div class='l-message'>
    <TagClip class="l-message__tag">
        <span>热门文章</span>
    </TagClip>
    <ul class="l-message__list">
      <li v-for="(item, index) in article"
          :key="index">
         <router-link :to="item.url"
                      class="l-message__item">
            <span>{{item.name}}</span>
            <span>——{{item.num}}次点击</span>
          </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import TagClip from "../common/TagClip";

export default {
  name: '',
  data(){
    return {
      article:[
        {
          name: '杰杰娃SB',
          num: '250',
          url: '/article',
          id: 0
        },
        {
          name: '当当娃SB',
          num: '250',
          url: '',
          id: 1
        }
      ]
    }
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
    &__list {
      padding: 48px 10px 10px;
    }
    &__item {
      text-decoration: none;
      font-size: 15px;
      color: rgb(59, 58, 58);
      span:last-child {
        font-size: 12px;
        color: rgb(133, 129, 129);
      }
    }
}
</style>
