import './index.css'
import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { routes } from './routes'

const hydrationData = window.__INITIAL_DATA__ || {}
console.log('Client hydrationData:', hydrationData)
const router = createBrowserRouter(routes, { hydrationData })

hydrateRoot(
  document.getElementById('root'),
  //<StrictMode>
    <RouterProvider router={router} />
  //</StrictMode>,
)
