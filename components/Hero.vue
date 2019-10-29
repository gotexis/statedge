<template lang="pug">
    section.hero.is-primary.is-medium.real-hero
        .bg-container(:style="bgStyle")
        .bg-right(:style="bgRightStyle")
        // Hero head
        .hero-head
            nav.navbar
                .container
                    .navbar-brand
                        a.navbar-item
                            .logo-container
                                img.logo-top(src='@/assets/images/logo/StatEdge_Logo-lockup-white.png', alt='Logo')
                                img.logo-under(src='@/assets/images/logo/StatEdge_Logo-lockup-red.png', alt='Logo2')
                        span.navbar-burger.burger
                            span
                            span
                            span
                    #navbarMenu.navbar-menu
                        .navbar-end
                            nuxt-link.navbar-item(:to="{name: 'index'}")
                                | Home
                            a.navbar-item(:to="{name: 'about'}")
                                | About
                            a.navbar-item
                                | Contact
                            span.navbar-item
                                a.button.is-primary.is-inverted
                                    span.icon
                                        i.fab.fa-github
                                    span GitHub
        // Hero content: will be in the middle
        .hero-body
            .container.has-text-centered
                .hero-logo
                    img(src='@/assets/images/logo/StatEdge_Logo-lockup-white.png', alt='Logo')
                h1.title.slogan-mobile.is-family-code(data-aos="fade-left")
                    | Sport technology reinvented.
            .slogan
                h1.is-family-code.is-size-1
                    | Sport
                h1.is-family-code.is-size-1
                    | technology
                h1.is-family-code.is-size-1
                    | reinvented.
        // Hero footer: will stick at the bottom
        //.hero-foot
        //  nav.tabs
        //    .container
        //      ul
        //        li.is-active
        //          a Overview
        //        li
        //          a Modifiers
        //        li
        //          a Grid
        //        li
        //          a Elements
        //        li
        //          a Components
        //        li
        //          a Layout
</template>

<script lang="ts">
    import Component from "vue-class-component"
    import Vue from "vue"

    @Component
    export default class Hero extends Vue {
        percentage: number = 0

        // hooks
        mounted() {
            window.addEventListener("scroll", this.onScroll)
        }

        beforeDestroy() {
            window.removeEventListener("scroll", this.onScroll)
        }

        onScroll(e: any) {
            this.percentage = (e.target.documentElement.scrollTop / e.target.documentElement.scrollHeight) || 0
        }

        get bgStyle() {
            return {
                backgroundImage: `url(~assets/images/banner/hero-left.png)`
            }
        }

        get bgRightStyle() {
            const baseWidth = 0
            return {
                marginRight: String(baseWidth - this.percentage * 300) + "px"
            }
        }
    }

</script>

<style lang="sass">
    $heroHeight: 100vh

    @keyframes swipe
        0%
            clip-path: polygon(11% 0, 23% 0, 10% 100%, 0 100%)
        70%
            clip-path: polygon(92% 0, 100% 0, 88% 100%, 79% 100%)
        100%
            clip-path: polygon(100% 73%, 100% 100%, 100% 100%, 89% 100%)

    @keyframes slideshow
        0%
            background-image: url(~assets/images/banner/hero-left.png)
        50%
            background-image: url(~assets/images/banner/hero-left.png)
        60%
            background-image: url(~assets/images/card-bg/1.png)
        100%
            background-image: url(~assets/images/card-bg/1.png)

    // Hero scene including header
    .real-hero
        background-color: $brown !important
        overflow: hidden
        position: relative

        .slogan
            color: white
            transform: rotate(-90deg)
            position: absolute
            right: 0
            bottom: 100px

            @media(max-width: 1600px)
                visibility: hidden

        .slogan-mobile
            @media(min-width: 1601px)
                visibility: hidden

        .hero-body
            padding: 0 !important
            .hero-logo
                padding: 15%

            @media(max-width: $tablet)
                padding-bottom: 100px

        .logo-container
            position: relative
            width: 140px
            height: 50px

            img
                position: absolute
                left: 20px
                top: 10px
                max-width: unset

            .logo-under
                clip-path: polygon(25% 0%, 50% 0, 24% 100%, 0% 100%)
                animation: swipe 7s infinite

        .bg-container
            position: absolute
            width: 100%
            height: $heroHeight

            /*background-size: cover*/
            background-attachment: fixed
            background-position: left bottom
            background-repeat: no-repeat
            background-size: 100%

            animation: slideshow 7s infinite alternate

        .bg-right
            position: absolute
            right: 0
            height: 100%
            width: 1000px

            &::after
                height: 100%
                background-size: $heroHeight
                //background-attachment: scroll
                background-position: right
                background-repeat: no-repeat
                background-image: url(~assets/images/banner/hero-right-half.png)
                /* Display and position the pseudo-element */
                content: " "
                position: absolute
                top: 0
                right: 0
                bottom: 0
                left: 0

                /* Move the pseudo-element back away from the camera,
                 * then scale it back up to fill the viewport.
                 * Because the pseudo-element is further away, it appears to move more slowly, like in real life. */
                transform: translateZ(100px) scale(1)
</style>
