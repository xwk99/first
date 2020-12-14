<template>
    <div class="wrapper">
        <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="item of swiperList" :key="item.id">
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
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '001',
        imgUrl: 'https://imgs.qunarzz.com/p/p66/201304/17/384810d022dd28f793835fbb.jpg_256x160_6a7ec251.jpg',
        imgContnet: '三亚'
      }, {
        id: '002',
        imgUrl: 'https://imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg',
        imgContnet: '泰国'
      }, {
        id: '003',
        imgUrl: 'https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg',
        imgContnet: '丽江'
      }, {
        id: '004',
        imgUrl: 'https://imgs.qunarzz.com/p/p29/201302/28/3d20251a1b60350a93835fbb.jpg_256x160_e8f468b0.jpg',
        imgContnet: '日本'
      }]
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
