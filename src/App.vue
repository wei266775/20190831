<template>
  <div id="app">
    <!-- 显示路由组件，应该用router-view -->
    <router-view />
    <!-- $router是当前路由 这里是为了获取当前路由里面的showFooter来决定FooterGuide是否显示 -->
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  name: 'App',
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width: 100%
    height: 100%
    background: #f5f5f5
</style>
