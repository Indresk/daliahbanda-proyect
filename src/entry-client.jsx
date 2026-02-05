import './index.css'
import { hydrateRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { routes } from './routes'

const hydrationData = window.__INITIAL_DATA__ || {}

const router = createBrowserRouter(routes, { hydrationData })

hydrateRoot(
  document.getElementById('root'),
    <RouterProvider router={router} />
)
