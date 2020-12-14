<template>
    <div>
        <div class="search">
            <input class="search-input" type="text" placeholder="输入城市名或拼音"/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/variable.styl'
    .search
        height: .90rem
        background: $bgcolor
        text-align: center
        .search-input
            width: 90%
            height: .65rem
            border: transparent solid
            border-radius: 6px
            padding: 0 .1rem
            margin: 0 3%
</style>
