<template>
  <div class='l-info'>
      <div class="l-info__header">
          <img  v-for="(item, index) in portrait"
                :key="index"
                height="200" 
                width="200"
                v-show="item.name==current" 
                :src="item.url">
      </div>
      <div class="l-info__detail">
          <div class="l-info__category"
               v-for="(item, index) in grid"
               :key="index">
              <span>{{item.name}}</span>
              <span>{{item.num}}</span>
          </div>
      </div>
      <div class="l-info__footer">
        <SharingIcon :items="contact" @click="iconClick"></SharingIcon>
      </div>
  </div>
</template>

<script>
import SharingIcon from "../common/SharingIcon";
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
            },
            {
                name: 'GitHub',
                icon: 'fa fa-fw fa-github',
                URL: ''
            }
        ],
        portrait:[
            {
                name: 'me',
                url: require("../../assets/pic/por.jpg")
            },
            {
                name: 'QQ',
                url: require("../../assets/timg.jpeg")
            },
            {
                name: 'WeiBo',
                url: require("../../assets/logo.png")
            },
            {
                name: 'GitHub',
                url: require("../../assets/logo.png")
            }
        ],
        current: 'me',
        grid:[
            {
                name:'博文',
                num: 1
            },
            {
                name:'留言',
                num: 13
            },
            {
                name:'访客',
                num: 12
            }
        ]
    }
  },
  components: {
      SharingIcon
  },
  created(){},
  mounted(){},
  methods: {
      iconClick(item) {
          this.current = item.name
      }
  }
}
</script>
<style lang='scss' scoped>
.l-info {
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all .3s linear;
    &:hover {
      box-shadow:0 15px 30px rgba(0,0,0,.1);
      transform: translateY(-2px);
    }
    &__header {
        border-radius: 5px;
        text-align: center;
        margin-bottom: .7rem;
    }
    &__detail {
        display: flex;
        justify-content: center;
        margin-bottom: .7rem;
    }
    &__category {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: .7rem;
        color: rgb(153, 153, 153);
        padding: 0 10px 0;
        span:first-child {
            color: rgb(85, 85, 85);
        }
        &+& {
            border-left-style: solid;
            border-left-width: 1px;
        }
    }
    &__footer {
        width: 70%;
    }
}
</style>
