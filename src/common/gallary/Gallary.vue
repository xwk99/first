<template>
    <div class="container" @click="handlegallaryclick">
        <div class="wrapper">
            <swiper ref="mySwiper" :options="swiperOptions">
                <swiper-slide v-for="(item, index) of img" :key="index">
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
    gallaryshow: Boolean,
    img: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
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
        z-index: 9
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
