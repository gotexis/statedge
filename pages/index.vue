<template lang="pug">
    #home
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
                    img.swipe.hero-logo(src='@/assets/images/logo/StatEdge_Logo-lockup-white.png', alt='Logo')
                    h1.title(data-aos="fade-left")
                        | (Edge not supported)
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
        section.hero
            .hero-body
                .container
                    .columns
                        .column.has-text-centered.features(data-aos="fade-left")
                            span.icon.is-large
                                img(src="@/assets/icons/icon-hand-shake.png")
                            p.title.is-4 Grassroots
                            p.subtitle Our white labelled grassroots engagement platforms can be
                                | configured to integrate seamlessly with any competition management
                                | platform, combining competition and player data with engaging media
                                | content and resources to create a tightly connected ecosystem.
                        .column.has-text-centered.features(data-aos="fade-up")
                            span.icon.is-large
                                img(src="@/assets/icons/icon-elite.png")
                            p.title.is-4 Elite
                            p.subtitle StatEdge provides a number of game day management
                                | tools that service top tier competitions including the NRL
                                | Telstra Premiership, Super  W and the Rugby League World Cup
                                | that integrate with a number of third-parties and media providers.
                        .column.has-text-centered.features(data-aos="fade-right")
                            span.icon.is-large
                                img(src="@/assets/icons/icon-administration.png")
                            p.title.is-4 Administration
                            p.subtitle Robust competition management platforms that facilitate
                                | the end-to-end management of any sport that are highly
                                | configurable and integrate directly with StatEdge Engagement applications.
        section.container
            .hero-body
                p.title.has-text-centered Our sponsored
                .partners
                    .partner(data-aos="fade")
                        a(href='#', target='_blank' @click.prevent="null")
                            img(src='@/assets/images/logos/partners/Bowral.jpeg')
                    .partner(data-aos="fade")
                        a(href='#', target='_blank' @click.prevent="null")
                            img(src='@/assets/images/logos/partners/Randwick.jpg')
        section.hero.is-light
            .hero-body
                .container
                    .columns
                        .column.has-text-centered.features(data-aos="fade-left")
                            span.icon.is-large
                                img(src="@/assets/icons/people.png")
                            p.title.is-4 Who we are
                            p.subtitle
                                | A group of like-minded sports fanatics that set out to
                                | make a difference in grassroots sports in  Australia.
                        .column.has-text-centered.features(data-aos="fade-down")
                            span.icon.is-large
                                img(src="@/assets/icons/eye.png")
                            p.title.is-4 Our philosophy
                            p.subtitle
                                | To create and sustain a genuine connection with sporting
                                | bodies and their communities through creating highly
                                | engaged digital micro-environments.
                        .column.has-text-centered.features(data-aos="fade-right")
                            span.icon.is-large
                                img(src="@/assets/icons/pie-port.png")
                            p.title.is-4 Our model
                            p.subtitle
                                | Our licensing agreements are a cost model that enables collaboration,
                                | comfortable margin and product flexibility with our clients.
        // section.hero
        //     .hero-body
        //         .container
        //             .columns
        //                 .column.has-text-centered.features.bg-red(data-aos="fade-left")
        //                     .darken
        //                     span.icon.is-large
        //                         img(src="@/assets/icons/work.png")
        //                     p.title.is-4 How we work
        //                     p.subtitle
        //                         | Our highly-configurable core system allows unique capability
        //                         | and business logic to be implemented for clients with ease. Due
        //                         | to the underlying technology stack lower resources are
        //                         | required resulting in higher margins.
        //                 .column.has-text-centered.features.bg-red(data-aos="fade-up")
        //                     .darken
        //                     span.icon.is-large
        //                         img(src="@/assets/icons/process.png")
        //                     p.title.is-4 Our processes
        //                     p.subtitle
        //                         | We work in an agile method, using a technology stack that
        //                         | gives us the ability to deliver bespoke plataforms with
        //                         | quick turnaround times without sacrificing quality.
        //
        //                 .column.has-text-centered.features.bg-red(data-aos="fade-right")
        //                     .darken
        //                     span.icon.is-large
        //                         img(src="@/assets/icons/team.png")
        //                     p.title.is-4 The team
        //                     p.subtitle
        //                         | As a result of the way we work and strucuture ourselves it is
        //                         | vital we surround ourselves  with the right people. With that
        //                         | in mind we have carefully built a talented and hard-working team
        //                         | of Full-Stack developers driving the delivery  of all StatEdge products.
        section.section
            .container
                .columns
                    .column
                        // Rubgy
                        .card.card-1(data-aos="fade-up")
                            .card-1-bg-red
                                img(src="@/assets/images/card-bg/pure-red-rotate.png")
                            .card-content
                                // p.title Rugby League
                                a(href='#', target='_blank' @click.prevent="null")
                                    img(src='@/assets/images/logos/partners/RugbyAU_Logo_Primary copy.png')
                                p.is-family-code.is-size-4
                                    | StatEdge chose to enter the sports technology landscape with the intention
                                    | of creating world best participant sports software. StatEdge have executed
                                    | creative and stable product across a demanding and influential clientele.

                                p
                                    | With a unique understanding of participant sports and product  development,
                                    | StatEdgehave been able to apply an approach  that focuses on product design,
                                    | delivery and servicing. Given  the complexities of the sports technology
                                    | landscape StatEdge  understand the importance of integrating with multiple
                                    | third-parties, our underlying architecture integrates seamlessly.
                                p
                                    | We are proud of our ability to deliver unique and innovative software
                                    | products in partnership with our clients. We would  welcome the opportunity
                                    | to integrate with Stack and continue the journey towards client delivery
                                    | and worlds  best sports software.
                .columns
                    .column
                        // NRL
                        .card.card-2(data-aos="fade-up")
                            .card-2-bg-red
                                img(src="@/assets/images/card-bg/pure-white-rotate.png")
                            .card-content
                                // p.title Rugby League
                                .logo-float
                                    a(href='#', target='_blank' @click.prevent="null")
                                        img(src='@/assets/images/logos/partners/NRL_logo copy.png')
                                p.is-family-code.is-size-4
                                    | StatEdge chose to enter the sports technology landscape with the intention
                                    | of creating world best participant sports software. StatEdge have executed
                                    | creative and stable product across a demanding and influential clientele.
                                p
                                    | With a unique understanding of participant sports and product  development,
                                    | StatEdgehave been able to apply an approach  that focuses on product design,
                                    | delivery and servicing. Given  the complexities of the sports technology
                                    | landscape StatEdge  understand the importance of integrating with multiple
                                    | third-parties, our underlying architecture integrates seamlessly.
                                p
                                    | We are proud of our ability to deliver unique and innovative software
                                    | products in partnership with our clients. We would  welcome the opportunity
                                    | to integrate with Stack and continue the journey towards client delivery
                                    | and worlds  best sports software.
        Footer
</template>

<script lang="ts">
    import Component from "vue-class-component"
    import Vue from "vue"
    import Footer from "@/components/Footer.vue"

    @Component({
        components: {
            Footer,
        }
    })
    export default class Home extends Vue {
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

<style lang="sass" scoped>
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

    @keyframes swipe
        0%
            clip-path: polygon(11% 0, 23% 0, 10% 100%, 0 100%)
        70%
            clip-path: polygon(92% 0, 100% 0, 88% 100%, 79% 100%)
        100%
            clip-path: polygon(100% 73%, 100% 100%, 100% 100%, 89% 100%)

    @keyframes swipe-inverse
        49%
            clip-path: none
        50%
            clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0, 34% 0, 14% 100%, 7% 100%, 27% 0)
        60%
            clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0, 100% 0, 86% 100%, 78% 100%, 93% 0)
        61%
            clip-path: none

    @keyframes slideshow
        0%
            background-image: url(~assets/images/banner/hero-left.png)
        /*background-size: cover*/
        50%
            background-image: url(~assets/images/banner/hero-left.png)
        60%
            background-image: url(~assets/images/card-bg/1.png)
        100%
            background-image: url(~assets/images/card-bg/1.png)
    /*background-size: cover*/

    .slogan
        color: white
        transform: rotate(-90deg)
        position: absolute
        right: 0
        bottom: 100px

        @media(max-width: $tablet)
            visibility: hidden

    $heroHeight: 100vh
    // todo: what?

    // todo: below should be global
    .is-text-primary
        color: $primary

    .partners
        margin: 0 auto
        display: flex
        flex-wrap: wrap
        max-width: 66rem

        .partner
            flex: 1
            text-align: center

            img
                height: 100px

    // feature icon pics
    .features
        &.bg-red
            position: relative
            background-image: url(~assets/images/graphics/StatEdge-Graphics--01.jpg)
            background-attachment: fixed
            background-size: cover
            margin-left: 20px
            margin-right: 20px
            padding: 20px

            .darken
                position: absolute
                width: 100%
                height: 100%
                left: 0
                top: 0
                background-color: rgba(255, 255, 255, .1)

            .title, .subtitle
                color: white

        &:hover
            background-color: #f0f0f0

    span.icon.is-large
        margin-bottom: 10px

        img
            height: 100%
            max-width: 150%

    #home
        position: relative
        height: $heroHeight

        // Hero scene including header
        .real-hero
            overflow: hidden
            position: relative

            .hero-body
                padding: 0 0 300px

                @media(max-width: $tablet)
                    padding-bottom: 100px

        .bg-container
            position: absolute
            width: 100%
            height: $heroHeight

            /*background-size: cover*/
            background-attachment: fixed
            background-position: center bottom
            background-repeat: no-repeat

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
        /* Force the background image to fill the whole element. */
        /* Keep the image from overlapping sibling elements. */
        //z-index: -1

        .title
            font-weight: 600
            font-style: normal

        .card-1
            padding-right: 50%
            // controls the max content of card

            @media(max-width: $tablet)
                padding-right: 0

            overflow: hidden
            color: white
            position: relative

            background-image: url(~assets/images/banner/hero-left.png)
            background-position: right bottom
            background-size: cover
            background-repeat: no-repeat
            background-attachment: fixed

            z-index: -2

            .title
                color: white

            .card-1-bg-red
                position: absolute
                left: 0
                top: 0
                width: 70%
                height: 100%
                z-index: -1
        // background-image: url(~assets/images/card-bg/pure-red-rotate.png)
        // background-size: 100% 100%

        .card-2
            padding-right: 50%
            // controls the max content of card
            overflow: hidden
            position: relative

            background-image: url(~assets/images/card-bg/red-crowd.png)
            // background-position: right bottom
            // background-size: 50% 50%
            background-repeat: no-repeat
            background-attachment: fixed

            z-index: -2

            .title
                color: white

            .logo-float
                position: absolute
                right: 0
                margin-right: 30px

            .card-2-bg-red
                position: absolute
                left: -50px
                top: 0
                width: 70%
                height: 100%
                z-index: -1
    // background-image: url(~assets/images/card-bg/pure-red-rotate.png)
    // background-size: 100% 100%
</style>
