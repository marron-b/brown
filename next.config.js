const debug = process.env.NODE_ENV !== 'production';

const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx'
})

module.exports = withNextra({
    images: {
        loader: 'custom',
        unoptimized: true,
        disableStaticImages: true
    },
    reactStrictMode: true,
    assetPrefix: !debug? `/brown/`: '',
    trailingSlash: true,
})

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
