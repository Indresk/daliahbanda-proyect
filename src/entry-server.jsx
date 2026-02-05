import { renderToString } from 'react-dom/server'
import { createStaticHandler,createStaticRouter,StaticRouterProvider } from 'react-router'
import { routes } from './routes'
import { metaIndex } from './meta/metaIndex'

let head = ''
const getHead = (pathname) => {
  if (pathname === '/') return metaIndex
  
  return {
    title: "Daliah Banda",
    description: "Sitio oficial Daliah Banda"
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
    <meta name="keywords" content="${meta.keywords}">
    <meta name="author" content="${meta.author}">
    <link rel="canonical" href="${meta.canonical}">
    
    <!-- OG -->
    <meta property="og:type" content="${meta.og.type}">
    <meta property="og:title" content="${meta.og.title}">
    <meta property="og:description" content="${meta.og.description}">
    <meta property="og:url" content="${meta.og.url}">
    <meta property="og:site_name" content="${meta.og.siteName}">
    <meta property="og:locale" content="${meta.og.locale}">

    <meta property="og:image" content="${meta.og.image}">
    <meta property="og:image:width" content="${meta.og.imageWidth}">
    <meta property="og:image:height" content="${meta.og.imageHeight}">
    <meta property="og:image:alt" content="${meta.og.imageAlt}">

    <meta name="twitter:card" content="${meta.twitter.card}">
    <meta name="twitter:title" content="${meta.twitter.title}">
    <meta name="twitter:description" content="${meta.twitter.description}">
    <meta name="twitter:image" content="${meta.twitter.image}">
    <meta name="twitter:site" content="${meta.twitter.site}">
    <meta name="twitter:creator" content="${meta.twitter.creator}">

    <meta name="music:genre" content="${meta.music.genre}">
    <meta name="music:musician" content="${meta.music.musician}">
    <meta name="music:location" content="${meta.music.location}">
    
    <!-- JSON-LD -->
    <script type="application/ld+json">
      ${JSON.stringify(meta.schema)}
    </script>
  `

  return { 
    html,
    head: head || '',
    hydrationData: context
  }
}
