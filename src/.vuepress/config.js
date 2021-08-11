const { name: title, description, repository } = require(`${process.cwd()}/package.json`)
const base = process.env.BASE || '/';

module.exports = {

  base,

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title,

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  extend: '@vuepress/theme-default',

  theme: 'default-prefers-color-scheme',

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: repository.url,
    docsDir: repository.directory,
    docsBranch: repository.docsBranch,
    searchPlaceholder: 'Search...',
    activeHeaderLinks: false,
    displayAllHeaders: true,
    lastUpdated: true,
    editLinks: true,
    nav: [
      {
        text: 'Home',
        link: '/index.md',
      },
      {
        text: 'Notes',
        link: '/notes/',
      },
    ],
    // sidebar: { '/guide/': [{ title: 'Guide', collapsable: false, children: ['', 'using-vue',] }], }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/active-header-links',
  ],
};
