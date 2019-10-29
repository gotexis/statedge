<template lang="pug">
    #home
        Hero
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
                                    | and worlds best sports software.
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
