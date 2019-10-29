<template lang="pug">
    #about
        p contents placeholder
        p contents placeholder
        p contents placeholder
        p contents placeholder
        p contents placeholder
        p contents placeholder
        p contents placeholder
        p contents placeholder
        p contents placeholder
        p contents placeholder
        p contents placeholder
        p contents placeholder
        p contents placeholder
        p contents placeholder
        p contents placeholder
        section.hero
            .hero-body
                .container
                    .columns
                        .column.has-text-centered.features.bg-red(data-aos="fade-left")
                            .darken
                            span.icon.is-large
                                img(src="@/assets/icons/work.png")
                            p.title.is-4 How we work
                            p.subtitle
                                | Our highly-configurable core system allows unique capability
                                | and business logic to be implemented for clients with ease. Due
                                | to the underlying technology stack lower resources are
                                | required resulting in higher margins.
                        .column.has-text-centered.features.bg-red(data-aos="fade-up")
                            .darken
                            span.icon.is-large
                                img(src="@/assets/icons/process.png")
                            p.title.is-4 Our processes
                            p.subtitle
                                | We work in an agile method, using a technology stack that
                                | gives us the ability to deliver bespoke plataforms with
                                | quick turnaround times without sacrificing quality.

                        .column.has-text-centered.features.bg-red(data-aos="fade-right")
                            .darken
                            span.icon.is-large
                                img(src="@/assets/icons/team.png")
                            p.title.is-4 The team
                            p.subtitle
                                | As a result of the way we work and strucuture ourselves it is
                                | vital we surround ourselves  with the right people. With that
                                | in mind we have carefully built a talented and hard-working team
                                | of Full-Stack developers driving the delivery  of all StatEdge products.
</template>

<script lang="ts">
    import Component from "vue-class-component"
    import Vue from "vue"

    @Component
    export default class About extends Vue {
    }
</script>

<style lang="sass" scoped>
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
</style>
