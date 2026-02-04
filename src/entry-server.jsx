import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { createStaticRouter,StaticRouterProvider } from 'react-router'
import { routes } from './routes'

/**
 * @param {string} _url
 */
export function render(_url) {
  const router = createStaticRouter(routes, {
    location: _url})

  const html = renderToString(
    <StrictMode>
        <StaticRouterProvider router={router} />
    </StrictMode>,
  )
  return { html }
}
