<template>
    <div>
        <router-link tag="div" to="/" class="abs"><span class="iconfont iconfont-abs" v-show="absshow">&#xe624;</span></router-link>
        <div class="fixed" v-show="!absshow" :style="opacityStyle">
            <div><router-link tag="span" to="/" class="iconfont iconfont-fixed">&#xe624;</router-link>景点详情</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'detailHeader',
  data () {
    return {
      absshow: true,
      opacityStyle: 0
    }
  },
  methods: {
    handleScroll () {
      const scroll = document.documentElement.scrollTop
      if (scroll > 60) {
        var opacity = scroll / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.absshow = false
      } else {
        this.absshow = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/variable.styl'
    .abs
        position: absolute
        left: .2rem
        top: .2rem
        height: .8rem
        width: .8rem
        line-height: .8rem
        text-align: center
        border-radius: .4rem
        background: rgba(0, 0, 0, .6)
        .iconfont-abs
            color: #fff
    .fixed
        position: fixed
        top: 0
        left: 0
        right: 0
        height: 1rem
        background-color: $bgcolor
        text-align: center
        line-height: 1rem
        .iconfont-fixed
            position: absolute
            left: 0
            top: 0
            font-size: .4rem
            width: .64rem
</style>
