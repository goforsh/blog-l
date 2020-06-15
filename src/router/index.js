import Vue from 'vue'
import VueRouter from 'vue-router'
import LayOut from '../LayOut';

Vue.use(VueRouter)

 const routes = [
    {
      path: "/",
      redirect: "/home",
      component: LayOut,
      children: [
        {
          path: "home",
          name: "Home",
          meta: {
            title: "主页",
            icon: "el-icon-s-home"
          },
          component: () =>
            import(/* webpackChunkName: "home" */ "../views/home")
        },
      ]
    },
    {
      path: "/about",
      component: LayOut,
      children: [
        {
          path: "",
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
      ]
    },
    {
      path: "/begging",
      component: LayOut,
      children: [
        {
          path: "",
          name: "Begging",
          meta: {
            title: "赞赏",
            icon: "el-icon-tableware"
          },
          component: () =>
            import(/* webpackChunkName: "BeggingBowl" */ "../views/BeggingBowl")
        },
      ]
    },
    {
      path: "/message",
      component: LayOut,
      children: [
        {
          path: "",
          name: "Message",
          meta: {
            title: "留言板",
            icon: "el-icon-s-comment"
          },
          component: () =>
            import(/* webpackChunkName: "MessageBoard" */ "../views/MessageBoard")
        },
      ]
    },
    {
      path: "/article",
      component: LayOut,
      children: [
        {
          path: ":id",
          name: "Article",
          component: () =>
            import(/* webpackChunkName: "ArticleContent" */ "../views/ArticleContent")
        },
      ]
    },
    {
      path: "*",
      redirect: "/"
    }

  ];
  

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savePosition) { // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
    if (savePosition) {
      return savePosition;
    } else {
      var top;
      if (window.innerWidth >= 700) {
        top = 562
      } else {
        top = 267
      }
      return {
        x: 0,
        y: top
      }
    }
  },
  routes
})

export default router
export {routes}