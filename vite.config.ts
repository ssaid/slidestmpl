import { defineConfig } from 'vite'
import '@slidev/cli'
import MarkdownItMagicLink from 'markdown-it-magic-link'

export default defineConfig({
  slidev: {
    markdown: {
      markdownItSetup(md) {
        md.use(MarkdownItMagicLink, {
          linksMap: {
            'Python': 'https://github.com/python/cpython',
            'Docker': 'https://github.com/docker',
            'Debian': 'https://github.com/debian',
            'Vim': 'https://github.com/vim/vim',
            'Odoo': 'https://github.com/odoo/odoo',
            'Gitlab': 'https://github.com/gitlabhq',
            'Kubernetes': 'https://github.com/kubernetes/kubernetes',
            'Github': { link: 'https://github.com', imageUrl: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png' },
            'Eynes': 'https://github.com/eynes',
          },
        })
      },
    },
  },
})
