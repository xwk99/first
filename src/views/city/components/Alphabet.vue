<template>
    <div>
        <ul class="alphabet">
            <li class="alphabet-list" v-for="(item, key) of list" :key="key" @click="handleclick">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  methods: {
    handleclick (e) {
      this.$emit('change', e.target.innerText)
    }
  },
  computed: {
    list () {
      const list = []
      while (list.length < 26) {
        list.push(String.fromCharCode(65 + list.length))
      }
      return list
    }
  }
}
</script>

<style lang="stylus" scoped>
    .alphabet
        position: fixed
        right: 0
        top: 2rem
        bottom: 0
        width: .4rem
        display: flex
        flex-direction: column
        justify-content: center
        text-align: center
        z-index: 1
        .alphabet-list
          height: .4rem
          margin: .2rem .1rem 0 0
          color: #17c0c8
</style>
