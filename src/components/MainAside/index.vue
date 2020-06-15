<template>
  <div class='l-aside'>
    <div class='l-aside--sticky'>
      <transition-group name="flip-list">
        <component v-for="item in compoList"
                  :key="item.name"
                  class='l-aside__gap'
                  :is="item.component"></component>
      </transition-group>
            <!-- <transition-group name="flip-list" tag="ul">
              <li v-for="item in list" :key="item">{{item}}</li>
      </transition-group>

      <button @click="shuffle">123</button> -->

   
      <!-- <div ref="tttt" style="width:100px;height:100px;color:red;background:black;overflow:scroll">
        <div style="width:10px;height:1000px;color:red;background:red;" ref="ttt">
          123
        </div>
      </div> -->
    </div>
    <SortComponents 
      v-show="isShow"
      :ComLists="compoList"
      class="l-aside__sort"
      ref="sort"
      >
    </SortComponents>
  </div>
</template>

<script>
import DetailInfo from "./DetailInfo";
import HotMessage from "./HotMessage";
import HeartBeats from './HeartBeats';
import SortComponents from '../../components/common/SortComponents';
import Sortable from 'sortablejs'

export default {
  name: '',
  data(){
    return {
      compoList:[
        {
          name: "简介",
          component: "DetailInfo"
        },
        {
          name: "统计",
          component: "HeartBeats"
        },
        {
          name: "热门",
          component: "HotMessage"
        }
      ],
      list:[1,2,3,4,5,6],
      isShow: false,
      sortable :null
    }
  },
  components: {
    DetailInfo,
    HotMessage,
    HeartBeats,
    SortComponents
  },
  created(){},
  mounted(){
    // let div = document.querySelector('.l-aside__gap')

    window.addEventListener('scroll',()=>{
      if (document.documentElement.scrollTop > 600) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    })
    this.$nextTick(() => {
        this.setSort()
    })
    // let el = this.$refs.tttt
    // let ell = this.$refs.ttt
    // console.log(el)
    // el.addEventListener("scroll", () => {
    //   console.log(el.scrollTop)
    //   console.log(ell.scrollHeight,'ss')
    // })
  },
  destroyed() {
   // window.removeEventListener('scroll')//无法移除
  },
  methods: {
    shuffle(){
      this.list.sort(()=> Math.random() - 0.5)
    },
    setSort() {
      const el = document.querySelector('.l-aside__sort > ul')
      console.log(el,'el')

      this.sortable = Sortable.create(el, {
        ghostClass: 'sortable-ghost', // Class name for the drop placeholder,
        // setData: function(dataTransfer) {
        //   // to avoid Firefox bug
        //   // Detail see : https://github.com/RubaXa/Sortable/issues/1012
        //   dataTransfer.setData('Text', '')
        // },
        onEnd: evt => {
          const targetRow = this.compoList.splice(evt.oldIndex, 1)[0]
          this.compoList.splice(evt.newIndex, 0, targetRow)
          let arr = JSON.parse(JSON.stringify(this.compoList))
          this.compoList = []
          this.$nextTick(()=>{
            this.compoList = arr
          })


          // for show the changes, you can delete in you code
          
        }
      })
    }
  }
}
</script>
<style>
.sortable-ghost{
  opacity: .8;
  color: #fff!important;
  background: red!important;
}
</style>
<style lang='scss' scoped>
.flip-list-move {
  transition: transform 1s;
}
.l-aside{
  &__sort {
    position: fixed;
    top: 60vh;
    left: 5vw;
  }
  &--sticky {
    position: sticky;
    top: 0px;
  }
  &__gap {
    margin-bottom: 10px;
  }
}
</style>
