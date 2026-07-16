import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ctrldlogin',
  description: 'Desktop application for managing multiple isolated browser profiles with unique fingerprints',
  lang: 'en-US',
  base: '/ctrldlogin/',

  head: [
    ['link', { rel: 'icon', href: '/ctrldlogin/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'icon', href: '/ctrldlogin/favicon.png', type: 'image/png' }],
    ['link', { rel: 'apple-touch-icon', href: '/ctrldlogin/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#0f172a' }],
    ['meta', { name: 'og:title', content: 'ctrldlogin' }],
    ['meta', { name: 'og:description', content: 'Desktop application for managing multiple isolated browser profiles with unique fingerprints.' }],
    ['meta', { name: 'og:image', content: '/ctrldlogin/screenshot.png' }],
  ],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Features', link: '/features' },
      { text: 'API', link: '/api-guide' },
      { text: 'FAQ', link: '/faq' },
      { text: 'Changelog', link: '/changelog' },
      {
        text: 'Downloads',
        link: 'https://github.com/arkdemiatop/ctrldlogin/releases',
      },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/getting-started#installation' },
          { text: 'First Launch', link: '/getting-started#first-launch' },
        ],
      },
      {
        text: 'Features',
        items: [
          { text: 'Profile Management', link: '/features#profile-management' },
          { text: 'Fingerprinting', link: '/features#browser-fingerprinting' },
          { text: 'Proxy Management', link: '/features#proxy-management' },
          { text: 'Extensions', link: '/features#extensions' },
          { text: 'Organization', link: '/features#organization' },
          { text: 'Interface', link: '/features#interface' },
        ],
      },
      {
        text: 'API Reference',
        items: [
          { text: 'Profiles', link: '/api-guide#profiles' },
          { text: 'Proxies', link: '/api-guide#proxies' },
          { text: 'Extensions', link: '/api-guide#extensions' },
          { text: 'Folders', link: '/api-guide#folders' },
          { text: 'Templates', link: '/api-guide#templates' },
          { text: 'System', link: '/api-guide#system' },
          { text: 'WebSocket', link: '/api-guide#websocket' },
        ],
      },
      {
        text: 'Resources',
        items: [
          { text: 'FAQ', link: '/faq' },
          { text: 'Privacy', link: '/privacy' },
          { text: 'Changelog', link: '/changelog' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/arkdemiatop/ctrldlogin' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'ctrldlogin',
    },

    search: {
      provider: 'local',
    },
  },
})
