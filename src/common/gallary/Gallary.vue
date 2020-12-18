<template>
    <div class="container" @click="handlegallaryclick">
        <div class="wrapper">
            <swiper ref="mySwiper" :options="swiperOptions">
                <swiper-slide v-for="(item, index) of imglist" :key="index">
                    <img class="swiper-img" :src="item" />
                </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
  name: 'commonGallary',
  props: {
    gallaryshow: Boolean
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      },
      imglist: ['http://img1.qunarzz.com/sight/p0/1603/4e/4e7a704010c95d2490.water.jpg_350x240_28f4063c.jpg', 'http://img1.qunarzz.com/sight/p0/201306/26/04ce17682ab714e2c8d65eac.jpg_350x240_ec496d78.jpg']
    }
  },
  methods: {
    handlegallaryclick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow inherit
    .container
        position: fixed
        left: 0
        right: 0
        top: 0
        bottom: 0
        display: flex
        background: black
        justify-content: center
        flex-direction: column
        .wrapper
           height 0
           width 100%
           padding-bottom: 100%
           .swiper-img
                width: 100%
            .swiper-pagination
                color: white
                bottom: -1rem
</style>
