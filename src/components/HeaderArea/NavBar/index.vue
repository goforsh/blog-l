<template>
  <div class=''>
     <el-menu
      class="l-nav"
      router
      mode="horizontal"
      text-color="#fff"
      active-text-color="#ffd04b">
      <NavItem v-for="(route, index) in navItems" :route="route" :key="index"></NavItem>
      <a class="l-nav__user">登录</a>
      <span class="l-nav__split"> | </span>
      <a class="l-nav__user">注册</a>
    </el-menu>
    

  </div>
</template>

<script>
import {routes} from '@/router'
import {mapState, mapMutations} from 'vuex'
import NavItem from './NavItem'
export default {
  name: '',
  data(){
    return {}
  },
  components: {
    NavItem
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
::v-deep 
  .el-menu {
    border-bottom: none !important;
    background-color: rgba(84,92,100,.7) !important;
    &.el-menu--horizontal {

    }
    &::after {
    }
    .el-menu-item {
      height: 38px;
      line-height: 38px;
      background-color: transparent !important;
      &:hover {
        background: rgb(88, 96, 104) !important;
      }
    }
    .is-active {
      background-color: rgb(74, 76, 88)!important;
    }
  }
.l-nav {
  display: flex;
  // justify-content: center;
  padding: 0 100px 0;
  &__user, &__split {
    color: white;
    font-size: 14px;
    line-height: 38px;
  }
  &__user {
    cursor: pointer;
    text-decoration: none;
    &:first-of-type {
      margin-left: auto;
    }
    &:hover {
      color: #ffd04b;
    }
  }
  &__split {
    margin: 0 5px 0;
  }
  
  
}
</style>
