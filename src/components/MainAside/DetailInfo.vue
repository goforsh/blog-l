<template>
  <div class='l-info'>
      <div class="l-info__header">
          <img src="../../assets/logo.png" alt="">
      </div>
      <section class="l-info__detail">
          <div class="l-info__category">
              <span>28</span>
              <span>博文</span>
          </div>
          <div class="l-info__category">
              <span>28</span>
              <span>留言</span>
          </div>
      </section>
      <div class="l-info__footer">
          <el-tooltip class="l-info__tip" v-for="(item,index) in contact" :key="index" :content="item.name" placement="top" >
            <a  :href="item.URL" target="_blank" ><i :class="item.icon"></i></a>
          </el-tooltip>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  data(){
    return {
        contact:[
            {
                name: 'QQ',
                icon: 'fa fa-fw fa-qq',
                URL: ''
            },
            {
                name: 'WeChat',
                icon: 'fa fa-fw fa-wechat',
                URL: ''
            },
            {
                name: 'WeiBo',
                icon: 'fa fa-fw fa-weibo',
                URL: ''
            },
            {
                name: 'GitHub',
                icon: 'fa fa-fw fa-github',
                URL: ''
            }
        ]
    }
  },
  components: {},
  created(){},
  mounted(){},
  methods: {}
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
    justify-content: center;
    align-items: center;
    transition: all .3s linear;
    &:hover {
      box-shadow:0 15px 30px rgba(0,0,0,.1);
      transform: translateY(-2px);
    }
    &__header {
        border-radius: 5px;
        text-align: center;
        margin-bottom: 5px;
    }
    &__detail {
        display: flex;
        justify-content: center;
        margin-bottom: 15px;
    }
    &__category {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 18px;
        color: rgb(153, 153, 153);
        padding: 0 10px 0;
        span:first-child {
            color: rgb(85, 85, 85);
        }
        &:first-child {
            border-right-style: solid;
            border-right-width: 1px;
        }
    }
    &__footer {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 80%;
        a {
            text-decoration: none;
            &:hover i{
                color:#fff;
                background: #F4692C;
            }
            i {
                color:rgba(0,0,0,0.5);
                width: 42px;
                height: 42px;
                border-radius: 50%;
                font-size: 18px;
                line-height: 42px;
                background: rgba(0,0,0,0.1);
            }
        }
    }
}
</style>
