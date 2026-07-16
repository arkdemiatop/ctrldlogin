import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ctrldlogin',
  description: 'Desktop application for managing multiple isolated browser profiles with unique fingerprints',
  lang: 'en-US',

  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
  ],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Features', link: '/features' },
      { text: 'API Reference', link: '/api-guide' },
      { text: 'Changelog', link: '/changelog' },
      { text: 'Downloads', link: 'https://github.com/arkdemiatop/ctrldlogin/releases' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Home', link: '/' },
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
      copyright: 'ctrldlogin',
    },

    search: {
      provider: 'local',
    },
  },
})
