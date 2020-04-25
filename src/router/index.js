import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

 const routes = [
    {
      path: "/",
      name: "Home",
      meta: {
        title: "主页",
        icon: "el-icon-s-home"
      },
      component: () =>
        import(/* webpackChunkName: "home" */ "../views/home")
    },
    {
      path: "/about",
      name: "About",
      meta: {
        title: "关于",
        icon: "el-icon-set-up"
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/about")
    },
    {
      path: "/category",
      name: "Category",
      meta: {
        title: "分类",
        icon: "el-icon-menu"
      },
      component: () =>
        import(/* webpackChunkName: "home" */ "../views/category")
    }
  ];
  

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
export {routes}