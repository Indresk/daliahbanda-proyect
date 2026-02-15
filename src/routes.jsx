import Index from "./views/Index"
import LiveView from "./views/LiveView"
import App from "./App"

export const routes = [
  {
    id: "root",
    loader: () => ({}),
    Component: App,
    children: [
      {
        index: true,
        loader: () => ({}),
        Component: Index,
      },
      {
        path: "test",
        loader: () => ({ message: "test loaded" }),
        Component: () => <h1>test01</h1>,
      },
      {
        path: "live",
        loader: () => ({}),
        Component: () => <LiveView/>,
      }
    ]
  }
]