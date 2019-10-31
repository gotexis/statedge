<template lang="pug">

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

</template>

<style lang="sass" scoped>

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
