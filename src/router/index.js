/*
  路由器对象模板
 */
import Vue from 'vue'
// 引入vue-router变量
import VueRouter from 'vue-router'
// 引入组件
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

// 声明使用路由
Vue.use(VueRouter)

// VueRouter是一个构造函数
export default new VueRouter({
  // 所有路由，所以用routes
  routes: [{
    // 路由地址,最好是小写
    path: '/msite',
    // 路由跳转的组件
    component: Msite,
    // 在配置路由的时候，除了path，还有一个meta(源数据)可以去配置(说白了，就是给这个路由添加一个属性，就叫meta，在通过$route就能得到)
    // meta是本来就有的，是个空对象，如果不写，返回的就是false
    meta: {
      showFooter: true
    }
  }, {
    path: '/search',
    component: Search,
    meta: {
      showFooter: true
    }
  }, {
    path: '/order',
    component: Order,
    meta: {
      showFooter: true
    }
  }, {
    path: '/profile',
    component: Profile,
    meta: {
      showFooter: true
    }
  }, {
    path: '/',
    // 路由重定向
    redirect: '/Msite'
  }, {
    path: '/login',
    component: Login
  }]
})
