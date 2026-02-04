import ContenidoTemporal from "./components/ContenidoTemporal"
import App from "./App"

export const routes = [
  {
    id: "root",
    Component: App,
    children: [
      {
        index: true,
        Component: ContenidoTemporal,
      },
      {
        path: "test",
        Component: () => <h1>test01</h1>,
      }
    ]
  }
]