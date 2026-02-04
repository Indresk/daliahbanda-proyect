import ContenidoTemporal from "./components/ContenidoTemporal"
import App from "./App"

export const routes = [
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <ContenidoTemporal />
      },
      {
        path: "/test",
        element: <h1>test01</h1>
      }
    ]
  }
]