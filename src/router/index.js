import Vue from 'vue'
import Router from 'vue-router'
import Index from "../pages/index/index.vue"
import Login from "../pages/login/login.vue"

Vue.use(Router);

let login=[
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
]

let index = [
  {
    path: '/index',
    name: 'index',
    component: Index
  }
]

let routes=[
  ...login,
  ...index,
  {
    path: '/',
    component: login
  },
]

const router = new Router({
  routes:routes,
  mode:"hash"
})

router.beforeEach((to, from, next) => {
  if (to.matched.length ===0) {                                        //如果未匹配到路由
    from.name ? next({ name:from.name }) : next('/');   //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  } else {
    next();                                                                            //如果匹配到正确跳转
  }
});


export default router
