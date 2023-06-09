const debug = process.env.NODE_ENV !== 'production';

const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx'
})
// annotated for temp
module.exports = withNextra({
    images: {
//         loader: 'custom',
        unoptimized: true,
//         disableStaticImages: true
    },
    reactStrictMode: true,
    trailingSlash: true
})

module.exports = withNextra()

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
