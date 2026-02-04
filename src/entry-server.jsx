import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { createStaticHandler,createStaticRouter,StaticRouterProvider } from 'react-router'
import { routes } from './routes'

/**
 * @param {string} _url
 */
export async function render(_url) {
  const handler = createStaticHandler(routes)
  const request = new Request(`http://localhost${_url}`)
  const context = await handler.query(request)

  if (context instanceof Response) {
    // manejar redirects, etc.
    throw context
  }

   const router = createStaticRouter(handler.dataRoutes, context)

  const html = renderToString(
    <StrictMode>
        <StaticRouterProvider router={router} context={context} />
    </StrictMode>,
  )
  return { html }
}
