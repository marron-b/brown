import {useRouter} from 'next/router'
import {useConfig} from 'nextra-theme-docs'

export default {
    logo: <span>🌊</span>,
    docsRepositoryBase: 'https://github.com/marron-b/brown/tree/main',
    navigation: {
        prev: true,
        next: true
    },
    editLink: {
        text: '수정하기 →'
    },
    feedback: {
        content: '문의하기 →'
    },
    sidebar: {
        defaultMenuCollapseLevel: 2
    },
    project: {
        link: 'https://github.com/marron-b/brown'
    },
    search: {
        placeholder: '검색하기'
    },
    toc: {
        title: "",
        float: true
    },
    footer: {
        component: <div/>
    },
    primaryHue: 38,
    head: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const {asPath, defaultLocale, locale} = useRouter()
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const {frontMatter} = useConfig()
        const url =
            'https://marron-marron.me' +
            (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

        return (
            <>
                <meta property="og:url" content={url}/>
                <meta property="og:title" content={frontMatter.title || 'Tech trends'}/>
                <meta
                    property="og:description"
                    content={frontMatter.description || 'Tech trends'}
                />
            </>
        )
    }
}
