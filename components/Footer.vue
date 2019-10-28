<template lang="pug">
    footer
        .bg-left-1.break-mobile
        .bg-left.break-mobile
        .bg-left-2.break-mobile
        .bg-left-3.break-mobile
        .gutter.break-mobile
        .is-inline-block.content(data-aos="fade-left")
            p
                strong StatEdge
            p Sport technology reinvented.
            p.glow Let’s chat.
            p
                a(href='mailto:ben.trevisiol@statedge.com.au' target="_blank") Ben Trevisiol - 0412 345 678

</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator"

@Component
export default class Footer extends Vue {}
</script>

<style lang="sass" scoped>
    @keyframes footer-slideshow
        50%
            background-image: url(~assets/images/banner/hero-left.png)

    .glow
        animation: glow 2s ease-in-out infinite

    @keyframes glow
        30%
            opacity: 100%
        50%
            opacity: 0
        70%
            opacity: 100%

    // todo: below should be put into a separate _color,sass file (black scheme)
    footer
        position: relative
        padding: 5rem 3rem 5rem
        background-color: #0D0D0D
        z-index: -2
        overflow-y: hidden

        p, strong
            color: white
            margin-bottom: 0 !important

        a
            color: $primary

            &:hover
                color: $primary
                border-bottom: 1px solid $primary

        .break-mobile
            @media (max-width: 900px)
                display: none

        .gutter
            display: inline-block
            width: 60%
            height: 1px

        .bg-left
            animation: footer-slideshow 10s cubic-bezier(0.6, 0, 0.2, 1) infinite
            position: absolute
            left: -20px
            top: 0
            width: 33%
            height: 100%
            background-image: url(~assets/images/card-bg/1.png)
            background-size: 400px 1000px
            /*background-size: cover*/
            background-position: bottom
            /*background-attachment: fixed*/
            transform: rotate(-45deg)

        .bg-left-1
            position: absolute
            left: -200px
            top: -150px
            width: 66%
            height: 50%
            background-image: url(~assets/images/graphics/StatEdge-Graphics--03.jpg)
            background-size: 70%
            /*background-position: bottom*/
            /*background-attachment: fixed
            transform: rotate(-45deg)

        .bg-left-2
            position: absolute
            left: 0
            top: 0
            width: 66%
            height: 100%
            background-image: url(~assets/images/graphics/StatEdge-Graphics--02.jpg)
            background-size: 70%
            /*background-position: bottom*/
            /*background-attachment: fixed
            transform: rotate(-45deg)

        .bg-left-3
            position: absolute
            left: -30px
            top: 0
            width: 66%
            height: 50%
            background-image: url(~assets/images/graphics/StatEdge-Graphics--01.jpg)
            background-size: 70%
            /*background-position: bottom*/
            /*background-attachment: fixed
            transform: rotate(-45deg)
</style>
