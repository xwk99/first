<template>
    <div>
        <ul class="alphabet">
            <li class="alphabet-list">A</li>
            <li class="alphabet-list">A</li>
            <li class="alphabet-list">A</li>
            <li class="alphabet-list">A</li>
            <li class="alphabet-list">A</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'CityAlphabet'
}
</script>

<style lang="stylus" scoped>
    .alphabet
        position: absolute
        right: 0
        top: 1.9rem
        bottom: 0
        width: .4rem
        display: flex
        flex-direction: column
        justify-content: center
        text-align: center
        .alphabet-list
            height: .4rem
            margin-bottom: .1rem
</style>
