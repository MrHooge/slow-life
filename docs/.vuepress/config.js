module.exports = {
    base: '/',
    title: '前端慢生活',
    description: '猴哥的前端慢生活',
    markdown: {
        lineNumbers: true
    },
    dest: './docs/.vuepress/dist',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '前端慢生活',
            description: '猴哥的前端慢生活'
        }
    },
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    theme: 'reco', // 使用皮肤
    themeConfig: {
        // repo:'MrHooge/slow-life',
        version: '1.0',
        editLinks: true,
        docsDir: '/docs',
        logo: '/logo.png',
        label: '简体中文',
        /**
         * support for
         * 'default'
         * 'funky'
         * 'okaidia'
         * 'solarizedlight'
         * 'tomorrow'
         */
        codeTheme: 'tomorrow', // default 'tomorrow'
        // selectText: '选择语言',
        // editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./nav'),
        sidebar: 'auto'//在所有页面中启用自动生成侧栏
    },
    plugins: []
}
