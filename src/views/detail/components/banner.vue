<template>
    <div>
        <div class="banner" @click="handlebannerclick">
            <img class="banner-img" :src="bannerImg">
            <div class="banner-info">
                <div class="banner-title">{{sightName}}</div>
                <div class="banner-number"><span class="iconfont banner-icon">&#xe632;</span>{{gallaryImgs.length}}</div>
            </div>
        </div>
        <common-gallary v-show="gallaryshow" @close="handlegallaryclose" :img="gallaryImgs"></common-gallary>
    </div>
</template>

<script>
import commonGallary from '../../../common/gallary/Gallary'
export default {
  name: 'detailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    commonGallary
  },
  data () {
    return {
      gallaryshow: false
    }
  },
  methods: {
    handlebannerclick () {
      this.gallaryshow = true
    },
    handlegallaryclose () {
      this.gallaryshow = false
    }
  }
}
</script>

<style lang="stylus" scoped>
    .banner
        overflow: hidden
        height: 0
        padding-bottom: 55%
        position: relative
        .banner-img
            width: 100%
        .banner-info
            display: flex
            flex-direction: column
            color: white
            position: absolute
            left: 0
            bottom: 0
            right: 0
            // background: red
            line-height: .6rem
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0,0,0,0.8))
            .banner-title
                flex: 1
                font-size: .36rem
                margin : 0 .26rem
            .banner-number
                background: rgba(0, 0, 0, 0.5)
                border-radius: 0.2rem
                height: .4rem
                line-height: .4rem
                width: 1.2rem
                margin: 0 .2rem .2rem .2rem
                font-size: .24rem
                text-align: center
            .banner-icon
                font-size: .20rem
                margin-right: .16rem
</style>
