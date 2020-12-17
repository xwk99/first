<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音"/>
        </div>
        <div class="search-content" ref="search">
            <ul>
                <li class="search-item" v-for="item of list" :key="item.id">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: []
    }
  },
  watch: {
    keyword () {
      if (!this.keyword) {
        this.list = []
        return
      }
      const result = []
      for (const i in this.cities) {
        this.cities[i].forEach((value) => {
          if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
            result.push(value)
          }
        })
      }
      this.list = result
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/variable.styl'
    .search
        height: .90rem
        line-height: .9rem
        background: $bgcolor
        text-align: center
        position: fixed
        top: 0.88rem
        left: 0
        right: 0
        z-index: 9
        .search-input
            width: 90%
            height: .65rem
            border: transparent solid
            border-radius: 6px
            padding: 0 .1rem
            margin: 0 3%
    .search-content
        position: absolute
        top: 2rem
        bottom: 0
        right: 0
        left: 0
        overflow: hidden
        z-index: 1
        .search-item
            color: #666
            line-height: .62rem
            padding-left: .2rem
            background: #fff
</style>
