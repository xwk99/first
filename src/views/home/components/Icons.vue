<template>
    <div class="icons">
        <swiper :options="iconsSwiperOptions">
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
  data () {
    return {
      iconsSwiperOptions: {
        loop: true
      },
      iconsList: [{
        id: '001',
        iconImgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
        imgName: '酒店'
      }, {
        id: '002',
        iconImgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
        imgName: '机票'
      }, {
        id: '003',
        iconImgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/train.png',
        imgName: '火车票'
      }, {
        id: '004',
        iconImgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/package.png',
        imgName: '度假'
      }, {
        id: '005',
        iconImgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
        imgName: '景点门票'
      }, {
        id: '006',
        iconImgUrl: 'https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png',
        imgName: '海外酒店'
      }, {
        id: '007',
        iconImgUrl: 'https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png',
        imgName: '低价机票'
      }, {
        id: '008',
        iconImgUrl: 'https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png',
        imgName: '汽车票船票'
      }, {
        id: '009',
        iconImgUrl: 'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png',
        imgName: '自由行'
      }, {
        id: '010',
        iconImgUrl: 'https://picbed.qunarzz.com/1316dc82d1ce6259686d5a68880e5a9d.png',
        imgName: '攻略'
      }, {
        id: '011',
        iconImgUrl: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png',
        imgName: '民宿客栈'
      }, {
        id: '012',
        iconImgUrl: 'https://picbed.qunarzz.com/83af731055e121a3251690b225327b56.png',
        imgName: '专车自驾'
      }, {
        id: '013',
        iconImgUrl: 'https://picbed.qunarzz.com/5b6737be49ca243072ca614f07803b83.png',
        imgName: '赚钱·信用卡'
      }, {
        id: '014',
        iconImgUrl: 'https://picbed.qunarzz.com/1e107321f5396ea4994cd832232ecf8a.png',
        imgName: '旅游团购'
      }, {
        id: '015',
        iconImgUrl: 'https://picbed.qunarzz.com/c65b3bb7571a6bd62df669213e44b84d.png',
        imgName: '一日游'
      }, {
        id: '016',
        iconImgUrl: 'https://picbed.qunarzz.com/f6bb08a239ce1b038204120a8d1e4669.png',
        imgName: '特惠酒店'
      }, {
        id: '016',
        iconImgUrl: 'https://picbed.qunarzz.com/3a08f360e958ccb2b947049387873ace.png',
        imgName: '借钱'
      }, {
        id: '016',
        iconImgUrl: 'https://picbed.qunarzz.com/19b4f6d2fabd617789fa5aad65b249da.png',
        imgName: '白金卡'
      }, {
        id: '016',
        iconImgUrl: 'https://img1.qunarzz.com/order/comp/2007/23/734c3c62d2adce02.png',
        imgName: '行程设计'
      }, {
        id: '016',
        iconImgUrl: 'https://picbed.qunarzz.com/25e3b9f17a21a6e0113c57a23ffccde4.png',
        imgName: '周边短途'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 10)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
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
            float: left
            width: 20%
            height:50%
            text-align: center
            position: relative
            .icon-img
                width: 80%
                height: auto
                margin-top: 5px
            .icon-text
                height: 25px
                line-height: 25px
                font-size: 12px
</style>
