import { renderToString } from 'react-dom/server'
import { createStaticHandler,createStaticRouter,StaticRouterProvider } from 'react-router'
import { routes } from './routes'

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

  return { 
    html,
    head: context.head || '',
    hydrationData: context
  }
}
