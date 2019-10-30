<template lang="pug">
    #home
        Hero
        section.hero.mt-20
            .hero-body
                .container
                    .columns
                        .column.has-text-centered.features(data-aos="fade-left")
                            span.icon.is-large
                                img(src="@/assets/icons/icon-hand-shake.png")
                            p.title.is-4 Grassroots
                            p.subtitle White-labelled grassroots engagement platforms that integrates seamlessly
                                | with any competition management
                                | platform.
                        .column.has-text-centered.features(data-aos="fade-up")
                            span.icon.is-large
                                img(src="@/assets/icons/icon-elite.png")
                            p.title.is-4 Elite
                            p.subtitle Service top tier competitions including the NRL
                                | Telstra Premiership, Super W and the Rugby League World Cup.
                        .column.has-text-centered.features(data-aos="fade-right")
                            span.icon.is-large
                                img(src="@/assets/icons/icon-administration.png")
                            p.title.is-4 Administration
                            p.subtitle Robust competition management platforms facilitate
                                | highly configurable management of any sport.
        section.hero.is-light
            .hero-body
                .container
                    .columns
                        .column.has-text-centered.features(data-aos="fade-left")
                            span.icon.is-large
                                img(src="@/assets/icons/people.png")
                            p.title.is-4 Who we are
                            p.subtitle
                                | Group of like-minded sports fanatics set out to
                                | make a difference in grassroots sports in Australia.
                        .column.has-text-centered.features(data-aos="fade-down")
                            span.icon.is-large
                                img(src="@/assets/icons/eye.png")
                            p.title.is-4 Our philosophy
                            p.subtitle
                                | To create connection through digital micro-environments for sporting
                                | bodies and communities.
                        .column.has-text-centered.features(data-aos="fade-right")
                            span.icon.is-large
                                img(src="@/assets/icons/pie-port.png")
                            p.title.is-4 Our model
                            p.subtitle
                                | Licensing agreements that enables collaboration,
                                | comfortable margin and product flexibility with our clients.
        section.hero.mt-20
            p.title.has-text-centered Our partners
            .columns.mt-20
                // Rubgy
                .card.card-1(data-aos="fade-right")
                    .card-1-bg-white
                    .card-content
                        .logo-float-1
                            a(href='#', target='_blank' @click.prevent="()=>null")
                                img(src='@/assets/images/logos/partners/RugbyAU_Logo_Primary copy.png')
                        .card-1-text
                            p.is-family-code.is-size-4
                                | StatEdge chose to enter the sports technology landscape with the intention
                                | of creating world best participant sports software. StatEdge have executed
                                | creative and stable product across a demanding and influential clientele.
            .columns.mt-20-tablet
                // NRL
                .card.card-2(data-aos="fade-left")
                    .card-2-bg-white
                    .card-content
                        .logo-float-2
                            a(href='#', target='_blank' @click.prevent="()=>null")
                                img(src='@/assets/images/logos/partners/NRL_logo copy.png')
                        .card-2-text
                            p.is-family-code.is-size-4
                                | StatEdge chose to enter the sports technology landscape with the intention
                                | of creating world best participant sports software. StatEdge have executed
                                | creative and stable product across a demanding and influential clientele.
        section.container
            .hero-body
                p.title.has-text-centered We proudly sponsor
                .partners
                    .partner(data-aos="fade")
                        a(href='#', target='_blank' @click.prevent="()=>null")
                            img(src='@/assets/images/logos/partners/Bowral.jpeg')
                    .partner(data-aos="fade")
                        a(href='#', target='_blank' @click.prevent="()=>null")
                            img(src='@/assets/images/logos/partners/Randwick.jpg')
        Footer
</template>

<script lang="ts">
    import Component from "vue-class-component"
    import Vue from "vue"
    import Footer from "@/components/Footer.vue"
    import Hero from "@/components/Hero.vue"

    @Component({
        components: {
            Footer,
            Hero,
        }
    })
    export default class Home extends Vue {
    }
</script>

<style lang="sass" scoped>

    .mt-20
        // have a bit  of margin on top of every heros
        margin-top: 80px
    .mb-20
        margin-bottom: 80px
    .mt-20-tablet
        @media(max-width: $tablet)
            margin-top: 50px

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
        &:hover
            background-color: #f0f0f0

    span.icon.is-large
        margin-bottom: 10px

        img
            height: 100%
            max-width: 150%

    #home
        position: relative

        .title
            font-weight: 600
            font-style: normal

        .card-1
            overflow: hidden
            color: white
            position: relative

            background-image: url(~assets/images/card-bg/red-crowd.png)
            background-position: right bottom
            background-size: cover
            background-repeat: no-repeat
            background-attachment: fixed

            z-index: -2

            .card-content
                display: flex
                flex-direction: row-reverse
                justify-content: space-between
                flex-wrap: wrap

                .card-1-text
                    width: 40%

                    @media(max-width: $tablet)
                        width: 100%

                .logo-float-1
                    width: 40%
                    height: 200px
                    display: flex
                    text-align: center
                    img
                        justify-self: right
                        max-height: 100%

                    @media(max-width: $tablet)
                        width: 100%

            .title
                color: white

            .card-1-bg-white
                position: absolute
                right: 0
                top: 0
                width: 100%
                height: 100%
                z-index: -1
                background: white
                clip-path: polygon(40% 0, 100% 0%, 100% 100%, 80% 100%)

                @media(max-width: $tablet)
                    display: none

        .card-2
            color: white
            // controls the max content of card
            overflow: hidden
            position: relative

            background-image: url(~assets/images/card-bg/red-crowd.png)
            background-position: right bottom
            // background-size: 50% 50%
            background-repeat: no-repeat
            background-attachment: fixed

            z-index: -2

            .title
                color: white

            .card-content
                text-align: right
                display: flex
                flex-direction: row
                flex-wrap: wrap
                justify-content: space-between

                .logo-float-2
                    height: 200px
                    max-height: 100%
                    width: 40%
                    text-align: center
                    display: flex

                    @media(max-width: $tablet)
                        width: 100%
                        max-height: 100%

                    img, a
                        max-height: 100%
                        margin-left: auto
                        margin-right: auto

                .card-2-text
                    width: 40%

                    @media(max-width: $tablet)
                        width: 100%
                        text-align: left

            .card-2-bg-white
                position: absolute
                left: -50px
                top: 0
                width: 70%
                height: 100%
                z-index: -1
                clip-path: polygon(0 0, 86% 0, 46% 100%, 0 100%)
                background-color: white

                @media(max-width: $tablet)
                    display: none

</style>
