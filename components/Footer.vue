<template lang="pug">
    footer
        // .bg-left-1.break-mobile
        // .bg-left.break-mobile
        .bg-left-2.break-mobile
        .bg-left-3.break-mobile
        .is-inline-block.content(data-aos="fade-left")
            p.glow Get in touch
            a(href='mailto:contact@statedge.com.au' target="_blank") contact@statedge.com.au
            br
            .logo-container
                img.logo-top(src='@/assets/images/logo/StatEdge_Logo-lockup-white.png', alt='Logo')
                img.logo-under(src='@/assets/images/logo/StatEdge_Logo-lockup-red.png', alt='Logo2')
            p Sport technology reinvented.
            p
                strong ABN
                |
                | 95 163 129 753

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

    .logo-container
        position: relative
        width: 140px
        height: 50px

        img
            position: absolute
            left: 0
            top: 0
            width: 100%

        .logo-under
            clip-path: polygon(25% 0%, 50% 0, 24% 100%, 0% 100%)
            animation: swipe 7s infinite

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
            @media (max-width: 1000px)
                display: none

        .content
            @media (min-width: 1000px)
                margin-left: 70%

        .bg-left
            animation: footer-slideshow 10s cubic-bezier(0.6, 0, 0.2, 1) infinite
            position: absolute
            left: -20px
            top: 0
            width: 33%
            height: 100%
            background-image: url(~assets/images/card-bg/1.png)
            background-size: 400px 1000px
            background-repeat: repeat
            /*background-size: cover*/
            background-position: bottom
            /*background-attachment: fixed*/
            transform: rotate(-60deg)

        .bg-left-1
            position: absolute
            left: -200px
            top: -150px
            width: 66%
            height: 50%
            background-image: url(~assets/images/graphics/StatEdge-Graphics--03.jpg)
            background-size: 70%
            background-repeat: repeat
            /*background-position: bottom*/
            /*background-attachment: fixed
            transform: rotate(-60deg)

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
            transform: rotate(-60deg)

        .bg-left-3
            position: absolute
            left: -40px
            top: -10px
            width: 66%
            height: 50%
            background-image: url(~assets/images/graphics/StatEdge-Graphics--01.jpg)
            background-size: 70%
            /*background-position: bottom*/
            /*background-attachment: fixed
            transform: rotate(-60deg)
</style>
