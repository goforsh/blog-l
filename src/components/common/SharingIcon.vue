<template>
    <div class="l-sharing">
        <el-tooltip class="l-info__tip" 
                    v-for="(item,index) in items" 
                    :key="index" :content="item.name" 
                    placement="top" >
            <i :class="item.icon" @click="click(item)"></i>
        </el-tooltip>
    </div>
</template>

<script>
export default {
  name: '',
  data(){
    return {}
  },
  props:['items'],
  components: {},
  created(){},
  mounted(){},
  methods: {
      click(index) {
          this.$emit('click', index)
      }
  }
}
</script>
<style lang='scss' scoped>
.l-sharing {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    i {
        color:rgba(0,0,0,0.5);
        width: 42px;
        height: 42px;
        border-radius: 50%;
        font-size: 18px;
        line-height: 42px;
        background: rgba(0,0,0,0.1);
        &:hover {
            color:#fff;
            background: #F4692C;
        }       
    }
}
</style>
