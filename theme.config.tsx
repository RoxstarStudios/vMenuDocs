import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

export const Fivem = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M22.4 24h-5.225c-.117 0-.455-1.127-1.026-3.375c-1.982-6.909-3.124-10.946-3.417-12.12l3.37-3.325h.099c.454 1.42 2.554 7.676 6.299 18.768ZM12.342 7.084h-.048a3.382 3.385 0 0 1-.098-.492v-.098a102.619 102.715 0 0 1 3.272-3.275c.13.196.196.356.196.491v.05a140.694 140.826 0 0 1-3.322 3.324ZM5.994 10.9h-.05c.67-2.12 1.076-3.209 1.223-3.275L14.492.343c.08 0 .258.524.533 1.562zm1.37-4.014h-.05C8.813 2.342 9.612.048 9.71 0h4.495v.05a664.971 664.971 0 0 1-6.841 6.839Zm-2.69 7.874h-.05c.166-.798.554-1.418 1.174-1.855a312.918 313.213 0 0 1 5.71-5.717h.05c-.117.672-.375 1.175-.781 1.52zM1.598 24l-.098-.05c1.399-4.172 2.148-6.322 2.248-6.45l6.74-6.694v.05C10.232 11.88 8.974 16.263 6.73 24Z"></path>
  </svg>
)

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s • Vespura Docs',
    }
  },
  feedback: {
    content: null
  },
  editLink: {
    text: null
  },
  toc: {
    float: true
  },
  head: () => {
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="https://vespura.com/favicon-assets/favicon.ico" />
      </>
    )
  },
  logo: (
    <>
      <img alt="Vespura Logo" src="https://vespura.com/logo-cropped-white.png" width="25" height="25" />
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Vespura Docs
      </span>
    </>
  ),
  logoLink: "/vmenu/introduction",
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default" style={{ fontSize: "18px" }}><u>{title}</u></span>
      }
      return <>{title}</>
    },
    autoCollapse: false, // Add any relevant sidebar configuration here
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  darkMode: true,
  themeSwitch: {
    component: null
  },
  navigation: false,
  primaryHue: 29,
  project: {
    link: 'https://github.com/TomGrobbe/vMenu'
  },
  chat: {
    link: 'https://vespura.com/discord',
  },
  docsRepositoryBase: 'https://github.com/RoxstarStudios/vMenuDocs',
  footer: {
    text: 'Copyright © Tom Grobbe',
  },
}

export default config
