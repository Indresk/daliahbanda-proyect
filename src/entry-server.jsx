import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { createStaticHandler,createStaticRouter,StaticRouterProvider } from 'react-router'
import { routes } from './routes'

/**
 * @param {string} _url - Express request
 */
export async function render(_url,req){
  const handler = createStaticHandler(routes)

  const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`
  //const fullUrl = `http://localhost:5173${_url.startsWith('/') ? _url : '/' + _url}`
  console.log('Server fullUrl:', fullUrl)
  const request = new Request(fullUrl)
  //const request = new Request(`http://localhost${_url}`)
  const context = await handler.query(request)

  if (context instanceof Response) throw context

  const router = createStaticRouter(handler.dataRoutes, context)

  const html = renderToString(
    //<StrictMode>
        <StaticRouterProvider router={router} context={context} />
    //</StrictMode>,
  )

  console.log('Server URL:', _url, '→ Context matches:', context.matches?.map(m => m.pathname))

  return { 
    html,
    head: '',
    hydrationData: context
  }
}
