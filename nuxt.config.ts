const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
    base: '/statedge/'
} : {}

export default {
    env: {},
    generate: {
        dir: process.env.DEPLOY_ENV === 'GH_PAGES' ? 'gh-pages' : 'dist'
    },
    head: {
        title: 'statedge',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'statedge website'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    loading: {color: '#3B8070'},
    css: [
        '~/assets/sass/app.sass',
        'aos/dist/aos.css',
    ],
    build: {
        cssSourceMap: false,
    },
    buildModules: ['@nuxt/typescript-build'],
    modules: [
        '@nuxtjs/axios',
        ['nuxt-buefy', {css: false}],
        '@nuxtjs/style-resources'
    ],
    axios: {},
    router: {
        linkActiveClass: 'is-active',
        ...routerBase,
    },
    styleResources: {
        sass: [
            '~/assets/sass/app.sass',
        ]
    },
    plugins: [
        {src: '@/plugins/aos.js', mode: 'client'}
    ],
}
