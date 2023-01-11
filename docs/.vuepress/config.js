module.exports = {
    title: 'Sorting',
    description: 'Just playing around',
    head: [['link', { rel: 'icon', href: '/logo.png' }]],
    port: 8888,
    themeConfig: {
        logo: '/logo.png',
        nav: require('./nav'),
        sidebar: {
            '/senior-js/jquery/': [
                '/senior-js/jquery/',
                {
                    title: '核心功能',
                    collapsable: false,
                    children: ['/senior-js/jquery/1', '/senior-js/jquery/2'],
                },
                {
                    title: '回调对象设计',
                    collapsable: false,
                    children: ['/senior-js/jquery/3', '/senior-js/jquery/4'],
                },
            ],
        },
    },
};
