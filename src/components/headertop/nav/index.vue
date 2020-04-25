<template>
  <div class=''>
     <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      router
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      mode="horizontal"
      text-color="#fff"
      active-text-color="#ffd04b">
      <item v-for="(route, index) in navItems" :route="route" :key="index"> </item>
    </el-menu>

  </div>
</template>

<script>
import {routes} from '@/router'
import {mapState, mapMutations} from 'vuex'
import item from './item'
export default {
  name: '',
  data(){
    return {}
  },
  components: {
    item
  },
  created(){
    this.getRoutes(routes)
  },
  mounted(){},
  computed:{
    ...mapState(['navItems'])
  },
  methods: {
    ...mapMutations(['getRoutes'])
  }
}
</script>
<style lang='scss' scoped>
</style>
