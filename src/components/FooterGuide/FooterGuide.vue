<template>
  <div>
    <!-- 因为组价名字已经表明是footer了，所以没必要再用footer标签了，可以换成div -->
    <div class="footer_guide">
      <!-- on类选择器是控制footer颜色和路由(页面)转换，所以要动态绑定 -->
      <!-- 绑定动态class的时候，可以用对象语法，:class="{on: true/false}"(对象，里面是类名和布尔值)(当类名确定，布尔值确定有或者没有这个类名时，可用/就是对象语法) -->
      <!-- $route.path可以获取到当前跳转的路由对象 -->
      <a href="javascript:;" class="guide_item" :class="{on: '/Msite'===$route.path}" @click="goTo('/Msite')">
        <span class="item_icon">
          <i class="iconfont iconU"></i>
        </span>
        <span>外卖</span>
      </a>
      <a href="javascript:;" class="guide_item" :class="{on: '/Search'===$route.path}" @click="goTo('/Search')">
        <span class="item_icon">
          <i class="iconfont iconsoushuo"></i>
        </span>
        <span>搜索</span>
      </a>
      <a href="javascript:;" class="guide_item" :class="{on: '/Order'===$route.path}" @click="goTo('/Order')">
        <span class="item_icon">
          <i class="iconfont icondingdan"></i>
        </span>
        <span>订单</span>
      </a>
      <a href="javascript:;" class="guide_item" :class="{on: '/Profile'===$route.path}" @click="goTo('/Profile')">
        <span class="item_icon">
          <i class="iconfont icongeren1"></i>
        </span>
        <span>我的</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterGuide',
  methods: {
    goTo (Path) {
      // router为VueRouter的实例，相当于一个全局的路由器对象，里面含有很多属性和子对象，例如history对象。经常用的跳转链接就可以用this.$router.push，和router-link跳转一样。。。
      // replace是更改
      this.$router.replace(Path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '~../../common/stylus/mixins.styl'
  .footer_guide  //footer
    // 使用了mixins.styl文件的变量/样式，要引入mixins.styl文件
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
