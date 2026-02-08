import Footer from "./components/global/Footer/Footer"
import Header from "./components/global/Header/Header"
import DaliahClicker from "./components/global/DaliahClicker/DaliahClicker"
import { Outlet } from "react-router-dom" 

function App() {

  return (
      <>
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
          <Header/>
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
        <DaliahClicker/>
      </>
  )
}

export default App
