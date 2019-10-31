<template lang="pug">
    #home
        Hero
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
        Partners
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

        section.container
            .hero-body
                p.title.has-text-centered Proud Sponsors Of
                .partners
                    // partner 1
                    .partner(data-aos="fade")
                        .partner-logo
                            a(href='#', target='_blank' @click.prevent="()=>null")
                                img(src='@/assets/images/logos/partners/Bowral.jpeg')
                        .partner-text
                            p.is-family-code.is-size-4.align-left
                                |   Bowral Rubgy League Football Club Inc.

                    // partner 2
                    .partner(data-aos="fade")
                        .partner-logo
                            a(href='#', target='_blank' @click.prevent="()=>null")
                                img(src='@/assets/images/logos/partners/Randwick.jpg')
                        .partner-text
                            p.is-family-code.is-size-4.align-left
                                | Randwick City Football Club
        // Footer
        Footer
</template>

<script lang="ts">
    import Component from "vue-class-component"
    import Vue from "vue"
    import Footer from "@/components/Footer.vue"
    import Hero from "@/components/Hero.vue"
    import Partners from "@/components/Partners.vue"

    @Component({
        components: {
            Footer,
            Hero,
            Partners,
        }
    })
    export default class Home extends Vue {}
</script>

<style lang="sass" scoped>
    .align-left
        text-align: left

    .mt-20
        // have a bit  of margin on top of every heros
        margin-top: 60px
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
            display: flex
            flex-direction: row
            min-width: 400px
            margin-top: 30px

            .partner-logo
                display: flex
                flex-direction: column
                justify-content: center
                margin-right: 10px
                min-width: 100px
                img
                    max-height: 100px

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

</style>
