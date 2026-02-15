import { renderToString } from 'react-dom/server'
import { createStaticHandler,createStaticRouter,StaticRouterProvider } from 'react-router'
import { routes } from './routes'

import { metaIndex } from './meta/metaIndex'
import { metaLive } from './meta/metaLive'

let head = ''
const tag = (condition, content) => (condition ? content : "");

const getHead = (pathname) => {
  switch(pathname){
    case '/': return metaIndex
    case '/live': return metaLive
    default: return {
      title: "Daliah Banda",
      description: "Sitio oficial Daliah Banda"
    }
  }  
}

export async function render(req){
  const handler = createStaticHandler(routes)

  const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`
  const request = new Request(fullUrl)
  const context = await handler.query(request)

  if (context instanceof Response) throw context

  const router = createStaticRouter(handler.dataRoutes, context)

  const html = renderToString(
        <StaticRouterProvider router={router} context={context} />
  )

  const pathname = new URL(fullUrl).pathname
  const meta = getHead(pathname)

  head = `
  <title>${meta.title}</title>
  <meta name="description" content="${meta.description}">
  ${tag(meta.keywords, `<meta name="keywords" content="${meta.keywords}">`)}
  ${tag(meta.author, `<meta name="author" content="${meta.author}">`)}
  ${tag(meta.language, `<meta http-equiv="content-language" content="${meta.language}">`)}
  ${tag(meta.robots, `<meta name="robots" content="${meta.robots}">`)}
  ${tag(meta.googlebot, `<meta name="googlebot" content="${meta.googlebot}">`)}
  ${tag(meta.canonical, `<link rel="canonical" href="${meta.canonical}">`)}

  <!-- Open Graph -->
  ${
    meta.og
      ? `
    ${tag(meta.og.type, `<meta property="og:type" content="${meta.og.type}">`)}
    ${tag(meta.og.title, `<meta property="og:title" content="${meta.og.title}">`)}
    ${tag(meta.og.description, `<meta property="og:description" content="${meta.og.description}">`)}
    ${tag(meta.og.url, `<meta property="og:url" content="${meta.og.url}">`)}
    ${tag(meta.og.siteName, `<meta property="og:site_name" content="${meta.og.siteName}">`)}
    ${tag(meta.og.locale, `<meta property="og:locale" content="${meta.og.locale}">`)}

    ${tag(meta.og.image, `<meta property="og:image" content="${meta.og.image}">`)}
    ${tag(meta.og.imageWidth, `<meta property="og:image:width" content="${meta.og.imageWidth}">`)}
    ${tag(meta.og.imageHeight, `<meta property="og:image:height" content="${meta.og.imageHeight}">`)}
    ${tag(meta.og.imageAlt, `<meta property="og:image:alt" content="${meta.og.imageAlt}">`)}

    ${tag(meta.og.video, `<meta property="og:video" content="${meta.og.video}">`)}
    `
      : ""
  }

  <!-- Twitter -->
  ${
    meta.twitter
      ? `
    ${tag(meta.twitter.card, `<meta name="twitter:card" content="${meta.twitter.card}">`)}
    ${tag(meta.twitter.title, `<meta name="twitter:title" content="${meta.twitter.title}">`)}
    ${tag(meta.twitter.description, `<meta name="twitter:description" content="${meta.twitter.description}">`)}
    ${tag(meta.twitter.image, `<meta name="twitter:image" content="${meta.twitter.image}">`)}
    ${tag(meta.twitter.site, `<meta name="twitter:site" content="${meta.twitter.site}">`)}
    ${tag(meta.twitter.creator, `<meta name="twitter:creator" content="${meta.twitter.creator}">`)}
    `
      : ""
  }

  <!-- Music -->
  ${
    meta.music
      ? `
    ${tag(meta.music.genre, `<meta name="music:genre" content="${meta.music.genre}">`)}
    ${tag(meta.music.musician, `<meta name="music:musician" content="${meta.music.musician}">`)}
    ${tag(meta.music.location, `<meta name="music:location" content="${meta.music.location}">`)}
    `
      : ""
  }

  <!-- JSON-LD -->
  ${
    meta.schema
      ? `
    <script type="application/ld+json">
      ${JSON.stringify(meta.schema)}
    </script>
    `:""}`

  return { 
    html,
    head: head || '',
    hydrationData: context
  }
}
