<template>
    <div class="icons">
        <swiper :options="iconsSwiperOptions" v-if="showicon">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img-main">
                        <img :src="item.iconImgUrl" class="icon-img"/>
                    </div>
                    <div class="icon-text">{{item.imgName}}</div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      iconsSwiperOptions: {
        loop: true
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 10)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
    showicon () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
    .icons
        overflow: hidden
        height 180px
        .icon
            overflow: hidden
            width: 20%
            height 50%
            text-align: center
            float: left
            .icon-img
                width: 80%
                height: 60%
                margin-top: 6px
            .icon-text
                height: 20%
                line-height: auto
                font-size: 12px
                padding-top: 4px
</style>
