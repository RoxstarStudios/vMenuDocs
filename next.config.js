const env = process.env.NODE_ENV;

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
})

module.exports = withNextra({
  output: 'export',
  basePath: env == "production" ? "/vMenuDocs" : "",
  images: {
    unoptimized: true
  }
})
