import Index from "./views/Index"
import LiveView from "./views/LiveView"
import LogInView from "./views/LogInView"
import AlbumsView from "./views/AlbumsView"
import ProtectedRoute from "./components/Login/ProtectedRoute"
import ErrorView from "./views/ErrorView"
import App from "./App"

export const routes = [
  {
    id: "root",
    loader: () => ({}),
    Component: App,
    ErrorBoundary:ErrorView,
    children: [
      {
        index: true,
        loader: () => ({}),
        Component: Index,
      },
      {
        path: "live",
        loader: () => ({}),
        Component: () => <LiveView/>,
      },
      {
        path: "albums",
        loader: () => ({}),
        Component: () => <AlbumsView/>,
      },
      {
        path: "login",
        loader: () => ({}),
        Component: () => <LogInView/>,
      },
      {
        Component:ProtectedRoute,
        children:[
          {
            path: "test",
            loader: () => ({ message: "test loaded" }),
            Component: () => <h1>test01</h1>,
          },
        ]
      }
    ]
  }
]