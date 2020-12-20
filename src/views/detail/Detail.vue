<template>
    <div>
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
        <detail-header></detail-header>
        <detail-list :list="list"></detail-list>
        <div class="content"></div>
    </div>
</template>

<script>
import detailBanner from './components/banner'
import detailHeader from './components/header'
import detailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetaildata () {
      axios.get('/index-detail.json?id=' + this.$route.params.id).then(this.getDetaildataSucc)
    },
    getDetaildataSucc (res) {
      this.sightName = res.data.data.sightName
      this.bannerImg = res.data.data.bannerImg
      this.gallaryImgs = res.data.data.gallaryImgs
      this.list = res.data.data.categoryList
    }
  },
  components: {
    detailBanner,
    detailHeader,
    detailList
  },
  activated () {
    this.getDetaildata()
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
