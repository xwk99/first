<template>
    <div class="wrapper">
        <swiper ref="mySwiper" :options="swiperOptions" v-if="showSwiper">
        <swiper-slide v-for="item of list" :key="item.id">
          <div>
              <img class="swiper-img" :src="item.imgUrl" />
              <div class="content-position">
              <div class="img-content">{{item.imgContnet}}</div>
              </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background: white
    .wrapper
        width:100%
        overflow: hidden
        height: 160px
        .swiper-img
          width: 100%
          height: 160px
        .content-position
          height: 50px
          width: 104px
          position: absolute
          bottom: 40px
          left: 50%
          margin-left: -52px
          text-align: center
          background: #00000099
          .img-content
            line-height: 50px
            color: white
</style>
