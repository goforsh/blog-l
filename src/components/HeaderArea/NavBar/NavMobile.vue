<template>
  <div class='l-navmobile'>
    <router-link v-for="(route, index) in navItems" :key=index :to="route.path" class="l-navmobile__item">
      <i :class="route.meta.icon"></i>
      <span>{{route.meta.title}}</span>
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: '',
  data(){
    return {}
  },
  components: {},
  created(){},
  mounted(){},
  methods: {},
  computed:{
      ...mapState(['navItems'])
  }
}
</script>
<style lang='scss' scoped>
.l-navmobile {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    &__item {
        padding: 5px;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        background-color: rgba(84,92,100,.9);
        position: relative;
        &+& {
            &::before {
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                content: '';
                width: 2px;
                height: 50%;
                background-color: #fff;
            }
            // border-left: solid 1px gainsboro;
        }
    }
}
</style>
