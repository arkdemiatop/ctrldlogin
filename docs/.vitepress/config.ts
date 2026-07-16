import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ctrldlogin',
  description: 'Desktop application for managing multiple isolated browser profiles with unique fingerprints',
  lang: 'en-US',
  base: '/ctrldlogin/',

  head: [
    ['link', { rel: 'icon', href: '/ctrldlogin/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#0f172a' }],
  ],

  themeConfig: {
    logo: '/ctrldlogin/logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Features', link: '/features' },
      { text: 'API', link: '/api-guide' },
      { text: 'Changelog', link: '/changelog' },
      { text: 'Downloads', link: 'https://github.com/arkdemiatop/ctrldlogin/releases' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Features', link: '/features' },
        ],
      },
      {
        text: 'Reference',
        items: [
          { text: 'API Reference', link: '/api-guide' },
          { text: 'Changelog', link: '/changelog' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/arkdemiatop/ctrldlogin' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 ctrldlogin',
    },

    search: {
      provider: 'local',
    },
  },
})
